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

    const postId = searchParams.get("p") || searchParams.get("post_id");
    const previewSlug = searchParams.get("preview_id") || searchParams.get("slug");

    // Nếu có ID (dạng ?p=123 hoặc ?preview=true&p=123)
    if (postId && !isNaN(Number(postId))) {
        let post = null;
        try {
            post = await getPostById(postId);
        } catch {
            // Ignore fetch error, sẽ fallback về trang chủ
        }
        if (post?.slug) {
            redirect(`/${post.slug}`);
        }
    }

    // Nếu có slug
    if (previewSlug) {
        let post = null;
        try {
            post = await getPostBySlug(previewSlug);
        } catch {
            // Ignore fetch error
        }
        if (post?.slug) {
            redirect(`/${post.slug}`);
        }
    }

    // Fallback về blog nếu không tìm được bài
    redirect("/blog");
}
