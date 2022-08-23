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
  }
}

module.exports = nextConfig
