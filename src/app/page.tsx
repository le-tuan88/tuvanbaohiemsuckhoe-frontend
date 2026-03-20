import { Hero } from "@/components/home/Hero";
import { AboutLeVy } from "@/components/home/AboutLeVy";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Commitments } from "@/components/home/Commitments";
import { CTA } from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lê Vy Bảo Hiểm | Tư Vấn Tận Tâm - Bồi Thường Nhanh Chóng",
    description: "Lê Vy Bảo Hiểm đồng hành cùng mẹ, bảo vệ tương lai bé. Chuyên tư vấn bảo hiểm sức khỏe, bảo hiểm thai sản Dai-ichi Life.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Lê Vy Bảo Hiểm | Tư Vấn Tận Tâm - Bồi Thường Nhanh Chóng",
        description: "Lê Vy Bảo Hiểm đồng hành cùng mẹ, bảo vệ tương lai bé. Chuyên tư vấn bảo hiểm sức khỏe, bảo hiểm thai sản Dai-ichi Life.",
        url: "/",
        siteName: "Lê Vy Bảo Hiểm",
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lê Vy Bảo Hiểm | Tư Vấn Tận Tâm",
        description: "Lê Vy Bảo Hiểm đồng hành cùng mẹ, bảo vệ tương lai bé.",
    },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Lê Vy Bảo Hiểm",
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || "https://tuvanbaohiemsuckhoe.com"}/hero-image.jpg`,
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://tuvanbaohiemsuckhoe.com"}`,
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://tuvanbaohiemsuckhoe.com"}`,
    "telephone": "0909580238",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ho Chi Minh City",
      "addressCountry": "VN"
    },
    "description": "Chuyên tư vấn bảo hiểm sức khỏe, bảo hiểm thai sản Dai-ichi Life."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <AboutLeVy />
      <Process />
      <Commitments />
      <CTA />
    </>
  );
}

