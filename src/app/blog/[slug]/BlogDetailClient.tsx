"use client";

import Link from "next/link";
import { Calendar, ChevronLeft, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogDetailClient({ post }: { post: any }) {
    const dateStr = new Date(post.date).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    const imageUrl = post.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&q=80";
    const categoryName = post.categories?.nodes?.[0]?.name || "Kiến Thức";

    // Làm sạch nội dung: Đổi URL quản trị thành URL tương đối
    // Quét cả http và https, có hoặc không có dấu gạch chéo ở cuối
    const cleanContent = post?.content?.replace(
        /https?:\/\/quanly\.tuvandai-ichi-life\.com\.vn/g,
        ''
    ) || "";

    return (
        <article className="bg-white min-h-screen pb-20">

            {/* Featured Header */}
            <header className="relative pt-32 pb-40 overflow-hidden text-center text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                />
                <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />

                <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-rose-200 hover:text-white transition-colors mb-8 text-sm font-semibold uppercase tracking-wider">
                        <ChevronLeft className="w-4 h-4" /> Quay lại Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-3 py-1 bg-rose-600 text-white text-sm font-bold rounded-full mb-6">
                            {categoryName}
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-balance">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-slate-300 font-medium">
                            <Calendar className="w-5 h-5" />
                            <time dateTime={post.date}>{dateStr}</time>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Content wrapper */}
            <div className="container mx-auto px-4 -mt-20 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-14 lg:p-16 border border-slate-100"
                >
                    {/* Main Content using Typography Tailwind logic or custom CSS */}
                    <div
                        className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-rose-600 hover:prose-a:text-rose-700 max-w-none text-slate-700 leading-relaxed wp-content entry-content"
                        dangerouslySetInnerHTML={{ __html: cleanContent }}
                    />

                    <hr className="my-12 border-slate-200" />

                    {/* Post CTA */}
                    <div className="bg-rose-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-rose-100">
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Bạn cần tư vấn chi tiết hơn?</h4>
                            <p className="text-slate-600">Đừng ngần ngại liên hệ Vy để được giải đáp mọi thắc mắc hoàn toàn miễn phí.</p>
                        </div>
                        <Link
                            href="https://zalo.me/0909580238"
                            target="_blank"
                            className="shrink-0 inline-flex items-center gap-2 bg-rose-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-rose-700 transition shadow-lg shadow-rose-200"
                        >
                            <PhoneCall className="w-5 h-5" /> Trò chuyện với Vy
                        </Link>
                    </div>
                </motion.div>
            </div>

        </article>
    );
}
