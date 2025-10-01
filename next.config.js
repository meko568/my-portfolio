/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/my-portfolio' : '',
  assetPrefix: isProd ? 'https://meko568.github.io/my-portfolio/' : '',
  images: {
    unoptimized: true,
  },
  // Ensure links work with GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;
