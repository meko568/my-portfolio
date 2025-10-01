/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
};

module.exports = nextConfig;