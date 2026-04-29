import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.thum.io" },
      { protocol: "https", hostname: "latussky.com" },
    ],
  },
};

export default nextConfig;
