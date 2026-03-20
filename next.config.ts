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
  // Bắt các URL dạng /?p=123 hoặc /?preview=true&p=123 từ WordPress admin
  async rewrites() {
    return [
      {
        // Khi WordPress admin click "Xem bài viết": /?p=ID
        source: "/",
        has: [{ type: "query", key: "p", value: "(?<id>\\d+)" }],
        destination: "/api/preview?p=:id",
      },
    ];
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;

