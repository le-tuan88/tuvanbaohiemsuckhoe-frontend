"use client";

import { MessageSquare, FileLineChart, PenTool, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        icon: MessageSquare,
        title: "Lắng nghe nhu cầu",
        desc: "Tiếp nhận thông tin, tình trạng sức khoẻ và mong muốn của khách hàng.",
    },
    {
        icon: FileLineChart,
        title: "Thiết kế giải pháp",
        desc: "Đo ni đóng giày gói bảo hiểm phù hợp nhất với tầm tài chính gia đình.",
    },
    {
        icon: PenTool,
        title: "Ký kết hợp đồng",
        desc: "Hoàn thiện hồ sơ minh bạch, giải thích cặn kẽ từng điều khoản.",
    },
    {
        icon: ShieldCheck,
        title: "Đồng hành bồi thường",
        desc: "Hỗ trợ làm thủ tục claim claim nhanh chóng trọn đời hợp đồng.",
    },
];

export function Process() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Quy Trình <span className="text-rose-600">Chuẩn Hóa</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Khách hàng hoàn toàn yên tâm với 4 bước tư vấn chuyên nghiệp, rõ ràng.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-rose-100 -z-10"></div>

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative text-center"
                            >
                                <div className="w-24 h-24 mx-auto bg-white border-4 border-rose-50 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-rose-100/50">
                                    <div className="w-16 h-16 rounded-full bg-rose-600 flex items-center justify-center text-white relative">
                                        <Icon className="w-8 h-8" />
                                        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-xs font-bold shadow-sm">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm px-4">{step.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
