import type { Metadata } from 'next'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
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
        {/* Prevent Google Translate popups */}
        <meta name="google" content="notranslate" />

        {/* Anti-Flicker Script for Dark Mode Theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-900 text-neutral-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">
        {/* Dynamic Header Component */}
        <Header />

        {/* Main Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
