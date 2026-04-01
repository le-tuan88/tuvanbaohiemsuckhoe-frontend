import { getAllPosts } from "@/lib/wp";
import BlogListClient from "./BlogListClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Tuyển tập mẹo hay | Lê Vy Bảo Hiểm",
    description: "Các bài phân tích chuyên sâu về bảo hiểm nhân thọ, bảo hiểm sức khoẻ, thai sản trên góc nhìn chuyên gia từ Lê Vy.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Blog & Tuyển tập mẹo hay | Lê Vy Bảo Hiểm",
        description: "Các bài phân tích chuyên sâu về bảo hiểm nhân thọ, bảo hiểm sức khoẻ, thai sản trên góc nhìn chuyên gia từ Lê Vy.",
        url: "/blog",
        siteName: "Lê Vy Bảo Hiểm",
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog & Tuyển tập mẹo hay | Lê Vy Bảo Hiểm",
        description: "Các bài phân tích chuyên sâu về bảo hiểm nhân thọ, bảo hiểm sức khoẻ, thai sản trên góc nhìn chuyên gia từ Lê Vy.",
    },
};

// Next 15 Server Component
export default async function BlogPage() {
    const postsData = await getAllPosts();
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blog & Tuyển tập mẹo hay | Lê Vy Bảo Hiểm",
        "description": "Các bài phân tích chuyên sâu về bảo hiểm nhân thọ, bảo hiểm sức khoẻ, thai sản.",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://tuvanbaohiemsuckhoe.com"}/blog`
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogListClient initialPosts={postsData} />
        </>
    );
}
