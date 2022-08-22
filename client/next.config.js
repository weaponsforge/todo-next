/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    loader: 'custom'
  },
  eslint: {
    dirs: ['pages', 'styles', 'src']
  },
}

module.exports = nextConfig
