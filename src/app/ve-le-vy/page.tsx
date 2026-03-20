import AboutDetailClient from "./AboutDetailClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Về Lê Vy | Chuyên gia tư vấn Bảo hiểm Dai-ichi Life",
    description: "Lê Vy Bảo Hiểm - Khởi nguồn từ tình yêu của người mẹ. Cam kết tận tâm, chuyên nghiệp, thấu hiểu trong tư vấn bảo hiểm sức khoẻ, thai sản.",
    alternates: {
        canonical: "/ve-le-vy",
    },
    openGraph: {
        title: "Về Lê Vy | Chuyên gia tư vấn Bảo hiểm Dai-ichi Life",
        description: "Lê Vy Bảo Hiểm - Khởi nguồn từ tình yêu của người mẹ. Cam kết tận tâm, chuyên nghiệp, thấu hiểu trong tư vấn bảo hiểm sức khoẻ, thai sản.",
        url: "/ve-le-vy",
        siteName: "Lê Vy Bảo Hiểm",
        locale: "vi_VN",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "Về Lê Vy | Chuyên gia tư vấn Bảo hiểm",
        description: "Cam kết tận tâm, chuyên nghiệp, thấu hiểu.",
    },
};

export default function AboutPage() {
    return <AboutDetailClient />;
}
