'use client'

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Footer() {
  const searchParams = useSearchParams()
  const activeLang = searchParams.get('lang') || 'de'

  const createLocalizedHref = (path: string) => {
    return activeLang ? `${path}?lang=${activeLang.toLowerCase()}` : path
  }

  return (
    <footer
      style={{
        borderTop: '2px solid var(--border-color, #000000)',
        padding: '56px 24px 28px 24px',
        marginTop: '80px',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          paddingBottom: '40px',
          borderBottom: '1px solid var(--border-color, #e2e8f0)',
        }}
      >
        {/* Column 1: Brand & Description */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
            }}
          >
            {/* Mini Logo */}
            <svg
              viewBox="0 0 100 100"
              width="28"
              height="28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="footerBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
                <linearGradient id="footerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#b45309" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
              <path
                d="M 32,25 C 18,25 10,36 10,50 C 10,64 18,75 32,75 C 44,75 52,63 60,50 C 52,37 44,25 32,25 Z"
                stroke="url(#footerBlueGrad)"
                strokeWidth="11"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 68,25 C 82,25 90,36 90,50 C 90,64 82,75 68,75 C 56,75 48,63 40,50 C 48,37 56,25 68,25 Z"
                stroke="url(#footerGoldGrad)"
                strokeWidth="11"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span
              style={{
                fontSize: '18px',
                fontWeight: '900',
                letterSpacing: '-0.02em',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              SmartConnect <span style={{ color: '#2563eb' }}>CRM</span>
            </span>
          </div>

          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            Strukturierte IT-Leistungsbausteine, dokumentierte Übergaben und konforme Umsetzung für
            Enterprise und den öffentlichen Sektor.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <div
            style={{
              fontSize: '12px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '16px',
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
              gap: '10px',
              fontSize: '13px',
            }}
          >
            <li>
              <Link
                href={createLocalizedHref('/')}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                Leistungskatalog
              </Link>
            </li>
            <li>
              <Link
                href={createLocalizedHref('/procurement')}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                Procurement-Profil
              </Link>
            </li>
            <li>
              <Link
                href="/admin"
                className="cms-link"
                style={{
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: '700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>🔒</span> CMS Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Compliance & Standards */}
        <div>
          <div
            style={{
              fontSize: '12px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '16px',
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
              gap: '8px',
              fontSize: '13px',
              fontWeight: '500',
            }}
          >
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓</span> ISO 27001 Ready
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓</span> DSGVO / GDPR Konform
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓</span> EVB-IT Standard
            </li>
          </ul>
        </div>

        {/* Column 4: Rechtliches */}
        <div>
          <div
            style={{
              fontSize: '12px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '16px',
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
              gap: '10px',
              fontSize: '13px',
            }}
          >
            <li>
              <Link
                href={createLocalizedHref('/impressum')}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href={createLocalizedHref('/datenschutz')}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
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
          maxWidth: '1240px',
          margin: '0 auto',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '12px',
        }}
      >
        <div>© {new Date().getFullYear()} SmartConnect CRM. All rights reserved.</div>

        <div
          className="boundary-box"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 10px',
            borderRadius: '4px',
            fontWeight: '700',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          <span>🇪🇺</span> EU Tender & Public Procurement Ready
        </div>
      </div>
    </footer>
  )
}
