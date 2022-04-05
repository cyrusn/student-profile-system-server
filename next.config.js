/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/react-game-of-15/" : "",
};

module.exports = nextConfig;
