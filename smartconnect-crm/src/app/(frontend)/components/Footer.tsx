'use client'

import React from 'react'
import Link from 'next/link'
import { BrandLogo } from './BrandLogo'
import { useTheme } from '../../../context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-page, #ffffff)',
        color: 'var(--text-primary, #0f172a)',
        borderTop: '2px solid var(--border-color, #e2e8f0)',
        padding: '40px 20px',
        transition: 'background-color 0.25s ease, color 0.25s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px',
        }}
      >
        {/* Brand Column */}
        <div>
          <div
            className="notranslate"
            style={{
              filter: theme === 'light' ? 'none' : 'brightness(0) invert(1)',
              marginBottom: '12px',
            }}
          >
            <BrandLogo variant="light" />
          </div>
          <p
            style={{
              fontSize: '12px',
              color: 'var(--text-secondary, #64748b)',
              lineHeight: '1.6',
            }}
          >
            Strukturierte IT-Leistungsbausteine, dokumentierte Übergaben und konforme Umsetzung für
            Enterprise und den öffentlichen Sektor.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4
            style={{
              fontSize: '11px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px',
              color: 'var(--text-primary)',
            }}
          >
            Navigation
          </h4>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '13px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <li>
              <Link href="/" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>
                Leistungskatalog
              </Link>
            </li>
            <li>
              <Link
                href="/procurement"
                style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}
              >
                Procurement-Profil
              </Link>
            </li>
            <li>
              <Link
                href="/admin"
                style={{ textDecoration: 'none', color: 'var(--accent)', fontWeight: 'bold' }}
              >
                🔒 CMS Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Compliance */}
        <div>
          <h4
            style={{
              fontSize: '11px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px',
              color: 'var(--text-primary)',
            }}
          >
            Compliance & Standards
          </h4>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              color: 'var(--text-secondary)',
            }}
          >
            <li>✓ ISO 27001 Ready</li>
            <li>✓ DSGVO / GDPR Konform</li>
            <li>✓ EVB-IT Standard</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4
            style={{
              fontSize: '11px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px',
              color: 'var(--text-primary)',
            }}
          >
            Rechtliches
          </h4>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '13px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <li>
              <Link
                href="/impressum"
                style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1280px',
          margin: '32px auto 0 auto',
          paddingTop: '20px',
          borderTop: '1px solid var(--border-subtle, var(--border-color))',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '11px',
          color: 'var(--text-secondary)',
        }}
      >
        <span>© 2026 SmartConnect CRM. All rights reserved.</span>
        <span
          style={{
            padding: '3px 8px',
            border: '1px solid var(--border-color)',
            borderRadius: '4px',
            fontWeight: '700',
            backgroundColor: 'var(--bg-card)',
          }}
        >
          EU TENDER & PUBLIC PROCUREMENT READY
        </span>
      </div>
    </footer>
  )
}
