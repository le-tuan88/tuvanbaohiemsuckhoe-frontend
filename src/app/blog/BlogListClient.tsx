"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Rss } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogListClient({ posts }: { posts: any[] }) {
    if (!posts || posts.length === 0) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-8 text-slate-500">
                <Rss className="w-16 h-16 mb-4 text-slate-300" />
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Chưa có bài viết nào</h2>
                <p>Các bài viết đang được Lê Vy cập nhật, bạn vui lòng quay lại sau nhé!</p>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen pb-24 pt-10">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Góc Kiến Thức <span className="text-rose-600">Bảo Hiểm</span></h1>
                    <p className="text-lg text-slate-600">
                        Tổng hợp các kinh nghiệm, kiến thức hữu ích về bảo hiểm chăm sóc sức khoẻ, thai sản và bảo vệ tài chính gia đình.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {posts.map((post, index) => {
                        const dateStr = new Date(post.date).toLocaleDateString("vi-VN", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"
                        });
                        const imageUrl = post.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&q=80";

                        return (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
                            >
                                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={imageUrl}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                </Link>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-2 text-rose-500 text-sm font-medium mb-3">
                                        <Calendar className="w-4 h-4" />
                                        <time dateTime={post.date}>{dateStr}</time>
                                    </div>

                                    <Link href={`/blog/${post.slug}`} className="block group-hover:text-rose-600 transition-colors">
                                        <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 leading-snug">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <div
                                        className="text-slate-600 line-clamp-3 mb-6 flex-grow text-sm leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt || "" }}
                                    />

                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-rose-600 font-bold text-sm hover:text-rose-700 mt-auto uppercase tracking-wide">
                                        Đọc tiếp <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

            </div>
        </div >
    );
}
