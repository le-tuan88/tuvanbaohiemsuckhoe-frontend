export const WP_API_URL = process.env.NEXT_PUBLIC_WP_URL || 'https://baohiemgiadinh.vn';
export const WP_API_TOKEN = process.env.WP_CRM_TOKEN; // Recommend using Application Passwords

/**
 * Common fetch wrapper for WP API
 */
async function fetchWP(endpoint: string, options: RequestInit = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(WP_API_TOKEN ? { Authorization: `Basic ${Buffer.from(WP_API_TOKEN).toString('base64')}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${WP_API_URL}/wp-json/crm/v1${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error fetching data from WordPress');
  }

  return response.json();
}

/**
 * Get Kanban Data
 */
export async function getKanbanData() {
  return fetchWP('/kanban', { next: { revalidate: 0 } });
}

/**
 * Update Customer Status
 */
export async function updateCustomerStatus(id: number, status: string) {
  return fetchWP(`/customers/${id}/status`, {
    method: 'POST',
    body: JSON.stringify({ status }),
  });
}

/**
 * Get Renewal Alerts (policies expiring soon)
 */
export async function getRenewalAlerts() {
  return fetchWP('/renewals', { next: { revalidate: 3600 } }); // Cache for 1 hour
}

/**
 * Get Analytics for Dashboard
 */
export async function getAnalytics() {
  return fetchWP('/analytics', { next: { revalidate: 3600 } });
}

/**
 * Upload File to standard WP Media endpoint
 * Handles file optimization on the frontend prior to this call
 */
export async function uploadMedia(file: File) {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch(`${WP_API_URL}/wp-json/wp/v2/media`, {
    method: 'POST',
    headers: {
      ...(WP_API_TOKEN ? { Authorization: `Basic ${Buffer.from(WP_API_TOKEN).toString('base64')}` } : {}),
      'Content-Disposition': `attachment; filename="${file.name}"`
    },
    body: file,
  });

  if (!response.ok) {
    throw new Error('Upload failed');
  }

  return response.json(); // Returns media object { id, source_url }
}
