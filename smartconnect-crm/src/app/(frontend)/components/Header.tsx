'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useTheme as useCustomTheme, type ThemeMode as Theme } from '@/context/ThemeContext'

// Translation Dictionary for Header UI Elements
const translations: Record<string, Record<string, string>> = {
  DE: {
    catalog: 'Leistungskatalog',
    procurement: 'Procurement-Profil',
    contact: 'Kontakt',
    tender: 'RFP / Tender',
    subtextLine1: 'Enterprise &',
    subtextLine2: 'Public Sector',
  },
  EN: {
    catalog: 'Service Catalog',
    procurement: 'Procurement Profile',
    contact: 'Contact',
    tender: 'RFP / Tender',
    subtextLine1: 'Enterprise &',
    subtextLine2: 'Public Sector',
  },
  HU: {
    catalog: 'Szolgáltatási Katalógus',
    procurement: 'Beszerzési Profil',
    contact: 'Kapcsolat',
    tender: 'RFP / Ajánlatkérés',
    subtextLine1: 'Vállalati és',
    subtextLine2: 'Közszféra',
  },
  FR: {
    catalog: 'Catalogue de Services',
    procurement: "Profil d'Achats",
    contact: 'Contact',
    tender: "Appel d'Offres",
    subtextLine1: 'Entreprises &',
    subtextLine2: 'Secteur Public',
  },
  ES: {
    catalog: 'Catálogo de Servicios',
    procurement: 'Perfil de Contratación',
    contact: 'Contacto',
    tender: 'Licitación / RFP',
    subtextLine1: 'Empresas y',
    subtextLine2: 'Sector Público',
  },
  IT: {
    catalog: 'Catalogo Servizi',
    procurement: 'Profilo Appalti',
    contact: 'Contatto',
    tender: "Gara d'Appalto",
    subtextLine1: 'Enterprise &',
    subtextLine2: 'Settore Pubblico',
  },
  NL: {
    catalog: 'Dienstencatalogus',
    procurement: 'Inkoopprofiel',
    contact: 'Contact',
    tender: 'Aanbesteding',
    subtextLine1: 'Enterprise &',
    subtextLine2: 'Publieke Sector',
  },
  PL: {
    catalog: 'Katalog Usług',
    procurement: 'Profil Zamówień',
    contact: 'Kontakt',
    tender: 'Przetarg / RFP',
    subtextLine1: 'Przedsiębiorstwa i',
    subtextLine2: 'Sektor Publiczny',
  },
}

function HeaderNav() {
  const { theme, setTheme } = useCustomTheme()
  const [lang, setLang] = useState('DE')

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const urlLang = searchParams.get('lang')
    if (urlLang) {
      setLang(urlLang.toUpperCase())
      localStorage.setItem('preferred_lang', urlLang.toUpperCase())
    } else {
      const savedLang = localStorage.getItem('preferred_lang') || 'DE'
      setLang(savedLang.toUpperCase())
    }
  }, [searchParams])

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value.toUpperCase()
    setLang(selectedLang)
    localStorage.setItem('preferred_lang', selectedLang)

    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.set('lang', selectedLang.toLowerCase())

    router.push(`${pathname}?${params.toString()}`)
  }

  const createLocalizedHref = (path: string) => {
    const activeLang = searchParams.get('lang') || lang.toLowerCase()
    return activeLang ? `${path}?lang=${activeLang.toLowerCase()}` : path
  }

  // Active translation dictionary fallback
  const t = translations[lang] || translations.DE

  return (
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
      {/* Brand Logo & Subtext */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
        <Link
          href={createLocalizedHref('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <img
            src="/logo.png"
            alt="SmartConnect CRM Logo"
            width="42"
            height="42"
            style={{
              objectFit: 'contain',
              flexShrink: 0,
              display: 'block',
              maxHeight: '42px',
              filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))', // Adds pop in dark mode
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
          {t.subtextLine1}
          <br />
          {t.subtextLine2}
        </div>
      </div>

      {/* Navigation Controls */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
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
          {t.catalog}
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
          {t.procurement}
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
            backgroundColor: 'var(--bg-card)',
            whiteSpace: 'nowrap',
          }}
        >
          <span>🔒</span> CMS Login
        </Link>

        {/* Language Switcher Dropdown */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <select
            id="lang-select"
            name="language"
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
              whiteSpace: 'nowrap',
            }}
          >
            {t.tender}
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
              border: '1px solid var(--border-color)',
              fontWeight: '800',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              boxShadow: '2px 2px 0px 0px var(--shadow-color)',
              whiteSpace: 'nowrap',
            }}
          >
            {t.contact}
          </Link>
        </div>

        {/* Theme Select Dropdown (Top-Right Position) */}
        <div
          style={{ position: 'relative', display: 'inline-block', marginLeft: '4px' }}
          suppressHydrationWarning
        >
          <select
            id="theme-select"
            name="theme"
            value={theme || 'light'}
            onChange={(e) => setTheme(e.target.value as Theme)}
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
              backgroundColor: 'var(--bg-tag)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              height: '32px',
            }}
          >
            <option value="light">☀️ Light</option>
            <option value="dark">🌙 Dark</option>
            <option value="neon">⚡ Neon</option>
            <option value="blue">🔵 Blue</option>
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
      </nav>
    </div>
  )
}

export default function Header() {
  return (
    <header
      className="header-root"
      style={{ borderBottom: '2px solid var(--border-color)', backgroundColor: 'var(--bg-page)' }}
    >
      <Suspense fallback={<div style={{ minHeight: '80px' }} />}>
        <HeaderNav />
      </Suspense>
    </header>
  )
}
