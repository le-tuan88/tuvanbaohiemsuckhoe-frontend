"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronLeft, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogDetailClient({ post }: { post: any }) {
    const dateStr = new Date(post.date).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    const imageUrl = post.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1200&q=80";
    const categoryName = post.categories?.nodes?.[0]?.name || "Kiến Thức";

    return (
        <article className="bg-white min-h-screen pb-20 pt-24 md:pt-32">
            
            {/* Top Navigation */}
            <div className="max-w-4xl mx-auto px-[10px] md:px-6 mb-8">
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-rose-600 transition-colors text-sm font-bold uppercase tracking-wider">
                    <ChevronLeft className="w-4 h-4" /> Blog
                </Link>
            </div>

            {/* Clean Header */}
            <header className="max-w-4xl mx-auto px-[10px] md:px-6 text-left mb-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-full uppercase tracking-wider">
                            {categoryName}
                        </span>
                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.date}>{dateStr}</time>
                        </div>
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight md:leading-tight mb-8">
                        {post.title}
                    </h1>
                </motion.div>
            </header>

            {/* Featured Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="max-w-5xl mx-auto px-[10px] md:px-6 mb-12"
            >
                <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
                    <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        className="object-cover"
                    />
                </div>
            </motion.div>

            {/* Content & CTA wrapper */}
            {/* Mobile: px-[10px], Tablet/Desktop: md:px-6 */}
            <div className="max-w-3xl mx-auto px-[10px] md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Main Content */}
                    <div
                        className="wp-content prose prose-lg md:prose-xl prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-rose-600 hover:prose-a:text-rose-700 max-w-none text-slate-800 leading-relaxed md:leading-loose"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <hr className="my-16 border-slate-200" />

                    {/* Post CTA */}
                    <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-rose-100 shadow-sm">
                        <div className="text-center md:text-left">
                            <h4 className="text-2xl font-bold text-slate-900 mb-3 block">Bạn cần tư vấn chi tiết hơn?</h4>
                            <p className="text-slate-600 text-[1.1rem]">Đừng ngần ngại liên hệ Vy để được giải đáp mọi thắc mắc hoàn toàn miễn phí.</p>
                        </div>
                        <Link
                            href="https://zalo.me/0909580238"
                            target="_blank"
                            className="shrink-0 inline-flex items-center justify-center gap-2 bg-rose-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200 w-full md:w-auto text-[1.1rem]"
                        >
                            <PhoneCall className="w-5 h-5" /> Trò chuyện với Vy
                        </Link>
                    </div>
                </motion.div>
            </div>

        </article>
    );
}
