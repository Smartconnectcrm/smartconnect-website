'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { BrandLogo } from './BrandLogo'

declare global {
  interface Window {
    google: any
  }
}

function HeaderNav() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [lang, setLang] = useState('DE')

  useEffect(() => {
    // 1. Theme Setup
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')

    // 2. Read active language directly from Google's cookie or fallback to localStorage
    const match = document.cookie.match(/googtrans=\/de\/([a-z]{2})/i)
    if (match && match[1]) {
      setLang(match[1].toUpperCase())
    } else {
      const savedLang = localStorage.getItem('preferred_lang') || 'DE'
      setLang(savedLang.toUpperCase())
    }
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark')
    const nextTheme = isDark ? 'light' : 'dark'

    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value.toUpperCase()
    setLang(selectedLang)
    localStorage.setItem('preferred_lang', selectedLang)

    const googleLangCode = selectedLang.toLowerCase()

    // Clear previous cookies across domain levels to prevent stale translation conflicts
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`

    // Set fresh Google Translate cookie for the chosen language
    document.cookie = `googtrans=/de/${googleLangCode}; path=/;`
    document.cookie = `googtrans=/de/${googleLangCode}; path=/; domain=${window.location.hostname}`

    // Trigger Google Translate select element if loaded in DOM
    const googleSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (googleSelect) {
      googleSelect.value = googleLangCode
      googleSelect.dispatchEvent(new Event('change'))
    } else {
      // Reload page to apply google translation cookie seamlessly
      window.location.reload()
    }
  }

  return (
    <>
      {/* Hidden Container for Google Translate Initialization */}
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* Top-Right Light/Dark Toggle */}
      <div
        className="notranslate"
        style={{
          position: 'absolute',
          top: '6px',
          right: '16px',
          zIndex: 10,
        }}
      >
        <button
          onClick={toggleTheme}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '26px',
            height: '26px',
            borderRadius: '4px',
            border: '1px solid #cbd5e1',
            backgroundColor: '#f8fafc',
            cursor: 'pointer',
            fontSize: '12px',
            padding: 0,
          }}
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Flexible Header Container */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '12px 20px',
          minHeight: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          backgroundColor: '#ffffff',
        }}
      >
        {/* Brand Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <div className="notranslate">
            <BrandLogo variant="light" priority={true} />
          </div>

          <div
            style={{
              borderLeft: '1px solid #e2e8f0',
              paddingLeft: '12px',
              fontSize: '10.5px',
              fontWeight: '700',
              color: '#64748b',
              textTransform: 'uppercase',
              lineHeight: '1.25',
              whiteSpace: 'nowrap',
            }}
          >
            Enterprise &<br />
            Public Sector
          </div>
        </div>

        {/* Navigation Section */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            flex: '1 1 auto',
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              color: '#0f172a',
              fontWeight: '700',
              fontSize: '13px',
              whiteSpace: 'nowrap',
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
              fontSize: '13px',
              whiteSpace: 'nowrap',
            }}
          >
            Procurement-Profil
          </Link>

          {/* CMS Admin Link */}
          <Link
            href="/admin"
            className="notranslate"
            style={{
              textDecoration: 'none',
              color: '#2563eb',
              fontWeight: '700',
              fontSize: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '5px 9px',
              borderRadius: '4px',
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              whiteSpace: 'nowrap',
            }}
            title="Payload CMS Portal"
          >
            <span>🔒</span> CMS Login
          </Link>

          {/* Language Dropdown Selector */}
          <div className="notranslate" style={{ position: 'relative', display: 'inline-block' }}>
            <select
              value={lang}
              onChange={handleLanguageChange}
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

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
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
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                boxShadow: '2px 2px 0px 0px #000000',
                whiteSpace: 'nowrap',
              }}
            >
              RFP / Tender
            </Link>

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
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                boxShadow: '2px 2px 0px 0px #000000',
                whiteSpace: 'nowrap',
              }}
            >
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default function Header() {
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
      <Suspense fallback={<div style={{ minHeight: '80px', backgroundColor: '#ffffff' }} />}>
        <HeaderNav />
      </Suspense>
    </header>
  )
}
