import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quanly.tuvanbaohiemsuckhoe.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Bắt các URL có tham số query từ WordPress admin trên bất kỳ đường dẫn nào
  async rewrites() {
    return [
      {
        // Khớp với bất kỳ path nào có ?p=ID hoặc ?preview_id=ID
        source: "/:path*",
        has: [
          { type: "query", key: "p", value: "(?<id>\\d+)" }
        ],
        destination: "/api/preview?p=:id",
      },
      {
        source: "/:path*",
        has: [
          { type: "query", key: "preview_id", value: "(?<id>\\d+)" }
        ],
        destination: "/api/preview?p=:id",
      },
    ];
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;

