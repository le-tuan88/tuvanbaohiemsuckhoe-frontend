"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="py-20 bg-rose-600 relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Bảo vệ gia đình bạn ngay hôm nay!
                    </h2>
                    <p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto">
                        Nhắn tin hoặc gọi điện cho Lê Vy để được phân tích nhu cầu và lập bảng minh họa hoàn toàn miễn phí.
                    </p>

                    <Link
                        href="https://zalo.me/0909580238"
                        target="_blank"
                        className="inline-flex items-center gap-3 bg-white text-rose-600 px-8 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-rose-50 hover:scale-105 transition-all duration-300"
                    >
                        <PhoneCall className="w-6 h-6" />
                        0909 580 238
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
