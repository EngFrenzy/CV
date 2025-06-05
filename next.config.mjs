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
  // GitHub Pages uses a repo name as a base path
  // If your repo is username.github.io, you don't need this
  // Otherwise, set it to your repo name: /your-repo-name
  basePath: '',
  // Disable server-side features
  trailingSlash: true,
}

export default nextConfig
