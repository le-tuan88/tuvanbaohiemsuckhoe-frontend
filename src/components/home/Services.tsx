"use client";

import Link from "next/link";
import { ShieldPlus, Baby, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
    return (
        <section className="py-24 bg-rose-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Giải Phát Bảo Vệ <span className="text-rose-600">Toàn Diện</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 max-w-2xl mx-auto text-lg"
                    >
                        Lê Vy đồng hành cùng bạn trên mọi chặng đường, mang đến những gói bảo hiểm thiết yếu nhất.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
                            <ShieldPlus className="w-32 h-32" />
                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-rose-100 flex items-center justify-center mb-6 text-rose-600">
                            <ShieldPlus className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Bảo Hiểm Sức Khỏe</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Quỹ chăm sóc y tế dự phòng lên đến 1 tỷ đồng/bệnh/thương tật. Bảo lãnh viện phí tại hàng trăm bệnh viện quốc tế và phòng khám chất lượng cao.
                        </p>

                        <Link href="/bao-hiem-suc-khoe" className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors">
                            Tìm hiểu thêm
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
                            <Baby className="w-32 h-32" />
                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-rose-100 flex items-center justify-center mb-6 text-rose-600">
                            <Baby className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Bảo Hiểm Thai Sản</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Chi trả 100% chi phí sinh nở theo giới hạn quyền lợi. Tự do lựa chọn bênh viện (Từ Dũ, Hùng Vương, Vinmec, Pháp Việt...) mà không cần lo lắng về viện phí.
                        </p>

                        <Link href="/bao-hiem-thai-san" className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors">
                            Tìm hiểu thêm
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
