import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Note: i18n routing is disabled for static export
  // We'll handle i18n manually using next-i18next
};

export default nextConfig;
