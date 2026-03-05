import Link from "next/link";
import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#7a1236] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Col */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight">LÊ VY BẢO HIỂM</h3>
                        <p className="text-rose-100/80 leading-relaxed text-sm">
                            Đồng hành cùng mẹ, bảo vệ tương lai bé. Tư vấn tận tâm, hỗ trợ bồi thường nhanh chóng, chuyên nghiệp.
                        </p>
                    </div>

                    {/* Links Col 1 */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-rose-50">Dịch Vụ</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/bao-hiem-suc-khoe" className="text-rose-100/80 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    Bảo hiểm Sức khỏe
                                </Link>
                            </li>
                            <li>
                                <Link href="/bao-hiem-thai-san" className="text-rose-100/80 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    Bảo hiểm Thai sản
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-rose-50">Về Chúng Tôi</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/ve-le-vy" className="text-rose-100/80 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    Về Lê Vy
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-rose-100/80 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    Tuyển tập mẹo hay (Blog)
                                </Link>
                            </li>
                            <li>
                                <Link href="/lien-he" className="text-rose-100/80 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-rose-50">Thông tin liên hệ</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-rose-100/80 text-sm">
                                <MapPin className="w-5 h-5 shrink-0 text-rose-300" />
                                <span><strong className="text-white block font-medium mb-1">Địa chỉ:</strong> TP. Hồ Chí Minh & Phục vụ Toàn quốc</span>
                            </li>
                            <li className="flex items-start gap-3 text-rose-100/80 text-sm">
                                <Phone className="w-5 h-5 shrink-0 text-rose-300" />
                                <span><strong className="text-white block font-medium mb-1">Zalo/Hotline:</strong> 0909 580 238</span>
                            </li>
                            <li className="flex items-start gap-3 text-rose-100/80 text-sm">
                                <Mail className="w-5 h-5 shrink-0 text-rose-300" />
                                <span><strong className="text-white block font-medium mb-1">Email:</strong> tuvan@tuvanbaohiemsuckhoe.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-rose-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-rose-100/60 text-sm">
                        &copy; {new Date().getFullYear()} Lê Vy Bảo Hiểm. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="text-rose-100/60 hover:text-white transition-colors text-sm">Chính sách bảo mật</Link>
                        <Link href="#" className="text-rose-100/60 hover:text-white transition-colors text-sm">Điều khoản sử dụng</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
