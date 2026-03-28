<?php
/**
 * Plugin Name: Headless CRM (Next.js Integration)
 * Description: Registers Custom Post Types (Customers, Policies), ACFs, & REST API Endpoints for the Next.js Mini-CRM frontend.
 * Version: 1.0.0
 * Author: AI Assistant
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * 1. Register Custom Post Types: Customers and Policies
 */
function crm_register_cpts() {
    // Customers CPT
    $customer_args = array(
        'labels'       => array(
            'name'          => 'Customers',
            'singular_name' => 'Customer',
        ),
        'public'       => true,
        'has_archive'  => true,
        'show_in_rest' => true, // Enable Gutenberg / REST API
        'supports'     => array( 'title', 'editor', 'custom-fields' ),
        'menu_icon'    => 'dashicons-groups',
    );
    register_post_type( 'customers', $customer_args );

    // Policies CPT
    $policies_args = array(
        'labels'       => array(
            'name'          => 'Policies (GCN)',
            'singular_name' => 'Policy',
        ),
        'public'       => true,
        'has_archive'  => true,
        'show_in_rest' => true,
        'supports'     => array( 'title', 'custom-fields' ),
        'menu_icon'    => 'dashicons-media-document',
    );
    register_post_type( 'policies', $policies_args );
}
add_action( 'init', 'crm_register_cpts' );

/**
 * 2. Setup REST API Custom Endpoints
 */
add_action( 'rest_api_init', function () {

    // A. Endpoint for Kanban Board
    register_rest_route( 'crm/v1', '/kanban', array(
        'methods'             => 'GET',
        'callback'            => 'crm_get_kanban_data',
        'permission_callback' => 'crm_check_api_permissions'
    ));

    // B. Endpoint to update Customer Status
    register_rest_route( 'crm/v1', '/customers/(?P<id>\d+)/status', array(
        'methods'             => 'POST',
        'callback'            => 'crm_update_customer_status',
        'permission_callback' => 'crm_check_api_permissions'
    ));

    // C. Endpoint for Renewals (Dashboard Alerts)
    register_rest_route( 'crm/v1', '/renewals', array(
        'methods'             => 'GET',
        'callback'            => 'crm_get_renewals',
        'permission_callback' => 'crm_check_api_permissions'
    ));
    
    // D. Analytics (Doanh số, Hoa hồng)
    register_rest_route( 'crm/v1', '/analytics', array(
        'methods'             => 'GET',
        'callback'            => 'crm_get_analytics',
        'permission_callback' => 'crm_check_api_permissions'
    ));
} );

/**
 * Permission check for CRM Endpoints
 * Supports standard application password (is_user_logged_in() will be true if Auth header sent)
 */
function crm_check_api_permissions() {
    if ( ! is_user_logged_in() ) {
        return new WP_Error( 'rest_forbidden', esc_html__( 'You must be logged in to view the CRM.', 'my-text-domain' ), array( 'status' => 401 ) );
    }
    // Might want to add role check here e.g., current_user_can('edit_posts')
    return true;
}

/**
 * 3. Endpoints Callbacks
 */

function crm_get_kanban_data( $request ) {
    $args = array(
        'post_type'      => 'customers',
        'posts_per_page' => -1,
        'post_status'    => 'publish',
        // Optional: filter by author if each agent only sees their own
        // 'author' => get_current_user_id() 
    );
    
    $query = new WP_Query( $args );
    $kanban_columns = array(
        'new'        => array('id' => 'new', 'title' => 'Khách Mới', 'cards' => array()),
        'consulting' => array('id' => 'consulting', 'title' => 'Đang Tư Vấn', 'cards' => array()),
        'quoting'    => array('id' => 'quoting', 'title' => 'Đang Báo Giá', 'cards' => array()),
        'won'        => array('id' => 'won', 'title' => 'Đã Chốt', 'cards' => array()),
        'lost'       => array('id' => 'lost', 'title' => 'Từ Chối', 'cards' => array()),
    );

    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();
            $status = get_post_meta( get_the_ID(), 'crm_status', true ) ?: 'new';
            
            $card = array(
                'id'    => get_the_ID(),
                'title' => get_the_title(),
                'phone' => get_post_meta( get_the_ID(), 'crm_phone', true ),
            );

            if (isset($kanban_columns[$status])) {
                $kanban_columns[$status]['cards'][] = $card;
            } else {
                $kanban_columns['new']['cards'][] = $card;
            }
        }
        wp_reset_postdata();
    }

    return array_values($kanban_columns);
}

function crm_update_customer_status( $request ) {
    $customer_id = $request['id'];
    $new_status  = $request->get_param( 'status' );

    if ( ! get_post( $customer_id ) ) {
        return new WP_Error( 'no_post', 'Customer not found', array( 'status' => 404 ) );
    }

    update_post_meta( $customer_id, 'crm_status', sanitize_text_field($new_status) );
    return rest_ensure_response( array( 'success' => true, 'id' => $customer_id, 'status' => $new_status ) );
}

function crm_get_renewals( $request ) {
    $args = array(
        'post_type'      => 'policies',
        'posts_per_page' => -1,
        'post_status'    => 'publish',
    );
    
    $query = new WP_Query( $args );
    $renewals = array();
    $now = new DateTime();

    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();
            $expiry_date_str = get_post_meta( get_the_ID(), 'crm_expiry_date', true );
            
            if ($expiry_date_str) {
                $expiry_date = new DateTime($expiry_date_str);
                $diff = $now->diff($expiry_date);
                $days = $diff->days;
                $is_past = $diff->invert == 1;

                if (! $is_past && $days <= 30) {
                    $renewals[] = array(
                        'id'          => get_the_ID(),
                        'title'       => get_the_title(),
                        'expiry_date' => $expiry_date_str,
                        'days_left'   => $days,
                        'customer_id' => get_post_meta( get_the_ID(), 'crm_customer_id', true ),
                    );
                }
            }
        }
        wp_reset_postdata();
    }
    
    // Sort renewals by days left ascending
    usort($renewals, function($a, $b) {
        return $a['days_left'] <=> $b['days_left'];
    });

    return rest_ensure_response( $renewals );
}

function crm_get_analytics( $request ) {
    // Basic mock logic. Real data would count 'won' customers and sum policy values.
    return rest_ensure_response( array(
        'contracts_won' => 12,
        'revenue'       => 150000000,
        'est_commission'=> 25000000
    ));
}


/**
 * 4. Advanced / Placeholder Hooks Logic (For OCR & Webhook Triggers)
 */

// Hook: Actions after a policy document is uploaded/saved (Placeholder for AI/OCR)
add_action( 'save_post_policies', 'crm_process_ocr_on_policy_save', 10, 3 );
function crm_process_ocr_on_policy_save( $post_id, $post, $update ) {
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
    
    // Check if a new file_cccd or file_gcn was updated
    // TODO: Send image URL to OCR API (like FPT.AI or Google Vision)
    // $image_url = wp_get_attachment_url( get_post_meta($post_id, 'file_cccd', true) );
    // $ocr_data = api_call_ocr( $image_url );
    // update_post_meta($post_id, 'crm_extracted_name', $ocr_data['name']);
}

// Hook: Daily check for renewals (Placeholder for n8n / Zalo ZNS API)
// To activate, you would use wp_schedule_event
function crm_daily_renewal_notifications() {
    // Find all policies expiring in exactly 30, 15, or 3 days
    // Fetch user Zalo/Phone and send Webhook to n8n
    // wp_remote_post('https://your-n8n-server.com/webhook/renewals', array(
    //     'body' => json_encode(array('phone' => '...', 'days' => 3)),
    //     'headers' => array('Content-Type' => 'application/json'),
    // ));
}
add_action( 'crm_daily_cron_hook', 'crm_daily_renewal_notifications' );

// Setup the scheduled event on plugin activation
register_activation_hook( __FILE__, function() {
    if ( ! wp_next_scheduled( 'crm_daily_cron_hook' ) ) {
        wp_schedule_event( time(), 'daily', 'crm_daily_cron_hook' );
    }
});
register_deactivation_hook( __FILE__, function() {
    wp_clear_scheduled_hook( 'crm_daily_cron_hook' );
});
