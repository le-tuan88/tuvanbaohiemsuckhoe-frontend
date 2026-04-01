"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Rss, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BlogListClient({ initialPosts }: { initialPosts: any[] }) {
    const [currentPage, setCurrentPage] = useState(1);
    
    if (!initialPosts || initialPosts.length === 0) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-8 text-slate-500">
                <Rss className="w-16 h-16 mb-4 text-slate-300" />
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Chưa có bài viết nào</h2>
                <p>Các bài viết đang được Lê Vy cập nhật, bạn vui lòng quay lại sau nhé!</p>
            </div>
        );
    }

    const itemsPerPage = 6;
    
    // We only show the featured post on page 1
    const featuredPost = currentPage === 1 ? initialPosts[0] : null;

    // To align with standard UX, if page 1 displays 1 Big + 6 Small, then index items start at 1
    // If we're on page 2, we shouldn't show the featured post. And we just show up to itemsPerPage.
    // Example: total = 13.
    // Page 1: featured = index 0. Grid = index 1 to 6 (6 posts).
    // Page 2: featured = null. Grid = index 7 to 12 (6 posts).
    // Page 3: featured = null. Grid = index 13 to 13 (1 post).
    
    const startIndex = currentPage === 1 ? 1 : ((currentPage - 1) * itemsPerPage) + 1;
    const gridPosts = initialPosts.slice(startIndex, startIndex + itemsPerPage);

    const totalGridAvailable = initialPosts.length - 1; // excluding the featured post
    const totalPages = Math.max(1, Math.ceil(totalGridAvailable / itemsPerPage));

    return (
        <div className="bg-slate-50 min-h-screen pb-24 pt-10">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Góc Kiến Thức <span className="text-rose-600">Bảo Hiểm</span></h1>
                    <p className="text-lg text-slate-600">
                        Tổng hợp các kinh nghiệm, kiến thức hữu ích về bảo hiểm chăm sóc sức khoẻ, thai sản và bảo vệ tài chính gia đình.
                    </p>
                </div>

                {/* Featured Post */}
                {featuredPost && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-7xl mx-auto mb-16"
                    >
                        <Link href={`/${featuredPost.slug}`} className="group relative block rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="w-full h-[400px] md:h-[500px] relative bg-slate-200">
                                <Image
                                    src={featuredPost.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1200&q=80"}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="100vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                                <div className="flex items-center gap-2 text-rose-300 text-sm font-bold mb-4 uppercase tracking-wider">
                                    <Calendar className="w-4 h-4" />
                                    <time dateTime={featuredPost.date}>
                                        {new Date(featuredPost.date).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })}
                                    </time>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight group-hover:text-rose-200 transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <div
                                    className="text-slate-200 line-clamp-2 mb-0 max-w-3xl text-lg hidden md:block"
                                    dangerouslySetInnerHTML={{ __html: featuredPost.excerpt || "" }}
                                />
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* Grid Posts */}
                {gridPosts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                        {gridPosts.map((post: any, index: number) => {
                            const dateStr = new Date(post.date).toLocaleDateString("vi-VN", {
                                day: "2-digit", month: "2-digit", year: "numeric"
                            });
                            const imageUrl = post.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=600&q=80";

                            return (
                                <motion.article
                                    key={post.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group"
                                >
                                    <Link href={`/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                                        <Image
                                            src={imageUrl}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </Link>

                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-3">
                                            <Calendar className="w-4 h-4" />
                                            <time dateTime={post.date}>{dateStr}</time>
                                        </div>

                                        <Link href={`/${post.slug}`} className="block group-hover:text-rose-600 transition-colors">
                                            <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 leading-snug">
                                                {post.title}
                                            </h2>
                                        </Link>

                                        <div
                                            className="text-slate-600 line-clamp-3 mb-6 flex-grow text-sm leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt || "" }}
                                        />

                                        <Link href={`/${post.slug}`} className="inline-flex items-center gap-1 text-rose-600 font-bold text-sm hover:text-rose-700 mt-auto uppercase tracking-wide">
                                            Đọc bài <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                )}

                {/* Numbered Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-4">
                        <button
                            onClick={() => {
                                setCurrentPage(p => Math.max(1, p - 1));
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            disabled={currentPage === 1}
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {Array.from({ length: totalPages }).map((_, idx) => {
                            const pageNumber = idx + 1;
                            const isActive = pageNumber === currentPage;
                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => {
                                        setCurrentPage(pageNumber);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all shadow-sm
                                        ${isActive 
                                            ? 'bg-rose-600 text-white shadow-md shadow-rose-200 border-none' 
                                            : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-rose-600'
                                        }`
                                    }
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => {
                                setCurrentPage(p => Math.min(totalPages, p + 1));
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            disabled={currentPage === totalPages}
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}

            </div>
        </div >
    );
}
