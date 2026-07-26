'use client'

import React, { useState, useEffect, useRef, Suspense } from 'react'
import Link from 'next/link'
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
  const [lang, setLang] = useState('DE')
  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const themeRef = useRef<HTMLDivElement>(null)

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
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

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value.toUpperCase()
    setLang(selectedLang)
    localStorage.setItem('preferred_lang', selectedLang)

    const googleLangCode = selectedLang.toLowerCase()

    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`

    if (selectedLang !== 'DE') {
      document.cookie = `googtrans=/de/${googleLangCode}; path=/;`
      document.cookie = `googtrans=/de/${googleLangCode}; path=/; domain=${window.location.hostname}`
    }

    const googleSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (googleSelect) {
      googleSelect.value = googleLangCode
      googleSelect.dispatchEvent(new Event('change'))
    }

    window.location.reload()
  }

  const themeModes: { id: ThemeMode; label: string; icon: string }[] = [
    { id: 'light', label: 'Light', icon: '☀️' },
    { id: 'dark', label: 'Dark', icon: '🌙' },
    { id: 'neon', label: 'Neon', icon: '⚡' },
    { id: 'blue', label: 'Blue', icon: '🌊' },
  ]

  const currentModeInfo = themeModes.find((m) => m.id === theme) || themeModes[0]
  const isDarkTheme = theme === 'dark' || theme === 'neon' || theme === 'blue'

  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* Main Header Container */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 20px 12px 20px',
          minHeight: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          backgroundColor: 'var(--bg-page, #ffffff)',
          color: 'var(--text-primary, #0f172a)',
        }}
      >
        {/* Brand Section - Fixed Bright White / Dark Blue Text Rendering */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <div
            className="notranslate"
            style={{
              color: isDarkTheme ? '#ffffff' : '#0f172a',
              // Uses CSS filter to safely lift dark SVG path text to white on dark themes without washing out the orange logo mark
              filter: isDarkTheme ? 'brightness(1.8) contrast(1.2)' : 'none',
              transition: 'all 0.25s ease',
            }}
          >
            <BrandLogo variant={isDarkTheme ? 'dark' : 'light'} priority={true} />
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

        {/* Navigation & Utilities */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            justifyContent: 'flex-end',
            flex: '1 1 auto',
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

          {/* CMS Admin Link */}
          <Link
            href="/admin"
            className="notranslate"
            style={{
              textDecoration: 'none',
              color: 'var(--accent, #2563eb)',
              fontWeight: '700',
              fontSize: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '5px 9px',
              borderRadius: '4px',
              backgroundColor: 'var(--bg-card, #eff6ff)',
              border: '1px solid var(--border-color, #bfdbfe)',
              whiteSpace: 'nowrap',
            }}
            title="Payload CMS Portal"
          >
            <span>🔒</span> CMS Login
          </Link>

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

          {/* Upper Right Corner Theme Popover Toggle */}
          <div ref={themeRef} className="notranslate" style={{ position: 'relative' }}>
            <button
              onClick={() => setIsThemeOpen((prev) => !prev)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                borderRadius: '20px',
                border: '1px solid var(--border-color, #cbd5e1)',
                backgroundColor: 'var(--bg-card, #ffffff)',
                color: 'var(--text-primary, #0f172a)',
                fontSize: '11px',
                fontWeight: '800',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.2s ease',
              }}
              title="Change Site Theme"
            >
              <span>{currentModeInfo.icon}</span>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                {currentModeInfo.label}
              </span>
              <span style={{ fontSize: '8px', opacity: 0.6 }}>{isThemeOpen ? '▲' : '▼'}</span>
            </button>

            {/* Popover Menu */}
            {isThemeOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 6px)',
                  right: 0,
                  zIndex: 10001,
                  width: '140px',
                  backgroundColor: 'var(--bg-card, #ffffff)',
                  border: '1px solid var(--border-color, #cbd5e1)',
                  borderRadius: '10px',
                  padding: '6px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3px',
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
                        gap: '8px',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: isActive ? 'var(--border-color, #0f172a)' : 'transparent',
                        color: isActive
                          ? 'var(--bg-page, #ffffff)'
                          : 'var(--text-primary, #0f172a)',
                        fontSize: '12px',
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
        backgroundColor: 'var(--bg-page, #ffffff)',
        borderBottom: '2px solid var(--border-color, #000000)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
    >
      <Suspense
        fallback={<div style={{ minHeight: '80px', backgroundColor: 'var(--bg-page, #ffffff)' }} />}
      >
        <HeaderNav />
      </Suspense>
    </header>
  )
}
