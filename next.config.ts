import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  //basePath: '/Anatoly-s-resume',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
