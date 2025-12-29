import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const siteUrl = "https://www.smartconnectcrm.eu"

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SmartConnect CRM UG (haftungsbeschränkt)",
    template: "%s | SmartConnect CRM UG (haftungsbeschränkt)",
  },
  description:
    "B2B IT- und Digitaldienstleistungen für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben. Strukturierte, dokumentations- und compliance-orientierte Arbeitsweise.",
  alternates: {
    canonical: siteUrl,
  },
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
  return (
    <html lang="de">
      <body>
        {/* Accessibility: Skip link (invisible unless focused) */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:underline">
          Zum Inhalt springen
        </a>

        <div className="min-h-screen flex flex-col">
          <header>
            <Header />
          </header>

          <main id="main-content" role="main" className="flex-1">
            <div className="container-fixed py-8">{children}</div>
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  )
}
