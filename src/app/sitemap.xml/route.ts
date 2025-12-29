import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://www.smartconnectcrm.eu"

  const pages = [
    "",
    "/services",
    "/about",
    "/compliance",
    "/contact",
    "/privacy",
    "/imprint",
    "/terms",
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === "" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("")}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
