"use client";

import Link from "next/link";
import { Check, Heart, User, Award, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function AboutLeVy() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 w-full flex justify-center relative"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-rose-200 via-rose-100 to-rose-50 shadow-2xl">
                            <div className="w-full h-full rounded-full overflow-hidden bg-rose-100 flex items-center justify-center relative border-4 border-white">
                                {/* Thay thế ảnh thật ở đây, hiện tại dùng icon giả lập Avatar */}
                                <div className="absolute inset-0 bg-rose-50 flex items-center justify-center text-rose-200">
                                    <User className="w-32 h-32" />
                                </div>
                                {/* Avatar Image 
                <img 
                  src="/images/avatar-levy.jpg" 
                  alt="Lê Vy - Tư vấn bảo hiểm Dai-ichi Life" 
                  className="w-full h-full object-cover relative z-10"
                />
                */}
                            </div>

                            {/* Badge 1 */}
                            <div className="absolute top-10 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-rose-50 rotate-[-5deg]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                                        <Heart className="w-5 h-5 fill-rose-600" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-slate-900">100%</p>
                                        <p className="text-xs text-slate-500 font-medium">Khách hàng<br />hài lòng</p>
                                    </div>
                                </div>
                            </div>

                            {/* Badge 2 */}
                            <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-rose-50 rotate-[5deg]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                                        <Award className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-slate-900">5+ Năm</p>
                                        <p className="text-xs text-slate-500 font-medium">Kinh nghiệm<br />tư vấn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 w-full space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                                Về <span className="text-rose-600">Lê Vy Bảo Hiểm</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-rose-600 rounded-full mb-6"></div>

                            <blockquote className="text-xl text-slate-700 italic border-l-4 border-rose-200 pl-6 mb-6">
                                "Là một người mẹ, người phụ nữ, Vy hiểu rõ những lo toan của các gia đình khi chuẩn bị đón con yêu chào đời hay chăm sóc sức khỏe cho cả nhà."
                            </blockquote>

                            <p className="text-slate-600 leading-relaxed text-lg">
                                Với sứ mệnh mang lại sự bình an tài chính, Lê Vy cam kết thiết kế những giải pháp bảo vệ sức khỏe và thai sản tối ưu nhất từ Dai-ichi Life, phù hợp với khả năng tài chính của từng gia đình.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Tận tâm</h4>
                                    <p className="text-slate-600 text-sm">Luôn đặt quyền lợi khách hàng lên hàng đầu.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Chuyên nghiệp</h4>
                                    <p className="text-slate-600 text-sm">Am hiểu nghiệp vụ chăm sóc sức khoẻ và thai sản.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Thấu hiểu</h4>
                                    <p className="text-slate-600 text-sm">Lắng nghe và chia sẻ như một người bạn đồng hành.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex items-center gap-4">
                            <Link
                                href="/ve-le-vy"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-slate-800 focus-visible:outline-none"
                            >
                                Xem thêm về Lê Vy
                            </Link>
                            <Link
                                href="https://zalo.me/0909580238"
                                target="_blank"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-rose-200 bg-rose-50 px-6 text-sm font-medium text-rose-700 transition-colors hover:bg-rose-100 hover:text-rose-800"
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                Kết nối Zalo
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
