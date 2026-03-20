import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { getPostById, getPostBySlug } from "@/lib/wp";

/**
 * WordPress Preview Handler
 *
 * WordPress Admin khi click "Xem bài viết" hoặc "Preview" sẽ redirect về:
 * - Bài đã publish: /?p=123 hoặc /ten-slug/
 * - Bài nháp: /?preview=true&p=123
 *
 * Route này bắt các URL đó và redirect đến đúng slug trên frontend.
 */
export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;

    const postId = searchParams.get("p") || searchParams.get("post_id") || searchParams.get("preview_id");
    const slugParam = searchParams.get("slug");

    console.log(">>> [DEBUG] Preview handler hit with params:", Object.fromEntries(searchParams.entries()));

    // Nếu có ID ( WordPress thường dùng ?p=ID cho preview bài viết )
    if (postId && !isNaN(Number(postId))) {
        let post = null;
        try {
            console.log(">>> [DEBUG] Fetching post by ID:", postId);
            post = await getPostById(postId);
        } catch (error) {
            console.error(">>> [DEBUG] Error fetching post by ID:", error);
        }

        if (post?.slug) {
            console.log(">>> [DEBUG] Redirecting to slug by ID:", post.slug);
            redirect(`/${post.slug}`);
        } else {
            console.log(">>> [DEBUG] Post slug NOT found for ID:", postId);
        }
    }

    // Nếu có slug ( một số link preview có slug )
    if (slugParam) {
        let post = null;
        try {
            console.log(">>> [DEBUG] Fetching post by slug param:", slugParam);
            post = await getPostBySlug(slugParam);
        } catch (error) {
            console.error(">>> [DEBUG] Error fetching post by slug:", error);
        }

        if (post?.slug) {
            console.log(">>> [DEBUG] Redirecting to slug:", post.slug);
            redirect(`/${post.slug}`);
        }
    }

    // Nếu không tìm thấy hoặc lỗi, quay về blog thay vì trang chủ để người dùng dễ nhận biết
    console.log(">>> [DEBUG] Fallback redirect to /blog");
    redirect("/blog");
}
