'use client'

import React, { useState, useEffect, useRef, Suspense } from 'react'
import Link from 'next/link'
<<<<<<< Updated upstream
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { BrandLogo } from './BrandLogo'
import { useTheme, ThemeMode } from '../../../context/ThemeContext'

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

function HeaderNav() {
  const { theme, setTheme } = useTheme()
=======
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useCustomTheme, type Theme } from '../../../context/ThemeContext'

function HeaderNav() {
  const { theme, setTheme } = useCustomTheme()
>>>>>>> Stashed changes
  const [lang, setLang] = useState('DE')
  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const themeRef = useRef<HTMLDivElement>(null)

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
<<<<<<< Updated upstream
    function handleClickOutside(event: MouseEvent) {
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/de\/([a-z]{2})/i)
    const currentLang =
      match && match[1]
        ? match[1].toUpperCase()
        : (localStorage.getItem('preferred_lang') || 'DE').toUpperCase()
    setLang(currentLang)

    if (currentLang !== 'DE') {
      const timer = setTimeout(() => {
        const googleSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement
        if (googleSelect) {
          googleSelect.value = currentLang.toLowerCase()
          googleSelect.dispatchEvent(new Event('change'))
        } else if (window.googleTranslateElementInit) {
          window.googleTranslateElementInit()
        }
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [pathname, searchParams])
=======
    const urlLang = searchParams.get('lang')
    if (urlLang) {
      setLang(urlLang.toUpperCase())
      localStorage.setItem('preferred_lang', urlLang.toUpperCase())
    } else {
      const savedLang = localStorage.getItem('preferred_lang') || 'DE'
      setLang(savedLang.toUpperCase())
    }
  }, [searchParams])
>>>>>>> Stashed changes

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value.toUpperCase()
    setLang(selectedLang)
    localStorage.setItem('preferred_lang', selectedLang)

    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.set('lang', selectedLang.toLowerCase())

<<<<<<< Updated upstream
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`
=======
    router.push(`${pathname}?${params.toString()}`)
  }
>>>>>>> Stashed changes

  const createLocalizedHref = (path: string) => {
    const activeLang = searchParams.get('lang') || lang.toLowerCase()
    return activeLang ? `${path}?lang=${activeLang.toLowerCase()}` : path
  }

<<<<<<< Updated upstream
    const googleSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (googleSelect) {
      googleSelect.value = googleLangCode
      googleSelect.dispatchEvent(new Event('change'))
    }

    window.location.reload()
=======
  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('neon')
    else if (theme === 'neon') setTheme('blue')
    else setTheme('light')
>>>>>>> Stashed changes
  }

  const themeModes: { id: ThemeMode; label: string; icon: string }[] = [
    { id: 'light', label: 'Light', icon: '☀️' },
    { id: 'dark', label: 'Dark', icon: '🌙' },
    { id: 'neon', label: 'Neon', icon: '⚡' },
    { id: 'blue', label: 'Blue', icon: '🌊' },
  ]

  const currentModeInfo = themeModes.find((m) => m.id === theme) || themeModes[0]

  return (
<<<<<<< Updated upstream
    <>
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* Permanently Floating Compact Theme Toggle (Top Right Corner) */}
      <div
        ref={themeRef}
        className="notranslate"
        style={{
          position: 'fixed',
          top: '10px',
          right: '12px',
          zIndex: 100000,
        }}
      >
        <button
          onClick={() => setIsThemeOpen((prev) => !prev)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '3px 8px',
            borderRadius: '16px',
            border: '1px solid var(--border-color, #cbd5e1)',
            backgroundColor: 'var(--bg-card, #ffffff)',
            color: 'var(--text-primary, #0f172a)',
            fontSize: '10px',
            fontWeight: '800',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          }}
          title="Switch Theme"
        >
          <span>{currentModeInfo.icon}</span>
          <span style={{ textTransform: 'uppercase' }}>{currentModeInfo.label}</span>
          <span style={{ fontSize: '7px', opacity: 0.6 }}>{isThemeOpen ? '▲' : '▼'}</span>
        </button>

        {isThemeOpen && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              right: 0,
              zIndex: 100001,
              width: '120px',
              backgroundColor: 'var(--bg-card, #ffffff)',
              border: '1px solid var(--border-color, #cbd5e1)',
              borderRadius: '8px',
              padding: '4px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
            }}
          >
            {themeModes.map((mode) => {
              const isActive = theme === mode.id
              return (
                <button
                  key={mode.id}
                  onClick={() => {
                    setTheme(mode.id)
                    setIsThemeOpen(false)
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 8px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: isActive ? 'var(--border-color, #0f172a)' : 'transparent',
                    color: isActive ? 'var(--bg-page, #ffffff)' : 'var(--text-primary, #0f172a)',
                    fontSize: '11px',
                    fontWeight: isActive ? '800' : '600',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                  }}
                >
                  <span>{mode.icon}</span>
                  <span>{mode.label}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Main Header Container */}
      <div
=======
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
        position: 'relative',
      }}
    >
      {/* Brand Logo & Subtext - Direct CDN 3D Emblem Embed */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
        <Link
          href={createLocalizedHref('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <img
            src="https://i.postimg.cc/cHXm12qd/3D-Smart-Connect-LOGO.png"
            alt="SmartConnect CRM Logo"
            width="38"
            height="38"
            style={{
              objectFit: 'contain',
              flexShrink: 0,
              borderRadius: '50%',
              display: 'block',
            }}
          />
          <span
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 900,
              fontSize: '18px',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              whiteSpace: 'nowrap',
            }}
          >
            SmartConnect <span style={{ color: '#fbbf24' }}>CRM</span>
          </span>
        </Link>

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
            color: 'var(--text-secondary)',
          }}
        >
          Enterprise &<br />
          Public Sector
        </div>
      </div>

      {/* Navigation Controls */}
      <nav
>>>>>>> Stashed changes
        style={{
          display: 'flex',
          alignItems: 'center',
<<<<<<< Updated upstream
          justifyContent: 'space-between',
          gap: '16px',
          backgroundColor: 'var(--bg-page, #ffffff)',
          color: 'var(--text-primary, #0f172a)',
        }}
      >
        {/* Brand Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <div className="notranslate">
            <BrandLogo priority={true} />
          </div>

          <div
            style={{
              borderLeft: '1px solid var(--border-color, #e2e8f0)',
              paddingLeft: '12px',
              fontSize: '10.5px',
              fontWeight: '700',
              color: 'var(--text-secondary, #64748b)',
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
            gap: '14px',
            justifyContent: 'flex-end',
            flex: '1 1 auto',
            paddingRight: '60px', // Extra padding so navigation items don't overlap with top-right fixed toggle
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              color: 'var(--text-primary, #0f172a)',
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
              color: 'var(--text-primary, #0f172a)',
              fontWeight: '700',
              fontSize: '13px',
              whiteSpace: 'nowrap',
            }}
          >
            Procurement-Profil
          </Link>
=======
          gap: '12px',
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
            color: 'var(--text-primary)',
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
            color: 'var(--text-primary)',
          }}
        >
          Procurement-Profil
        </Link>
>>>>>>> Stashed changes

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
            backgroundColor: 'var(--bg-card)',
            whiteSpace: 'nowrap',
          }}
        >
          <span>🔒</span> CMS Login
        </Link>

        {/* Active Language Switcher */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <select
            id="lang-select"
            name="language"
            value={lang}
            onChange={handleLanguageChange}
            className="lang-select"
            style={{
<<<<<<< Updated upstream
              textDecoration: 'none',
              color: 'var(--accent, #2563eb)',
              fontWeight: '700',
=======
              appearance: 'none',
              WebkitAppearance: 'none',
              borderRadius: '4px',
              padding: '6px 22px 6px 10px',
>>>>>>> Stashed changes
              fontSize: '12px',
              fontWeight: '800',
              cursor: 'pointer',
              fontFamily: 'inherit',
              outline: 'none',
              backgroundColor: 'var(--bg-tag)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
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

        {/* Theme Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} suppressHydrationWarning>
          <button
            type="button"
            onClick={toggleTheme}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '30px',
              borderRadius: '4px',
<<<<<<< Updated upstream
              backgroundColor: 'var(--bg-card, #eff6ff)',
              border: '1px solid var(--border-color, #bfdbfe)',
=======
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-tag)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '14px',
              padding: 0,
            }}
            title="Cycle Theme"
          >
            {theme === 'neon' ? '⚡' : theme === 'blue' ? '🔵' : theme === 'dark' ? '🌙' : '☀️'}
          </button>

          <select
            id="theme-select"
            name="theme"
            value={theme || 'light'}
            onChange={(e) => setTheme(e.target.value as Theme)}
            style={{
              fontSize: '12px',
              fontWeight: '800',
              padding: '5px 8px',
              borderRadius: '4px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-tag)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              outline: 'none',
              height: '30px',
            }}
          >
            <option value="light">☀️ Light</option>
            <option value="dark">🌙 Dark</option>
            <option value="neon">⚡ Neon</option>
            <option value="blue">🔵 Blue</option>
          </select>
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
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-page)',
              border: '1px solid var(--border-color)',
              boxShadow: '2px 2px 0px 0px var(--shadow-color)',
>>>>>>> Stashed changes
              whiteSpace: 'nowrap',
            }}
          >
            RFP / Tender
          </Link>

<<<<<<< Updated upstream
          {/* Language Selector */}
          <div className="notranslate" style={{ position: 'relative', display: 'inline-block' }}>
            <select
              value={lang}
              onChange={handleLanguageChange}
              style={{
                appearance: 'none',
                WebkitAppearance: 'none',
                backgroundColor: 'var(--bg-card, #f8fafc)',
                border: '1px solid var(--border-color, #cbd5e1)',
                borderRadius: '4px',
                padding: '6px 22px 6px 10px',
                fontSize: '12px',
                fontWeight: '800',
                color: 'var(--text-primary, #0f172a)',
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
                color: 'var(--text-secondary, #64748b)',
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
                color: 'var(--bg-page, #ffffff)',
                backgroundColor: 'var(--text-primary, #0f172a)',
                padding: '8px 14px',
                borderRadius: '4px',
                border: '1px solid var(--border-color, #0f172a)',
                fontWeight: '800',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                boxShadow: '2px 2px 0px 0px var(--border-color, #000000)',
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
=======
          <Link
            href={createLocalizedHref('/contact')}
            className="btn-kontakt"
            style={{
              textDecoration: 'none',
              color: '#000000',
              backgroundColor: '#fbbf24',
              padding: '8px 16px',
              borderRadius: '4px',
              border: '1px solid var(--border-color)',
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
>>>>>>> Stashed changes
  )
}

export default function Header() {
  return (
    <header
<<<<<<< Updated upstream
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        width: '100%',
        backgroundColor: 'var(--bg-page, #ffffff)',
        borderBottom: '2px solid var(--border-color, #000000)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
    >
      <Suspense
        fallback={<div style={{ minHeight: '80px', backgroundColor: 'var(--bg-page, #ffffff)' }} />}
      >
=======
      className="header-root"
      style={{ borderBottom: '2px solid var(--border-color)', backgroundColor: 'var(--bg-page)' }}
    >
      <Suspense fallback={<div style={{ minHeight: '80px' }} />}>
>>>>>>> Stashed changes
        <HeaderNav />
      </Suspense>
    </header>
  )
}
