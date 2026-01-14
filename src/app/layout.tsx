import { Sora, Inter, Space_Mono } from "next/font/google"
import { headers } from "next/headers"

import "./globals.css"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { NonceProvider } from "@/components/NonceProvider"

import Insights from "./insights"

import type { Metadata } from "next"
import type { ReactNode } from "react"

// Typography: Concept B - Modern Institutional
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
})

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

export default function RootLayout({ children }: { children: ReactNode }) {
  // ✅ headers() is synchronous in Next 14/15 App Router
  const nonce = headers().get("x-nonce") || undefined

  return (
    <html lang="de" className={`${sora.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body className="font-body">
        <NonceProvider nonce={nonce}>
          {/* Accessibility: Skip link (visible on keyboard focus) */}
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
              {children}
            </main>

            <footer>
              <Footer />
            </footer>
          </div>

          {/* Vercel Speed Insights */}
          <Insights />
        </NonceProvider>
      </body>
    </html>
  )
}
