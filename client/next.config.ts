// client/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // If you have many images
  },
  experimental: {
    serverComponentsExternalPackages: ['@apollo/server', 'graphql'],
  },
}

module.exports = nextConfig