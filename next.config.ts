import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        turbo: {
            resolveAlias: { "@/*": "./src/*" },
        },
    },
    images: {
        remotePatterns: [
            {
                hostname: "firebasestorage.googleapis.com",
            },
        ],
    },
};

export default nextConfig;
