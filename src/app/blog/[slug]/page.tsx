import { getPostBySlug } from "@/lib/wp";
import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Không tìm thấy bài viết' };
  }

  const cleanExcerpt = post.excerpt ? post.excerpt.replace(/<[^>]*>?/gm, "").substring(0, 160) : "";
  const imageUrl = post.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&q=80";

  return {
    title: `${post.title} | Lê Vy Bảo Hiểm`,
    description: cleanExcerpt,
    alternates: {
        canonical: `/blog/${slug}`,
    },
    openGraph: {
        title: post.title,
        description: cleanExcerpt,
        url: `/blog/${slug}`,
        siteName: "Lê Vy Bảo Hiểm",
        locale: "vi_VN",
        type: "article",
        publishedTime: post.date,
        images: [
            {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: post.title,
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: post.title,
        description: cleanExcerpt,
        images: [imageUrl],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&q=80";
  const cleanExcerpt = post.excerpt ? post.excerpt.replace(/<[^>]*>?/gm, "").substring(0, 160) : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": cleanExcerpt,
    "image": imageUrl,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": "Lê Vy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lê Vy Bảo Hiểm",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://tuvanbaohiemsuckhoe.com"}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://tuvanbaohiemsuckhoe.com"}/blog/${slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailClient post={post} />
    </>
  );
}
