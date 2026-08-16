// src/app/(frontend)/layout.tsx
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
  other: {
    google: 'notranslate',
  },
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <CustomThemeProvider>
      <div className="flex flex-col min-h-screen">
        {/* Header containing theme toggle & translation widget */}
        <Header />

        {/* Main Public Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </CustomThemeProvider>
  )
}
