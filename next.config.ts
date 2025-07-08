import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/my-resume',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
