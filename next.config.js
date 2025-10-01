/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: isProd ? '/my-portfolio' : '',
  assetPrefix: isProd ? '/my-portfolio/' : '',
  images: {
    unoptimized: true, // required for static export
  },
  trailingSlash: true,
};

module.exports = nextConfig;
