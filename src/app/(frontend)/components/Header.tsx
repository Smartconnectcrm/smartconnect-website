'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { BrandLogo } from './BrandLogo'

function HeaderNav() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [lang, setLang] = useState('DE')

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // 1. Theme Hydration
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')

    // 2. Read language parameter from URL or fallback
    const urlLang = searchParams.get('lang')
    if (urlLang) {
      setLang(urlLang.toUpperCase())
      localStorage.setItem('preferred_lang', urlLang.toUpperCase())
    } else {
      const savedLang = localStorage.getItem('preferred_lang') || 'DE'
      setLang(savedLang.toUpperCase())
    }
  }, [searchParams])

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

    const params = new URLSearchParams(searchParams.toString())
    params.set('lang', selectedLang.toLowerCase())

    router.push(`${pathname}?${params.toString()}`)
  }

  // Helper to preserve active ?lang= param when clicking navigation links
  const createLocalizedHref = (path: string) => {
    const langParam = searchParams.get('lang') || lang.toLowerCase()
    return langParam ? `${path}?lang=${langParam.toLowerCase()}` : path
  }

  return (
    <>
      {/* Top-Right Theme Toggle */}
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
            backgroundColor: 'var(--toggle-bg, #f8fafc)',
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
        className="header-inner"
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
        }}
      >
        {/* Brand Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <div className="notranslate">
            <Link href={createLocalizedHref('/')}>
              <BrandLogo variant={theme === 'dark' ? 'dark' : 'light'} priority={true} />
            </Link>
          </div>

          <div
            className="brand-subtext"
            style={{
              borderLeft: '1px solid #e2e8f0',
              paddingLeft: '12px',
              fontSize: '10.5px',
              fontWeight: '700',
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
            href={createLocalizedHref('/')}
            className="nav-link"
            style={{
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '13px',
              whiteSpace: 'nowrap',
            }}
          >
            Leistungskatalog
          </Link>

          <Link
            href={createLocalizedHref('/procurement')}
            className="nav-link"
            style={{
              textDecoration: 'none',
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
            className="notranslate cms-link"
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
              className="lang-select"
              style={{
                appearance: 'none',
                WebkitAppearance: 'none',
                borderRadius: '4px',
                padding: '6px 22px 6px 10px',
                fontSize: '12px',
                fontWeight: '800',
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
              href={createLocalizedHref('/procurement#tender')}
              className="btn-tender"
              style={{
                textDecoration: 'none',
                padding: '8px 14px',
                borderRadius: '4px',
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
              href={createLocalizedHref('/contact')}
              className="btn-kontakt"
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
    <header className="header-root">
      <Suspense fallback={<div style={{ minHeight: '80px' }} />}>
        <HeaderNav />
      </Suspense>
    </header>
  )
}
