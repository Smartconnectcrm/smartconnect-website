import type { Metadata } from 'next'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { CustomThemeProvider } from '../../context/ThemeContext'
import './styles.css'

export const metadata: Metadata = {
  title: 'SmartConnect CRM | Enterprise & Public Sector IT Services',
  description:
    'B2B IT & Digital Solutions für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  other: {
    google: 'notranslate',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="notranslate" suppressHydrationWarning>
      <body
        className="min-h-screen flex flex-col antialiased notranslate"
        style={{
          backgroundColor: 'var(--bg-page, #ffffff)',
          color: 'var(--text-primary, #0f172a)',
          transition: 'background-color 0.25s ease, color 0.25s ease',
        }}
      >
        <CustomThemeProvider>
          {/* Dynamic Header Component */}
          <Header />

          {/* Main Page Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <Footer />
        </CustomThemeProvider>
      </body>
    </html>
  )
}
