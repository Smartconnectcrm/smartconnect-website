import { withPayload } from '@payloadcms/next/withPayload'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/admin/login',
        destination: '/login',
      },
      {
        source: '/admin/dashboard',
        destination: '/dashboard',
      },
    ]
  },
  webpack: (config) => {
    config.resolve.alias['@payload-config'] = path.resolve(__dirname, 'src/payload.config.ts')
    return config
  },
}

export default withPayload(nextConfig)