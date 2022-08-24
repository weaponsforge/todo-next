/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    loader: 'custom'
  },
  eslint: {
    dirs: ['components', 'pages', 'src', 'store', 'styles']
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH
  }
}

module.exports = nextConfig
