"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="py-24 bg-rose-50/50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-rose-100 p-8 md:p-14 max-w-4xl mx-auto text-center relative overflow-hidden"
                >
                    {/* Decorative Blobs */}
                    <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl z-0 pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl z-0 pointer-events-none"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Bảo vệ gia đình bạn ngay hôm nay!
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Nhắn tin hoặc gọi điện cho Lê Vy để được phân tích nhu cầu và lập bảng minh họa hoàn toàn miễn phí.
                        </p>

                        <Link
                            href="https://zalo.me/0909580238"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-rose-600 text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-rose-700 shadow-lg shadow-rose-200 hover:scale-105 transition-all duration-300"
                        >
                            <PhoneCall className="w-6 h-6 animate-pulse" />
                            0909 580 238
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
