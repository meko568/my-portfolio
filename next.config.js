/** @type {import('next').NextConfig} */
// basePath/assetPrefix only needed if you deploy to GitHub Pages under
// https://<user>.github.io/my-portfolio/. Leave GH_PAGES unset for Vercel
// or a custom domain at the root - otherwise CSS/JS 404 and the page
// renders unstyled (this was the "sidebar always visible" bug).
const forGithubPages = process.env.GH_PAGES === 'true';
const repo = 'my-portfolio';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: forGithubPages ? `/${repo}` : '',
  assetPrefix: forGithubPages ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
