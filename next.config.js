/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'my-portfolio'; // your repo name

const nextConfig = {
  output: 'export',        // enable static export
  distDir: 'out',          // export folder
  basePath: isProd ? `/${repo}` : '',    // required for GitHub Pages
  assetPrefix: isProd ? `/${repo}/` : '',// required for assets (CSS/JS)
  images: {
    unoptimized: true, // GitHub Pages doesn’t support next/image optimization
  },
  trailingSlash: true, // helps prevent broken routes
};

module.exports = nextConfig;
