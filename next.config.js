/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['thumbsnap.com', 'www.softlanding.ca'],
  },
}

module.exports = nextConfig
