import type { Metadata } from 'next'
import React from 'react'
import Script from 'next/script'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles.css'

export const metadata: Metadata = {
  title: 'SmartConnect CRM | Enterprise & Public Sector IT Services',
  description:
    'B2B IT & Digital Solutions für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* Hide Google Translate top toolbar frame and banner */}
        <style>{`
          .goog-te-banner-frame { display: none !important; }
          body { top: 0px !important; }
          .skiptranslate { display: none !important; }
          #google_translate_element { display: none !important; }
        `}</style>
      </head>
      <body className="bg-white text-neutral-900 antialiased min-h-screen flex flex-col">
        {/* Dynamic Header Component */}
        <Header />

        {/* Main Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Silent Google Translate Engine Initialization */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'de',
                includedLanguages: 'de,en,hu,fr,es,it,nl,pl',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
