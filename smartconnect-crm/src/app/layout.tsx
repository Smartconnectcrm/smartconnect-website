// src/app/layout.tsx
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'SmartConnect CRM | Enterprise & Public Sector IT Services',
  description:
    'B2B IT & Digital Solutions für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben.',
  other: {
    google: 'notranslate',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="notranslate" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        {/* Favicon pointing to your actual homepage logo asset */}
        <link rel="icon" type="image/png" href="/media/logo_white.png" />
        <link rel="shortcut icon" type="image/png" href="/media/logo_white.png" />
        <link rel="apple-touch-icon" href="/media/logo_white.png" />
      </head>
      <body className="min-h-screen antialiased notranslate">{children}</body>
    </html>
  )
}
