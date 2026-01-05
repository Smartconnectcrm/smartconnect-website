/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Performance
  compress: true,
  poweredByHeader: false,

  // Image optimization (Lighthouse + LCP)
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  /**
   * Headers
   * - NO CSP here (CSP is handled in middleware with nonce)
   * - NO aggressive caching in development
   * - Aggressive caching ONLY in production
   */
  async headers() {
    const isProd = process.env.NODE_ENV === "production"

    return [
      // Base security headers (safe for dev + prod)
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
        ],
      },

      // Aggressive caching ONLY in production
      ...(isProd
        ? [
            {
              source: "/_next/static/(.*)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
            {
              source: "/(.*)\\.(png|jpg|jpeg|webp|avif|svg|ico)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=604800, immutable",
                },
              ],
            },
          ]
        : []),
    ]
  },
}

export default nextConfig
