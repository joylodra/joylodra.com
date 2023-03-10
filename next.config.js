const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["github.com"],
  },
};

module.exports = withContentlayer(nextConfig);
