import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      // keep any other hostnames you already have here
    ],
  },
  /* config options here */
};

export default nextConfig;
