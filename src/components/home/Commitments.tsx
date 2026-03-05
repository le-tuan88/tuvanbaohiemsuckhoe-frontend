"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const commitments = [
    "Hỗ trợ claim bồi thường 24/7, luôn túc trực mỗi khi quý khách cần.",
    "Tư vấn minh bạch từng điều khoản, loại trừ.",
    "Tuyệt đối không chèo kéo, ép buộc mua gói sai nhu cầu.",
    "Đồng hành chăm sóc suốt đời hợp đồng, nhắc lịch đóng phí định kỳ.",
    "Bảo mật tuyệt đối thông tin cá nhân và bệnh lý của khách hàng.",
    "Hỗ trợ thủ tục giải quyết bồi thường tại các bệnh viện trái tuyến."
];

export function Commitments() {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Lý do bạn nên <br />
                            <span className="text-rose-400">Chọn Lê Vy</span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-lg">
                            Giữa hàng ngàn tư vấn viên, Lê Vy tự hào vì phong cách làm việc chân thành, tử tế và đặt lợi ích sức khỏe của gia đình bạn lên tối thượng.
                        </p>
                        <div className="inline-flex items-center gap-4 bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-sm border border-white/10">
                            <div className="text-3xl font-extrabold text-white">500+</div>
                            <div className="text-sm text-slate-300">Khách hàng <br />được bồi thường</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {commitments.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-rose-400 shrink-0" />
                                    <p className="text-sm text-slate-200 leading-relaxed font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
