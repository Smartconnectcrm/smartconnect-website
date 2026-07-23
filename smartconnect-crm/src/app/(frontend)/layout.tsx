import type { Metadata } from 'next'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer' // Adjust path if Footer is elsewhere
import './styles.css'

export const metadata: Metadata = {
  title: 'SmartConnect CRM | Enterprise & Public Sector IT Services',
  description:
    'B2B IT & Digital Solutions für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-white text-neutral-900 antialiased min-h-screen flex flex-col">
        {/* Render the dynamic Header component */}
        <Header />

        {/* Main Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer (optional) */}
        <Footer />
      </body>
    </html>
  )
}
