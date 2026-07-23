'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BrandLogo } from './BrandLogo'

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Check initial saved theme or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        width: '100%',
        backgroundColor: '#ffffff',
        borderBottom: '2px solid #000000',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 20px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
        }}
      >
        {/* Brand Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <BrandLogo variant="light" priority={true} />

          <div
            style={{
              borderLeft: '1px solid #e2e8f0',
              paddingLeft: '12px',
              fontSize: '11px',
              fontWeight: '700',
              color: '#64748b',
              textTransform: 'uppercase',
              lineHeight: '1.3',
            }}
          >
            Enterprise &<br />
            Public Sector
          </div>
        </div>

        {/* Navigation & Actions Section */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              color: '#0f172a',
              fontWeight: '700',
              fontSize: '13.5px',
            }}
          >
            Leistungskatalog
          </Link>

          <Link
            href="/procurement"
            style={{
              textDecoration: 'none',
              color: '#0f172a',
              fontWeight: '700',
              fontSize: '13.5px',
            }}
          >
            Procurement-Profil
          </Link>

          {/* CMS Admin Link */}
          <Link
            href="/admin"
            style={{
              textDecoration: 'none',
              color: '#2563eb',
              fontWeight: '700',
              fontSize: '12.5px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '5px 9px',
              borderRadius: '4px',
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
            }}
            title="Payload CMS Portal"
          >
            <span>🔒</span> CMS Login
          </Link>

          {/* EU Multi-Language Selector Dropdown (Includes Hungarian) */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <select
              defaultValue="DE"
              style={{
                appearance: 'none',
                WebkitAppearance: 'none',
                backgroundColor: '#f8fafc',
                border: '1px solid #cbd5e1',
                borderRadius: '4px',
                padding: '6px 22px 6px 10px',
                fontSize: '12px',
                fontWeight: '800',
                color: '#0f172a',
                cursor: 'pointer',
                fontFamily: 'inherit',
                outline: 'none',
              }}
            >
              <option value="DE">🇩🇪 DE (Deutsch)</option>
              <option value="EN">🇪🇺 EN (English)</option>
              <option value="HU">🇭🇺 HU (Magyar)</option>
              <option value="FR">🇫🇷 FR (Français)</option>
              <option value="ES">🇪🇸 ES (Español)</option>
              <option value="IT">🇮🇹 IT (Italiano)</option>
              <option value="NL">🇳🇱 NL (Nederlands)</option>
              <option value="PL">🇵🇱 PL (Polski)</option>
            </select>
            <span
              style={{
                position: 'absolute',
                right: '7px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '9px',
                pointerEvents: 'none',
                color: '#64748b',
              }}
            >
              ▼
            </span>
          </div>

          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              border: '1px solid #cbd5e1',
              backgroundColor: '#f8fafc',
              cursor: 'pointer',
              fontSize: '14px',
              padding: 0,
            }}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '2px' }}>
            {/* Secondary CTA: RFP / Tender Submit */}
            <Link
              href="/procurement#tender"
              style={{
                textDecoration: 'none',
                color: '#ffffff',
                backgroundColor: '#0f172a',
                padding: '8px 14px',
                borderRadius: '4px',
                border: '1px solid #0f172a',
                fontWeight: '800',
                fontSize: '11.5px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                boxShadow: '2px 2px 0px 0px #000000',
              }}
            >
              RFP / Tender
            </Link>

            {/* Primary CTA: Direct Contact */}
            <Link
              href="/contact"
              style={{
                textDecoration: 'none',
                color: '#000000',
                backgroundColor: '#fbbf24',
                padding: '8px 16px',
                borderRadius: '4px',
                border: '1px solid #000000',
                fontWeight: '800',
                fontSize: '11.5px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                boxShadow: '2px 2px 0px 0px #000000',
              }}
            >
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
