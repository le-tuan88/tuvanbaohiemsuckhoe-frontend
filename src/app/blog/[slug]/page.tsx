import { getPostBySlug } from "@/lib/wp";
import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Không tìm thấy bài viết' };
  }

  const cleanExcerpt = post.excerpt ? post.excerpt.replace(/<[^>]*>?/gm, "").substring(0, 160) : "";

  return {
    title: `${post.title} | Lê Vy Bảo Hiểm`,
    description: cleanExcerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailClient post={post} />;
}
