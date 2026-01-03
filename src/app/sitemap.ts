import type { MetadataRoute } from "next"

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smartconnectcrm.eu"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/services",
    "/about",
    "/compliance",
    "/contact",
    "/imprint",
    "/privacy",
    "/terms",
  ]

  const now = new Date()

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/services" || path === "/contact"
        ? 0.8
        : 0.6,
  }))
}
