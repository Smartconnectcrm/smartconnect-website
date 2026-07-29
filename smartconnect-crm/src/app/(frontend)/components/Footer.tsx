'use client'

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { BrandLogo } from './BrandLogo'

// Footer Translations Dictionary
const footerTranslations: Record<string, Record<string, string>> = {
  DE: {
    tagline:
      'Strukturierte IT-Leistungsbausteine, dokumentierte Übergaben und konforme Umsetzung für Enterprise und den öffentlichen Sektor.',
    navHeader: 'Navigation',
    catalog: 'Leistungskatalog',
    procurement: 'Procurement-Profil',
    cmsDashboard: '🔒 CMS Dashboard',
    complianceHeader: 'Compliance & Standards',
    legalHeader: 'Rechtliches',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    rights: 'Alle Rechte vorbehalten.',
    tenderBadge: 'EU TENDER & PUBLIC PROCUREMENT READY',
  },
  EN: {
    tagline:
      'Structured IT service modules, documented handovers, and compliant execution for enterprise and the public sector.',
    navHeader: 'Navigation',
    catalog: 'Service Catalog',
    procurement: 'Procurement Profile',
    cmsDashboard: '🔒 CMS Dashboard',
    complianceHeader: 'Compliance & Standards',
    legalHeader: 'Legal',
    impressum: 'Imprint',
    datenschutz: 'Privacy Policy',
    rights: 'All rights reserved.',
    tenderBadge: 'EU TENDER & PUBLIC PROCUREMENT READY',
  },
  HU: {
    tagline:
      'Strukturált IT-szolgáltatási modulok, dokumentált átadás és megfelelő megvalósítás a vállalati és a közszféra számára.',
    navHeader: 'NAVIGÁCIÓ',
    catalog: 'Szolgáltatási Katalógus',
    procurement: 'Beszerzési Profil',
    cmsDashboard: '🔒 CMS Irányítópult',
    complianceHeader: 'MEGFELELŐSÉG ÉS SZABVÁNYOK',
    legalHeader: 'JOGI NYILATKOZAT',
    impressum: 'Impresszum',
    datenschutz: 'Adatvédelem',
    rights: 'Minden jog fenntartva.',
    tenderBadge: 'EU TENDER & PUBLIC PROCUREMENT READY',
  },
  FR: {
    tagline:
      'Modules de services IT structurés, transferts documentés et exécution conforme pour les entreprises et le secteur public.',
    navHeader: 'Navigation',
    catalog: 'Catalogue de Services',
    procurement: 'Profil d’Achat',
    cmsDashboard: '🔒 Tableau de bord CMS',
    complianceHeader: 'Conformité & Normes',
    legalHeader: 'Mentions Légales',
    impressum: 'Mentions Légales',
    datenschutz: 'Confidentialité',
    rights: 'Tous droits réservés.',
    tenderBadge: 'EU TENDER & PUBLIC PROCUREMENT READY',
  },
  ES: {
    tagline:
      'Módulos de servicios TI estructurados, entregas documentadas y ejecución conforme para empresas y el sector público.',
    navHeader: 'Navegación',
    catalog: 'Catálogo de Servicios',
    procurement: 'Perfil de Contratación',
    cmsDashboard: '🔒 Panel CMS',
    complianceHeader: 'Cumplimiento y Normas',
    legalHeader: 'Aviso Legal',
    impressum: 'Aviso Legal',
    datenschutz: 'Protección de Datos',
    rights: 'Todos los derechos reservados.',
    tenderBadge: 'EU TENDER & PUBLIC PROCUREMENT READY',
  },
  IT: {
    tagline:
      'Moduli di servizio IT strutturati, consegne documentate ed esecuzione conforme per le aziende e il settore pubblico.',
    navHeader: 'Navigazione',
    catalog: 'Catalogo Servizi',
    procurement: 'Profilo Appalti',
    cmsDashboard: '🔒 Dashboard CMS',
    complianceHeader: 'Conformità e Standard',
    legalHeader: 'Note Legali',
    impressum: 'Note Legali',
    datenschutz: 'Protezione Dati',
    rights: 'Tutti i diritti riservati.',
    tenderBadge: 'EU TENDER & PUBLIC PROCUREMENT READY',
  },
  NL: {
    tagline:
      'Gestructureerde IT-servicemodules, gedocumenteerde overdrachten en conforme uitvoering voor enterprise en de publieke sector.',
    navHeader: 'Navigatie',
    catalog: 'Dienstencatalogus',
    procurement: 'Inkoopprofiel',
    cmsDashboard: '🔒 CMS Dashboard',
    complianceHeader: 'Compliance & Standaarden',
    legalHeader: 'Juridisch',
    impressum: 'Colofon',
    datenschutz: 'Privacybeleid',
    rights: 'Alle rechten voorbehouden.',
    tenderBadge: 'EU TENDER & PUBLIC PROCUREMENT READY',
  },
  PL: {
    tagline:
      'Ustrukturyzowane moduły usług IT, udokumentowane przekazania i zgodna realizacja dla przedsiębiorstw i sektora publicznego.',
    navHeader: 'Nawigacja',
    catalog: 'Katalog Usług',
    procurement: 'Profil Zakupowy',
    cmsDashboard: '🔒 Panel CMS',
    complianceHeader: 'Zgodność i Standardy',
    legalHeader: 'Kwestie Prawne',
    impressum: 'Nota Prawna',
    datenschutz: 'Ochrona Danych',
    rights: 'Wszelkie prawa zastrzeżone.',
    tenderBadge: 'EU TENDER & PUBLIC PROCUREMENT READY',
  },
}

export default function Footer() {
  const searchParams = useSearchParams()
  const rawLang = searchParams?.get('lang')?.toLowerCase() || 'de'
  const langKey = rawLang.toUpperCase()

  const t = footerTranslations[langKey] || footerTranslations.DE

  // Helper to preserve active language parameter across internal footer links
  const createLocalizedHref = (path: string) => {
    return rawLang && rawLang !== 'de' ? `${path}?lang=${rawLang}` : path
  }

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
          <div className="notranslate" style={{ marginBottom: '12px' }}>
            <BrandLogo />
          </div>
          <p
            style={{
              fontSize: '12px',
              color: 'var(--text-secondary, #64748b)',
              lineHeight: '1.6',
            }}
          >
            {t.tagline}
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
            {t.navHeader}
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
                href={createLocalizedHref('/')}
                style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}
              >
                {t.catalog}
              </Link>
            </li>
            <li>
              <Link
                href={createLocalizedHref('/procurement')}
                style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}
              >
                {t.procurement}
              </Link>
            </li>
            <li>
              <Link
                href="/admin"
                style={{ textDecoration: 'none', color: 'var(--accent)', fontWeight: 'bold' }}
              >
                {t.cmsDashboard}
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
            {t.complianceHeader}
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
            {t.legalHeader}
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
                href={createLocalizedHref('/impressum')}
                style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}
              >
                {t.impressum}
              </Link>
            </li>
            <li>
              <Link
                href={createLocalizedHref('/datenschutz')}
                style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}
              >
                {t.datenschutz}
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
          borderTop: '1px solid var(--border-color, #e2e8f0)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '11px',
          color: 'var(--text-secondary)',
        }}
      >
        <span>© 2026 SmartConnect CRM. {t.rights}</span>
        <span
          style={{
            padding: '3px 8px',
            border: '1px solid var(--border-color)',
            borderRadius: '4px',
            fontWeight: '700',
            backgroundColor: 'var(--bg-card)',
          }}
        >
          {t.tenderBadge}
        </span>
      </div>
    </footer>
  )
}
