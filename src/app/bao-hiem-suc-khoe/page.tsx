import HealthClient from "./HealthClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bảo hiểm Sức khỏe Toàn Diện - Lê Vy Bảo Hiểm",
    description: "Giải pháp bảo hiểm sức khoẻ ưu việt từ Dai-ichi Life. Qũy chăm sóc 1 tỷ đồng/bệnh, bảo lãnh viện phí mọi bệnh viện quốc tế.",
    alternates: {
        canonical: "/bao-hiem-suc-khoe",
    },
    openGraph: {
        title: "Bảo hiểm Sức khỏe Toàn Diện - Lê Vy Bảo Hiểm",
        description: "Giải pháp bảo hiểm sức khoẻ ưu việt từ Dai-ichi Life. Qũy chăm sóc 1 tỷ đồng/bệnh, bảo lãnh viện phí mọi bệnh viện quốc tế.",
        url: "/bao-hiem-suc-khoe",
        siteName: "Lê Vy Bảo Hiểm",
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Bảo hiểm Sức khỏe Toàn Diện - Lê Vy",
        description: "Giải pháp bảo hiểm sức khoẻ ưu việt từ Dai-ichi Life.",
    },
};

export default function HealthInsurancePage() {
    return <HealthClient />;
}
