import { getAllPosts } from "@/lib/wp";
import BlogListClient from "./BlogListClient";

export const metadata = {
    title: "Blog & Tuyển tập mẹo hay | Lê Vy Bảo Hiểm",
    description: "Các bài phân tích chuyên sâu về bảo hiểm nhân thọ, bảo hiểm sức khoẻ, thai sản trên góc nhìn chuyên gia từ Lê Vy.",
};

// Next 15 Server Component
export default async function BlogPage() {
    const posts = await getAllPosts();
    return <BlogListClient posts={posts} />;
}
