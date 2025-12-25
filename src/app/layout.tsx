import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "SmartConnect CRM UG (haftungsbeschränkt)",
  description:
    "B2B IT- und Digitaldienstleistungen für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben. Strukturierte, dokumentations- und compliance-orientierte Arbeitsweise.",
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
