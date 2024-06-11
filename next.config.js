const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ytublockchain.s3.amazonaws.com",
      "ytublockchain.s3.eu-central-1.amazonaws.com",
    ],
  },
};

module.exports = withNextIntl(nextConfig);
