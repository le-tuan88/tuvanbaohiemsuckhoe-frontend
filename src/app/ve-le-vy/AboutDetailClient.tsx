"use client";

import Image from "next/image";
import { Heart, Target, Gem, CheckCircle, ShieldUser, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutDetailClient() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Header */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-900/40 to-slate-900 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Tư Vấn Từ Trái Tim <span className="text-rose-400">Người Mẹ</span></h1>
                        <p className="text-lg md:text-xl text-slate-300">
                            Với Lê Vy, bảo hiểm không chỉ là một tài liệu pháp lý, mà là lời hứa bình an, là tình yêu thương vô bờ bến dành cho gia đình.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Câu chuyện Lê Vy */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full md:w-5/12 relative"
                        >
                            <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl">
                                {/* Giả lập ảnh Lê Vy bằng khối màu gradient và icon */}
                                <div className="absolute inset-0 bg-gradient-to-b from-rose-100 to-rose-300 flex items-center justify-center">
                                    <ShieldUser className="w-32 h-32 text-rose-500/50" />
                                </div>
                                {/* 
                <Image src="/images/avatar-levy-full.jpg" alt="Chân dung Lê Vy" fill className="object-cover" /> 
                */}
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                                <p className="text-slate-900 font-bold mb-1">Lê Vy</p>
                                <p className="text-slate-500 text-sm">Chuyên gia tư vấn Dai-ichi Life</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full md:w-7/12 space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-slate-900">Câu chuyện của Vy</h2>
                            <div className="w-16 h-1 bg-rose-600 rounded"></div>
                            <div className="text-slate-600 space-y-4 text-lg leading-relaxed">
                                <p>
                                    Bước chân vào ngành bảo hiểm xuất phát từ chính nhu cầu tìm kiếm một giải pháp bảo vệ toàn diện cho con yêu của mình, Vy nhận ra rằng có quá nhiều gia đình ngoài kia cũng đang mang chung nỗi lo âu như mình.
                                </p>
                                <p>
                                    Là một người phụ nữ đã làm mẹ, Vy hiểu rằng sinh nở một đứa trẻ trọn vẹn sức khoẻ tốn kém biết bao. Vy hiểu những đêm thức trắng khi con ốm đau đi viện, những hoá đơn viện phí có thể đánh gục tài chính của một gia đình nhỏ bất cứ lúc nào.
                                </p>
                                <p>
                                    Đó là lý do Lê Vy Bảo Hiểm ra đời. Vy không bán một gói bảo hiểm gượng ép. Vy chia sẻ giải pháp bảo vệ tương lai, thiết kế tỉ mỉ từng quyền lợi phù hợp nhất cho mỗi nhà, với sự thấu hiểu chân thành nhất từ tận đáy lòng.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tầm nhìn, Sứ mệnh, Giá trị cốt lõi */}
            <section className="py-20 bg-rose-50/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Tầm Nhìn</h3>
                            <p className="text-slate-600">Trở thành người bạn đồng hành tài chính đáng tin cậy nhất của hàng ngàn gia đình Việt Nam trên chặng đường nuôi dưỡng và bảo vệ tương lai con trẻ.</p>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sứ Mệnh</h3>
                            <p className="text-slate-600">Lan Toả giá trị nhân văn của bảo hiểm nhân thọ. Đem đến sự an toàn tài chính, dịch vụ chăm sóc sức khoẻ chất lượng cao với chi phí tối ưu nhất.</p>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Gem className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Giá Trị Cốt Lõi</h3>
                            <p className="text-slate-600">Tận tâm phục vụ. Chuyên nghiệp trong chuyên môn. Trung thực và Minh bạch mọi quyền lợi. Luôn đặt quyền lợi khách hàng lên số 1.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center px-4">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Hãy để Vy lắng nghe bạn</h2>
                <Link
                    href="https://zalo.me/0909580238"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-rose-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-rose-700 transition-colors shadow-lg"
                >
                    <Phone className="w-5 h-5" />
                    Trực tiếp Tâm Sự cùng Vy
                </Link>
            </section>
        </div>
    );
}
