import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '2px solid #000000',
        backgroundColor: '#ffffff',
        padding: '48px 24px 24px 24px',
        marginTop: '64px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px',
          paddingBottom: '32px',
          borderBottom: '1px solid #e5e5e5',
        }}
      >
        {/* Brand Column */}
        <div>
          <div
            style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}
          >
            SmartConnect <span style={{ color: '#2563eb' }}>CRM</span>
          </div>
          <p style={{ fontSize: '13px', color: '#555555', lineHeight: '1.5', margin: 0 }}>
            Strukturierte IT-Leistungsbausteine, dokumentierte Übergaben und konforme Umsetzung für
            Enterprise und den öffentlichen Sektor.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: '800',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Navigation
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '13px',
            }}
          >
            <li>
              <Link
                href="/"
                style={{ color: '#000000', textDecoration: 'none', fontWeight: '600' }}
              >
                Leistungskatalog
              </Link>
            </li>
            <li>
              <Link
                href="/procurement"
                style={{ color: '#000000', textDecoration: 'none', fontWeight: '600' }}
              >
                Procurement-Profil
              </Link>
            </li>
            <li>
              <Link
                href="/admin"
                style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}
              >
                CMS Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Compliance Column */}
        <div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: '800',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Compliance & Standards
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontSize: '13px',
              color: '#444444',
            }}
          >
            <li>✓ ISO 27001 Ready</li>
            <li>✓ DSGVO / GDPR Konform</li>
            <li>✓ EVB-IT Standard</li>
          </ul>
        </div>

        {/* Rechtliches Column */}
        <div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: '800',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Rechtliches
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '13px',
            }}
          >
            <li>
              <Link
                href="/impressum"
                style={{ color: '#000000', textDecoration: 'none', fontWeight: '600' }}
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                style={{ color: '#000000', textDecoration: 'none', fontWeight: '600' }}
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12px',
          color: '#666666',
        }}
      >
        <div>© 2026 SmartConnect CRM. All rights reserved.</div>
        <div style={{ fontWeight: '700', color: '#1e3a8a' }}>
          EU Tender & Public Procurement Ready
        </div>
      </div>
    </footer>
  )
}
