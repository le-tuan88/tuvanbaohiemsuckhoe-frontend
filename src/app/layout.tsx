import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import "../styles/wordpress.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "Lê Vy Bảo Hiểm | Tư Vấn Tận Tâm - Bồi Thường Nhanh Chóng",
  description: "Lê Vy Bảo Hiểm đồng hành cùng mẹ, bảo vệ tương lai bé. Chuyên tư vấn bảo hiểm sức khỏe, bảo hiểm thai sản Dai-ichi Life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${beVietnamPro.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
