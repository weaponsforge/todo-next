/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    loader: 'custom'
  },
  eslint: {
    dirs: ['components', 'pages', 'src', 'store', 'styles']
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL
  }
}

module.exports = nextConfig
