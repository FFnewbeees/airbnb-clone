/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  // faster build speed 
  typescript:{
    ignoreBuildErrors: true
  },

  eslint:{
    ignoreDuringBuilds: true
  },
  swcMinify: true
}

module.exports = nextConfig
