import type { Metadata } from 'next'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from '../../components/ThemeProvider'
import './styles.css'

export const metadata: Metadata = {
  title: 'SmartConnect CRM | Enterprise & Public Sector IT Services',
  description:
    'B2B IT & Digital Solutions für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben.',
}

type Props = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="de" translate="no" className="notranslate" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
      </head>
      {/* Clean body without hardcoded Tailwind bg-white */}
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
