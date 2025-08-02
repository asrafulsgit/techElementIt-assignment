import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   
  images: {
    domains: ['images.unsplash.com','fakestoreapi.com'],  
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
