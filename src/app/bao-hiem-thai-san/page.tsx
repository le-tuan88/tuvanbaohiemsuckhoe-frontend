import MaternityClient from "./MaternityClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bảo hiểm Thai Sản - Lê Vy Bảo Hiểm",
    description: "Bảo hiểm thai sản Dai-ichi Life 100% bồi thường sinh mổ, sinh thường tại Vinmec, Hạnh Phúc, Từ Dũ... Tham gia trước thai kỳ.",
    alternates: {
        canonical: "/bao-hiem-thai-san",
    },
    openGraph: {
        title: "Bảo hiểm Thai Sản - Lê Vy Bảo Hiểm",
        description: "Bảo hiểm thai sản Dai-ichi Life 100% bồi thường sinh mổ, sinh thường tại Vinmec, Hạnh Phúc, Từ Dũ... Tham gia trước thai kỳ.",
        url: "/bao-hiem-thai-san",
        siteName: "Lê Vy Bảo Hiểm",
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Bảo hiểm Thai Sản - Lê Vy",
        description: "Bảo hiểm thai sản Dai-ichi Life 100% bồi thường sinh mổ, sinh thường.",
    },
};

export default function MaternityInsurancePage() {
    return <MaternityClient />;
}
