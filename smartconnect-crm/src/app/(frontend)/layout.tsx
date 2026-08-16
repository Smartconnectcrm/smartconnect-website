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
      <div className="flex flex-col min-h-screen bg-[var(--bg-page,#ffffff)] text-[var(--text-primary,#0f172a)] transition-colors duration-250">
        {/* Navigation Header with Theme Toggle & Language Selector */}
        <Header />

        {/* Public Content Area Wrapper */}
        <div className="flex-1 w-full">{children}</div>

        {/* Global Footer */}
        <Footer />
      </div>
    </CustomThemeProvider>
  )
}
