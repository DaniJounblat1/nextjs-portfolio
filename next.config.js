/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,  // This is necessary for GitHub Pages since it doesn't support Next.js image optimization
  },
}

module.exports = nextConfig
