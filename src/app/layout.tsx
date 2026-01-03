import "./globals.css"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { NonceProvider } from "@/components/NonceProvider"

import type { Metadata } from "next"
import { headers } from "next/headers"

export const dynamic = "force-dynamic"

const siteUrl = "https://www.smartconnectcrm.eu"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SmartConnect CRM UG (haftungsbeschränkt)",
    template: "%s | SmartConnect CRM UG (haftungsbeschränkt)",
  },
  description:
    "B2B IT- und Digitaldienstleistungen für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben. Strukturierte, dokumentations- und compliance-orientierte Arbeitsweise.",
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SmartConnect CRM UG (haftungsbeschränkt)",
    title: "SmartConnect CRM UG (haftungsbeschränkt)",
    description:
      "B2B IT- und Digitaldienstleistungen für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben.",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartConnect CRM UG (haftungsbeschränkt)",
    description:
      "B2B IT- und Digitaldienstleistungen für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = headers().get("x-nonce") || undefined

  return (
    <html lang="de">
      <body>
        <NonceProvider nonce={nonce}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            Zum Inhalt springen
          </a>

          <div className="min-h-screen flex flex-col">
            <header>
              <Header />
            </header>

            <main id="main-content" role="main" tabIndex={-1} className="flex-1">
              <div className="container-fixed py-8">{children}</div>
            </main>

            <footer>
              <Footer />
            </footer>
          </div>
        </NonceProvider>
      </body>
    </html>
  )
}
