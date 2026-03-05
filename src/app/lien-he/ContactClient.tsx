"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactClient() {
    const [formData, setFormData] = useState({ name: '', phone: '', note: '' });
    const [isSubmit, setIsSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');

        try {
            const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL
                ? process.env.NEXT_PUBLIC_WORDPRESS_API_URL.replace('/graphql', '/wp-json/levy/v1/contact')
                : 'https://quanly.tuvanbaohiemsuckhoe.com/wp-json/levy/v1/contact';

            const res = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    message: formData.note
                })
            });

            if (!res.ok) {
                throw new Error('Gửi thất bại');
            }

            setIsSubmit(true);
            setFormData({ name: '', phone: '', note: '' });
        } catch (error) {
            console.error("Lỗi gửi liên hệ:", error);
            setErrorMsg('Đã có lỗi xảy ra. Vui lòng thử lại hoặc gọi trực tiếp Hotline.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">Liên Hệ Để Được Tư Vấn</h1>
                        <p className="text-slate-600 text-lg">Vy luôn sẵn sàng lắng nghe mọi băn khoăn của bạn 24/7</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">

                        {/* Info Panel */}
                        <div className="lg:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-8 text-rose-400">Thông tin liên hệ</h3>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-full shrink-0">
                                            <Phone className="w-6 h-6 text-rose-300" />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-sm mb-1">Điện thoại / Zalo</p>
                                            <p className="font-medium text-lg">0909 580 238</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-full shrink-0">
                                            <Mail className="w-6 h-6 text-rose-300" />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-sm mb-1">Email (Phản hồi trong 24h)</p>
                                            <p className="font-medium">tuvan@tuvanbaohiemsuckhoe.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-full shrink-0">
                                            <MapPin className="w-6 h-6 text-rose-300" />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-sm mb-1">Văn phòng làm việc</p>
                                            <p className="font-medium leading-relaxed">TP. Hồ Chí Minh <br /><span className="text-slate-400 font-normal text-sm">(Nhận tư vấn online Toàn Quốc)</span></p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-full shrink-0">
                                            <Clock className="w-6 h-6 text-rose-300" />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-sm mb-1">Giờ làm việc</p>
                                            <p className="font-medium">8:00 - 22:00 <br /><span className="text-slate-400 font-normal text-sm">Cả thứ 7 & Chủ Nhật</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Form Panel */}
                        <div className="lg:col-span-3 p-10">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Để lại lời nhắn</h3>
                            <p className="text-slate-500 mb-8">Xin nhập thông tin, Vy sẽ gọi lại ngay khi nhận được.</p>

                            {isSubmit ? (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-emerald-50 text-emerald-700 p-6 rounded-2xl flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                        <Send className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <h4 className="font-bold text-xl mb-2">Đã Gửi Thành Công!</h4>
                                    <p>Cảm ơn bạn đã quan tâm. Vy sẽ chủ động liên hệ lại cho bạn trong thời gian sớm nhất nhé.</p>
                                    <button onClick={() => setIsSubmit(false)} className="mt-6 text-emerald-600 font-semibold hover:underline">Gửi tin nhắn khác</button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {errorMsg && (
                                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-200">
                                            {errorMsg}
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Họ Tên Của Bạn *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                                            placeholder="VD: Nguyễn Văn A"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Số Điện Thoại / Zalo *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                                            placeholder="09xx xxx xxx"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Nhu Cầu Cần Tư Vấn</label>
                                        <textarea
                                            rows={4}
                                            value={formData.note}
                                            onChange={e => setFormData({ ...formData, note: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                                            placeholder="Ghi chú thêm về nhu cầu (bảo hiểm sức khoẻ, thai sản, số người tham gia...)"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-rose-600 text-white font-bold py-4 rounded-xl hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <>Đang gửi yêu cầu...</>
                                        ) : (
                                            <><Send className="w-5 h-5" /> Gửi Yêu Cầu Tư Vấn</>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
