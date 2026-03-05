"use client";

import Link from "next/link";
import { Phone, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-rose-50 via-white to-rose-100/50 pt-20 pb-32 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                <div className="w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-3xl" />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
                <div className="w-[500px] h-[500px] bg-rose-300/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold tracking-wide mb-6">
                            Đại lý Dai-ichi Life Việt Nam
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
                    >
                        Đồng hành cùng mẹ,
                        <span className="block text-rose-600 mt-2">Bảo vệ tương lai bé</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
                    >
                        Lê Vy mang đến giải pháp bảo hiểm thai sản và sức khỏe toàn diện. Tư vấn tận tâm – Bồi thường nhanh chóng.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="https://zalo.me/0909580238"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-rose-600 px-8 py-4 text-white font-semibold text-lg hover:bg-rose-700 transition shadow-lg shadow-rose-600/30"
                        >
                            <Phone className="w-5 h-5 animate-pulse" />
                            Nhận Tư Vấn Ngay
                        </Link>
                    </motion.div>

                    {/* Quick Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left"
                    >
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                                <HeartHandshake className="w-5 h-5 text-rose-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Tư vấn tận tình</h3>
                                <p className="text-sm text-slate-600 mt-1">Phân tích đúng nhu cầu, không chèo kéo</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-5 h-5 text-rose-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Chi phí hợp lý</h3>
                                <p className="text-sm text-slate-600 mt-1">Gói bảo hiểm được thiết kế tối ưu nhất</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-5 h-5 text-rose-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Hỗ trợ bồi thường</h3>
                                <p className="text-sm text-slate-600 mt-1">Giải quyết bồi thường nhanh chóng 24/7</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
