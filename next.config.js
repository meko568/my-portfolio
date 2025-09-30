/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Optional: Add basePath if your site is served from a subdirectory
  // basePath: '/portfolio',
  // Optional: Add assetPrefix for static exports
  // assetPrefix: './',
}

module.exports = nextConfig
