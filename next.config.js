/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'my-portfolio';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: {
    unoptimized: true, // Required for static exports
  },
  trailingSlash: true,
  // Optional: Add this if you're using the next/image component
  // with the default loader
  experimental: {
    appDir: true,
  },
  // Ensure all routes are included in the export
  generateBuildId: async () => 'build',
};

module.exports = nextConfig;
