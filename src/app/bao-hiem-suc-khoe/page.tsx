import HealthClient from "./HealthClient";

export const metadata = {
    title: "Bảo hiểm Sức khỏe Toàn Diện - Lê Vy Bảo Hiểm",
    description: "Giải pháp bảo hiểm sức khoẻ ưu việt từ Dai-ichi Life. Qũy chăm sóc 1 tỷ đồng/bệnh, bảo lãnh viện phí mọi bệnh viện quốc tế.",
};

export default function HealthInsurancePage() {
    return <HealthClient />;
}
