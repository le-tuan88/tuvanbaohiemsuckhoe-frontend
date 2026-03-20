import ContactClient from "./ContactClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Liên hệ tư vấn - Lê Vy Bảo Hiểm",
    description: "Liên hệ Lê Vy để được tư vấn các gói bảo hiểm sức khoẻ, thai sản Dai-ichi Life 24/7. Hotline/Zalo: 0909 580 238",
    alternates: {
        canonical: "/lien-he",
    },
    openGraph: {
        title: "Liên hệ tư vấn - Lê Vy Bảo Hiểm",
        description: "Liên hệ Lê Vy để được tư vấn các gói bảo hiểm sức khoẻ, thai sản Dai-ichi Life 24/7. Hotline/Zalo: 0909 580 238",
        url: "/lien-he",
        siteName: "Lê Vy Bảo Hiểm",
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Liên hệ tư vấn - Lê Vy Bảo Hiểm",
        description: "Hotline/Zalo hỗ trợ tư vấn 24/7: 0909 580 238",
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
