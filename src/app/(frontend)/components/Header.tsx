'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useTheme } from 'next-themes'
import { BrandLogo } from './BrandLogo'

function HeaderNav() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [lang, setLang] = useState('DE')

  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Ensure client-side mounting to avoid hydration mismatches
  useEffect(() => {
    setMounted(true)

    // Language sync
    const urlLang = searchParams.get('lang')
    if (urlLang) {
      setLang(urlLang.toUpperCase())
      localStorage.setItem('preferred_lang', urlLang.toUpperCase())
    } else {
      const savedLang = localStorage.getItem('preferred_lang') || 'DE'
      setLang(savedLang.toUpperCase())
    }
  }, [searchParams])

  // Language Change Handler
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value.toUpperCase()
    setLang(selectedLang)
    localStorage.setItem('preferred_lang', selectedLang)

    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.set('lang', selectedLang.toLowerCase())

    window.location.href = `${pathname}?${params.toString()}`
  }

  const createLocalizedHref = (path: string) => {
    const activeLang = searchParams.get('lang') || lang.toLowerCase()
    return activeLang ? `${path}?lang=${activeLang.toLowerCase()}` : path
  }

  const isDark =
    resolvedTheme === 'dark' || theme === 'dark' || theme === 'neon' || theme === 'blue'

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('neon')
    else if (theme === 'neon') setTheme('blue')
    else setTheme('light')
  }

  return (
    <>
      {/* Top-Right Theme Controls */}
      <div
        style={{
          position: 'absolute',
          top: '6px',
          right: '16px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        {mounted && (
          <>
            {/* Cycle Theme Button */}
            <button
              type="button"
              onClick={toggleTheme}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '4px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-tag)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '14px',
                padding: 0,
              }}
              title="Cycle Theme"
            >
              {theme === 'neon' ? '⚡' : theme === 'blue' ? '🔵' : isDark ? '🌙' : '☀️'}
            </button>

            {/* Direct Multi-Color Theme Switcher */}
            <select
              value={theme || 'light'}
              onChange={(e) => setTheme(e.target.value)}
              style={{
                fontSize: '11px',
                fontWeight: 'bold',
                padding: '2px 6px',
                borderRadius: '4px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-tag)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="light">☀️ Light</option>
              <option value="dark">🌙 Dark</option>
              <option value="neon">⚡ Neon Gold</option>
              <option value="blue">🔵 Enterprise Blue</option>
            </select>
          </>
        )}
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
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <div>
            <Link href={createLocalizedHref('/')}>
              <BrandLogo variant={isDark ? 'dark' : 'light'} priority={true} />
            </Link>
          </div>

          <div
            className="brand-subtext"
            style={{
              borderLeft: '1px solid var(--border-color)',
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

        {/* Navigation Controls */}
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

          <Link
            href="/admin"
            className="cms-link"
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
          >
            <span>🔒</span> CMS Login
          </Link>

          {/* Active Language Dropdown Switcher */}
          <div style={{ position: 'relative', display: 'inline-block', zIndex: 9999 }}>
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
                color: 'var(--text-muted)',
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
                boxShadow: '2px 2px 0px 0px var(--shadow-color)',
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
                boxShadow: '2px 2px 0px 0px var(--shadow-color)',
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
    <header className="header-root" style={{ borderBottom: '2px solid var(--border-color)' }}>
      <Suspense fallback={<div style={{ minHeight: '80px' }} />}>
        <HeaderNav />
      </Suspense>
    </header>
  )
}
