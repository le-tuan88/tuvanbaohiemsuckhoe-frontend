"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Bảo hiểm Sức khỏe", href: "/bao-hiem-suc-khoe" },
    { name: "Bảo hiểm Thai sản", href: "/bao-hiem-thai-san" },
    { name: "Về Lê Vy", href: "/ve-le-vy" },
    { name: "Blog", href: "/blog" },
    { name: "Liên hệ", href: "/lien-he" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-3"
                    : "bg-white py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white font-bold text-xl group-hover:bg-rose-700 transition-colors">
                            LV
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-rose-600 transition-colors">
                            Lê Vy Bảo Hiểm
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-medium transition-all relative",
                                        isActive
                                            ? "text-rose-600"
                                            : "text-slate-600 hover:text-rose-600 hover:bg-rose-50"
                                    )}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-rose-50 rounded-full -z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA Button Desktop */}
                    <div className="hidden lg:block">
                        <Link
                            href="https://zalo.me/0909580238"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-rose-600 text-white shadow hover:bg-rose-700 h-10 px-6 py-2"
                        >
                            <Phone className="w-4 h-4 animate-pulse" />
                            Nhận Tư Vấn Ngay
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-slate-600 hover:text-rose-600 transition-colors focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                                            isActive
                                                ? "bg-rose-50 text-rose-600"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-rose-600"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 pb-2 px-4">
                                <Link
                                    href="https://zalo.me/0909580238"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-rose-600 text-white shadow-md hover:bg-rose-700 h-12 px-6 font-medium transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    Nhận Tư Vấn Ngay
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
