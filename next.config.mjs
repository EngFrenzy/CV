/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Set the base path to match your repository name
  basePath: '/CV',
  assetPrefix: '/CV/',
  trailingSlash: true,
}

export default nextConfig
