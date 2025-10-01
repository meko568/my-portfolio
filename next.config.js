const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubActions ? '/my-portfolio' : '', // Replace 'my-portfolio' with your repository name
  assetPrefix: isGithubActions ? 'https://meko568.github.io/my-portfolio/' : '', // Replace with your GitHub username and repo name
  images: {
    unoptimized: true,
  },
  // Optional: Add trailingSlash if you want to ensure links work with GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;