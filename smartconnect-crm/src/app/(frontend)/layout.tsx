import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import './styles.css'

export const metadata: Metadata = {
  title: 'SmartConnect CRM | Enterprise & Public Sector IT Services',
  description:
    'B2B IT & Digital Solutions für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {/* Navigation Bar */}
        <nav
          style={{
            borderBottom: '2px solid black',
            padding: '16px 24px',
            backgroundColor: '#ffffff',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <Link
                href="/"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: '900',
                  fontSize: '20px',
                }}
              >
                SmartConnect CRM
              </Link>
              <div style={{ fontSize: '12px', color: '#0066cc', fontWeight: 'bold' }}>
                Enterprise & Public Sector
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Link
                href="/"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                Leistungskatalog
              </Link>
              <Link
                href="/procurement"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                Procurement-Profil
              </Link>
              <a
                href="mailto:admin@smartclientcrm.com"
                style={{
                  backgroundColor: '#d9b327',
                  color: 'black',
                  padding: '8px 16px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  border: '1px solid black',
                }}
              >
                Kontakt
              </a>
            </div>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  )
}
