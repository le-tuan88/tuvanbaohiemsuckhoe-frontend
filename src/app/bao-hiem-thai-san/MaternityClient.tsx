"use client";

import Link from "next/link";
import { Baby, Clock, CheckCircle2, MessageSquareHeart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MaternityClient() {
    return (
        <div className="bg-pink-50/50 min-h-screen pb-20">
            {/* Hero */}
            <section className="bg-pink-600 text-white py-24 relative overflow-hidden text-center px-4">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-3xl mx-auto">
                    <Baby className="w-16 h-16 mx-auto mb-6 text-pink-200" />
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Bảo Hiểm Thai Sản Cao Cấp</h1>
                    <p className="text-lg text-pink-100 mb-8 max-w-xl mx-auto">
                        Hành trình đón bé nhẹ nhàng, tận hưởng dịch vụ sinh nở 5 sao tại các bệnh viện tư nhân và quốc tế mà không phải lo chi phí.
                    </p>
                </motion.div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-6 -mt-12 relative z-20">
                <div className="max-w-5xl mx-auto space-y-8">

                    {/* Quyền lợi Thai sản & Thời gian chờ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <CheckCircle2 className="w-8 h-8 text-pink-500" />
                                Quyền Lợi Chi Trả
                            </h2>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-pink-50 border border-pink-100">
                                    <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center shrink-0 font-bold text-pink-700">1</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Sinh Thường & Sinh Mổ</h4>
                                        <p className="text-slate-600 text-sm mt-1">Chi trả 100% chi phí y tế thực tế (giường phòng, phẫu thuật mổ, thuốc men) theo hạn mức gói lựa chọn (20M - 40M...).</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-pink-50 border border-pink-100">
                                    <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center shrink-0 font-bold text-pink-700">2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Biến chứng thai sản</h4>
                                        <p className="text-slate-600 text-sm mt-1">Được bảo vệ đối với các rủi ro biến chứng trong thai kỳ hoặc khi sinh.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg p-8 border-t-8 border-rose-500 flex flex-col justify-center">
                            <div className="text-center">
                                <Clock className="w-16 h-16 text-rose-500 mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Thời Gian Chờ Áp Dụng</h2>
                                <div className="bg-rose-50 rounded-2xl p-6 mb-4">
                                    <p className="text-3xl font-black text-rose-600 mb-2">270 Ngày</p>
                                    <p className="text-slate-700 font-medium">Đối với sinh đẻ bình thường</p>
                                </div>
                                <p className="text-sm text-slate-500 italic">
                                    * Lời khuyên: Mẹ nên tham gia gói bảo hiểm trước khi có kế hoạch mang thai từ 2-3 tháng để đảm bảo quyền lợi được chi trả đầy đủ nhất.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Danh sách Bệnh viện liên kết */}
                    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Hệ Thống Bệnh Viện Bảo Lãnh Mẹ Bầu Ưa Chuộng</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            {['Vinmec', 'Hạnh Phúc', 'Pháp Việt (FV)', 'Tâm Anh', 'AIH', 'Từ Dũ (DV)', 'Hùng Vương (DV)', 'Mekong'].map((hospital, idx) => (
                                <div key={idx} className="p-4 border border-gray-100 rounded-xl bg-slate-50 font-semibold text-slate-700 hover:bg-pink-50 hover:text-pink-600 transition-colors cursor-default">
                                    {hospital}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white"
                    >
                        <MessageSquareHeart className="w-12 h-12 mx-auto mb-4 text-pink-400" />
                        <h2 className="text-3xl font-bold mb-4">Các Mẹ Cần Tư Vấn Thiết Kế Gói?</h2>
                        <p className="text-slate-300 mb-8 max-w-xl mx-auto">Để tránh những bất ngờ về quy định thời gian chờ, hãy inbox Lê Vy ngay để được hướng dẫn mua đúng thời điểm nhé!</p>
                        <Link
                            href="https://zalo.me/0909580238"
                            target="_blank"
                            className="inline-flex items-center gap-3 bg-pink-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-pink-500 transition-colors shadow-lg shadow-pink-600/30"
                        >
                            Chat Zalo Cùng Vy
                        </Link>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
