import { headers } from "next/headers"

import "./globals.css"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { NonceProvider } from "@/components/NonceProvider"

import type { Metadata } from "next"

export const dynamic = "force-dynamic"

const siteUrl = "https://www.smartconnectcrm.eu"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SmartConnect CRM UG (haftungsbeschränkt)",
    template: "%s | SmartConnect CRM UG (haftungsbeschränkt)",
  },
  description:
    "B2B IT- und Digitaldienstleistungen für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben.",
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nonce = headers().get("x-nonce") || undefined

  return (
    <html lang="de">
      <body>
        <NonceProvider nonce={nonce}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-white"
          >
            Zum Inhalt springen
          </a>

          <div className="min-h-screen flex flex-col">
            <Header />

            <main id="main-content" className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </NonceProvider>
      </body>
    </html>
  )
}
