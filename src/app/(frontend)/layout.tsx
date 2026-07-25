import type { Metadata } from 'next'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { CustomThemeProvider } from '../../context/ThemeContext'
import './styles.css'

export const metadata: Metadata = {
  title: 'SmartConnect CRM',
  description: 'Enterprise & Public Sector IT Services',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <CustomThemeProvider>
        <body
          className="min-h-screen flex flex-col antialiased"
          style={{
            backgroundColor: 'var(--bg-page, #ffffff)',
            color: 'var(--text-primary, #0f172a)',
            transition: 'background-color 0.25s ease, color 0.25s ease',
          }}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </CustomThemeProvider>
    </html>
  )
}
