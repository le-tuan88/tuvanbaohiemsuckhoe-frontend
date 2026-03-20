"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-rose-50/80 via-white to-rose-100/30 pt-4 md:pt-24 pb-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">

                    {/* Cột trái: Nội dung */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col items-start text-left"
                    >
                        <div className="flex flex-col gap-1 md:gap-4 mt-0 mb-4 md:mb-6">
                            <span className="mt-0 mb-0 py-0.5 px-4 rounded-full bg-rose-100 text-rose-700 text-sm font-bold tracking-wide w-fit shadow-sm border border-rose-200">
                                Đại lý Dai-ichi Life Việt Nam
                            </span>

                            <h1 className="mt-0 tracking-tight leading-tight md:leading-tight text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
                                Đồng hành cùng mẹ, <br className="hidden md:block" />
                                <span className="text-rose-600">Bảo vệ tương lai</span> bé
                            </h1>
                        </div>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                            Lê Vy mang đến giải pháp bảo hiểm sức khỏe và thai sản toàn diện, thiết kế riêng cho từng gia đình. Tư vấn tận tâm, hỗ trợ bồi thường nhanh chóng 24/7.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <Link
                                href="https://zalo.me/0909580238"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-rose-600 px-8 py-4 text-white font-bold text-lg hover:bg-rose-700 transition shadow-lg shadow-rose-600/30"
                            >
                                <Phone className="w-5 h-5 animate-pulse" />
                                Nhận Tư Vấn Ngay
                            </Link>

                            <Link
                                href="/ve-le-vy"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border-2 border-rose-600 px-8 py-4 text-rose-600 font-bold text-lg hover:bg-rose-50 transition"
                            >
                                Tìm Hiểu Thêm
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Cột phải: Hình ảnh */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center"
                    >
                        {/* Background Shape / Blob */}
                        <div className="absolute inset-0 bg-rose-200/50 rounded-full blur-[80px] scale-90 -z-10 animate-pulse-slow"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-rose-100 to-pink-50 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 shadow-2xl transition-transform hover:scale-105 duration-700"></div>

                        {/* Image wrapper */}
                        <div
                            className="relative w-[85%] h-[85%] md:w-[75%] md:h-[75%] aspect-square overflow-hidden shadow-2xl z-10"
                            style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                        >
                            <Image
                                src="/hero-image.jpg"
                                alt="Gia đình hạnh phúc cùng Lê Vy Bảo Hiểm"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute top-[10%] -left-4 md:-left-12 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-rose-100 z-20 flex items-center gap-3"
                        >
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-xl">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 leading-tight">Bảo vệ</p>
                                <p className="text-xs text-slate-500 font-medium">Toàn diện 24/7</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[10%] -right-4 md:-right-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-rose-100 z-20 flex items-center gap-3"
                        >
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl">
                                <HeartHandshake className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 leading-tight">Tận tâm</p>
                                <p className="text-xs text-slate-500 font-medium">Đồng hành trọn đời</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>

                {/* Quick Features Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-20 pt-10 border-t border-rose-100/50 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto text-left"
                >
                    <div className="flex items-start gap-4 p-4 rounded-3xl bg-white/60 backdrop-blur-md border border-white hover:bg-white hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0">
                            <HeartHandshake className="w-6 h-6 text-rose-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Tư vấn tận tình</h3>
                            <p className="text-sm text-slate-600 mt-1 leading-relaxed">Phân tích đúng nhu cầu, không chèo kéo</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-3xl bg-white/60 backdrop-blur-md border border-white hover:bg-white hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-6 h-6 text-rose-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Chi phí hợp lý</h3>
                            <p className="text-sm text-slate-600 mt-1 leading-relaxed">Gói bảo hiểm được thiết kế tối ưu nhất</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-3xl bg-white/60 backdrop-blur-md border border-white hover:bg-white hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-6 h-6 text-rose-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Hỗ trợ bồi thường</h3>
                            <p className="text-sm text-slate-600 mt-1 leading-relaxed">Giải quyết bồi thường nhanh chóng 24/7</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
