/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Website', // ganti dengan nama repository GitHub Anda
  assetPrefix: '/Website/', // ganti dengan nama repository GitHub Anda
}

module.exports = nextConfig