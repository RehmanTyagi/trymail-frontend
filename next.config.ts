import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web.archive.org",
        port: "",
        pathname: "/web/20230703075203im_/https://short.io/static/**",
      },
    ],
  },
};

export default nextConfig;
