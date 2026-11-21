import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: false,
  partialPrefetching: false,
  reactCompiler: true,
  images: {
    // Hosts that serve the destination images from the backend.
    // Omitting pathname/search allows every path and query string
    // (e.g. "?auto=compress%2Cformat") on these hosts.
    remotePatterns: [
      { protocol: "https", hostname: "mtsobek.imgix.net" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "hblimg.mmtcdn.com" },
      {
        protocol: "https",
        hostname: "pub-5e439b5f38ca499ea1969bcc1d71b180.r2.dev",
      },
      { protocol: "https", hostname: "storage.karmagroup.com" },
      { protocol: "https", hostname: "www.sundarbantigerroarresort.com" },
    ],
  },
  experimental: {
    agentUpgrade: "security",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;