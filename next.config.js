/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};


// eslint-disable-next-line no-undef
module.exports = nextConfig;

// eslint-disable-next-line no-undef
module.exports = {
  images: {
    domains: ['courses-top.ru'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};