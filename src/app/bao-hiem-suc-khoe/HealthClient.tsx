"use client";

import Link from "next/link";
import { ShieldCheck, Hospital, Users, CheckCircle, HeartPulse, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function HealthClient() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Header */}
            <section className="bg-rose-600 text-white py-20 relative overflow-hidden text-center px-4">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Bảo Hiểm Sức Khỏe Toàn Diện</h1>
                    <p className="text-lg md:text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
                        Giải pháp bảo vệ tài chính hoàn hảo trước những rủi ro ốm đau, bệnh tật. Quỹ dự phòng y tế cao cấp cho mọi gia đình.
                    </p>
                </motion.div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
                <div className="max-w-5xl mx-auto">

                    {/* Lợi ích chính */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Lợi Ích Nổi Bật</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-rose-50/50 rounded-2xl border border-rose-100 flex gap-4">
                                <ShieldCheck className="w-12 h-12 text-rose-600 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Bảo Lãnh Viện Phí</h3>
                                    <p className="text-slate-600">Thanh toán trực tiếp tại bệnh viện liên kết, không cần ứng trước tiền khám chữa bệnh nội trú/Ngoại trú.</p>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex gap-4">
                                <Hospital className="w-12 h-12 text-indigo-600 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Không Giới Hạn Bệnh Viện</h3>
                                    <p className="text-slate-600">Áp dụng thanh toán chi phí thực tế tại tất cả các bệnh viện từ tuyến huyện, tỉnh đến quốc tế trên toàn quốc.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Đối tượng phù hợp */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="lg:col-span-1 bg-white rounded-3xl shadow-md p-8">
                            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                                <Users className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Đối Tượng Tham Gia</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-slate-700">Trẻ em tử 01 tháng tuổi trở lên</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-slate-700">Ngưởi trưởng thành, trụ cột gia đình</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-slate-700">Người lớn tuổi tới 65 tuổi (tái tục đến 75 tuổi)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Bảng quyền lợi */}
                        <div className="lg:col-span-2 bg-white rounded-3xl shadow-md p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <HeartPulse className="w-8 h-8 text-rose-600" />
                                <h2 className="text-2xl font-bold text-slate-900">Tóm Tắt Quyền Lợi Cao Cấp</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="py-4 px-4 font-semibold text-slate-900 bg-slate-50 rounded-tl-xl">Hạng Mục</th>
                                            <th className="py-4 px-4 font-semibold text-slate-900 bg-slate-50 rounded-tr-xl">Hạn Mức Tối Đa</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr>
                                            <td className="py-4 px-4 text-slate-700">Quỹ chăm sóc y tế / bệnh tật</td>
                                            <td className="py-4 px-4 font-bold text-rose-600">1.000.000.000 VNĐ</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-4 text-slate-700">Tiền phòng giường / Ngày</td>
                                            <td className="py-4 px-4 font-medium text-slate-900">3.000.000 VNĐ</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-4 text-slate-700">Chi phí phẫu thuật</td>
                                            <td className="py-4 px-4 font-medium text-slate-900">Thanh toán 100% thực tế</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-4 text-slate-700">Điều trị Ung thư / Cấy ghép tạng</td>
                                            <td className="py-4 px-4 font-medium text-slate-900">Thanh toán 100% thực tế</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Zalo */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-r from-rose-600 to-pink-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-rose-200"
                    >
                        <h2 className="text-3xl font-bold mb-4">Bạn Cần Báo Giá Chi Tiết?</h2>
                        <p className="text-rose-100 mb-8 max-w-xl mx-auto">Mức phí chỉ từ vài nghìn đồng/ngày tuỳ độ tuổi. Hãy để Lê Vy tính bảng minh hoạ cá nhân hoá cho gia đình bạn.</p>
                        <Link
                            href="https://zalo.me/0909580238"
                            target="_blank"
                            className="inline-flex items-center gap-3 bg-white text-rose-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-rose-50 transition-colors"
                        >
                            <Send className="w-6 h-6" />
                            Nhận Bảng Giá Trên Zalo
                        </Link>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
