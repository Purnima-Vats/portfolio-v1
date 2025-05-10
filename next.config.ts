import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/devicon/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/devicons/devicon/master/icons/**",
      },
      {
        protocol: "https",
        hostname: "www.vectorlogo.zone",
        pathname: "/logos/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/commons/**",
      },
      {
        protocol: "https",
        hostname: "imgix.cosmicjs.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pagepro.co",
        pathname: "/blog/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "repository-images.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
        pathname: "/show/**",
      },
    ],
  },
};

export default nextConfig;

