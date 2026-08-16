// src/app/(frontend)/procurement/page.tsx
'use client'

import React, { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

export const dynamic = 'force-dynamic'

const translations: Record<string, Record<string, string>> = {
  DE: {
    badge: 'PUBLIC SECTOR & ENTERPRISE COMPLIANCE PROFILE',
    title: 'PROCUREMENT-PROFIL',
    sub: 'Qualifikationsprofil, vertragliche Standards und auditierbare Compliance-Richtlinien für die IT-Beschaffung im öffentlichen Sektor und in Enterprise-Umgebungen.',
    colStandard: 'STANDARD / ZERTIFIZIERUNG',
    colStatus: 'COMPLIANCE STATUS',
    colScope: 'GELTUNGSBEREICH & DETAILS',
    colLocation: 'NACHWEIS & AUDIT-VERANKERUNG',
    downloadPack: '📄 Procurement-Dokumentation (PDF)',
    rfpTitle: 'OFFIZIELLE AUSSCHREIBUNG / RFP EINREICHEN',
    rfpSub:
      'Übermitteln Sie Ihre Tender-Unterlagen, Spezifikationen oder unverbindliche Voranfragen direkt an unser Procurement-Spezialistenteam.',
    formCompany: 'Organisation / Behörde',
    formEmail: 'Offizielle Kontakt-E-Mail',
    formRef: 'Ausschreibungs-ID / Ref. Nr. (Optional)',
    formContractType: 'Gewünschter Vertragstyp',
    formNotes: 'Projekt-Scope & Anforderungsprofil',
    formSubmit: 'Ausschreibung Übermitteln →',
    formSuccess:
      'Vielen Dank! Ihre Unterlagen wurden erfolgreich an unser Procurement-Team übermittelt.',
  },
  EN: {
    badge: 'PUBLIC SECTOR & ENTERPRISE COMPLIANCE PROFILE',
    title: 'PROCUREMENT PROFILE',
    sub: 'Qualification profile, contractual standards, and auditable compliance guidelines for public sector and enterprise IT procurement.',
    colStandard: 'STANDARD / CERTIFICATION',
    colStatus: 'COMPLIANCE STATUS',
    colScope: 'SCOPE & DETAILS',
    colLocation: 'PROOF & AUDIT LOCATION',
    downloadPack: '📄 Procurement Documentation (PDF)',
    rfpTitle: 'SUBMIT OFFICIAL RFP / TENDER',
    rfpSub:
      'Submit your tender documents, specifications, or preliminary inquiries directly to our procurement team.',
    formCompany: 'Organization / Public Authority',
    formEmail: 'Official Contact Email',
    formRef: 'Tender ID / Ref. Number (Optional)',
    formContractType: 'Preferred Contract Type',
    formNotes: 'Project Scope & Requirements Profile',
    formSubmit: 'Submit Tender Request →',
    formSuccess: 'Thank you! Your submission has been securely delivered to our procurement team.',
  },
  HU: {
    badge: 'KÖZSZFÉRA ÉS VÁLLALATI MEGFELELŐSÉGI PROFIL',
    title: 'BESZERZÉSI PROFIL',
    sub: 'Minősítési profil, szerződéses szabványok és auditálható megfelelőségi irányelvek beszerzésekhez.',
    colStandard: 'SZABVÁNY',
    colStatus: 'STÁTUSZ',
    colScope: 'HATÓKÖR ÉS RÉSZLETEK',
    colLocation: 'IGAZOLÁS ÉS AUDIT',
    downloadPack: '📄 Beszerzési Dokumentáció (PDF)',
    rfpTitle: 'AJÁNLATKÉRÉS ÉS TENDER BENYÚJTÁSA',
    rfpSub:
      'Küldje el ajánlatkérési dokumentumait és specifikációit közvetlenül szakértő csapatunknak.',
    formCompany: 'Szervezet / Intézmény',
    formEmail: 'Hivatalos Kapcsolattartási E-mail',
    formRef: 'Tender ID / Hivatkozási Szám (Opcionális)',
    formContractType: 'Kívánt Szerződéstípus',
    formNotes: 'Projekt Terjedelem és Követelmények',
    formSubmit: 'Tender Benyújtása →',
    formSuccess: 'Köszönjük! Ajánlatkérése sikeresen megérkezett csapatunkhoz.',
  },
}

// Inner component isolated specifically to consume search params
function ProcurementInner() {
  const searchParams = useSearchParams()
  const rawLang = searchParams ? searchParams.get('lang') || 'de' : 'de'
  const langKey = rawLang.toUpperCase()
  const t = translations[langKey] || translations.DE

  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [tenderRef, setTenderRef] = useState('')
  const [contractType, setContractType] = useState('EVB-IT Dienstleistung')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company,
          email,
          serviceInterest: `Procurement RFP (${contractType})`,
          notes: `[Ref: ${tenderRef}] ${notes}`,
        }),
      })

      if (res.ok) setSubmitted(true)
    } catch (err) {
      console.error('Submission failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main
      style={{
        backgroundColor: 'var(--bg-page)',
        color: 'var(--text-primary)',
        minHeight: '80vh',
        padding: '40px 20px 80px 20px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '32px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '800',
                padding: '4px 10px',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-tag)',
                color: 'var(--text-primary)',
                letterSpacing: '0.05em',
              }}
            >
              ⚙ {t.badge}
            </span>
            <h1
              style={{
                fontSize: '36px',
                fontWeight: '900',
                textTransform: 'uppercase',
                margin: '16px 0 10px 0',
                letterSpacing: '-0.02em',
              }}
            >
              {t.title}
            </h1>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                maxWidth: '720px',
                margin: 0,
                lineHeight: '1.6',
              }}
            >
              {t.sub}
            </p>
          </div>

          <a
            href="/docs/SmartConnect_Procurement_Pack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 16px',
              border: '2px solid var(--border-color)',
              borderRadius: '4px',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              fontWeight: '800',
              fontSize: '12px',
              textDecoration: 'none',
              boxShadow: '3px 3px 0px 0px var(--shadow-color, var(--border-color))',
            }}
          >
            {t.downloadPack}
          </a>
        </div>

        {/* Compliance Table */}
        <div
          style={{
            border: '2px solid var(--border-color)',
            borderRadius: '8px',
            backgroundColor: 'var(--bg-card)',
            boxShadow: '4px 4px 0px 0px var(--shadow-color, var(--border-color))',
            overflowX: 'auto',
            marginBottom: '40px',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              fontSize: '13px',
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: '2px solid var(--border-color)',
                  backgroundColor: 'var(--bg-tag)',
                }}
              >
                <th style={{ padding: '14px 18px', fontWeight: '800' }}>{t.colStandard}</th>
                <th style={{ padding: '14px 18px', fontWeight: '800' }}>{t.colStatus}</th>
                <th style={{ padding: '14px 18px', fontWeight: '800' }}>{t.colScope}</th>
                <th style={{ padding: '14px 18px', fontWeight: '800' }}>{t.colLocation}</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '16px 18px', fontWeight: '800', color: '#0284c7' }}>
                  ✓ EVB-IT Framework
                </td>
                <td style={{ padding: '16px 18px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: '#0284c7',
                      color: '#fff',
                      fontWeight: '700',
                    }}
                  >
                    Vollständig Konform
                  </span>
                </td>
                <td style={{ padding: '16px 18px', color: 'var(--text-secondary)' }}>
                  EVB-IT Dienstleistung, Erstellung & Pflege Standardverträge
                </td>
                <td style={{ padding: '16px 18px', fontWeight: '700' }}>
                  Deutsches Öffentliches Auftragsrecht
                </td>
              </tr>

              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '16px 18px', fontWeight: '800', color: '#0284c7' }}>
                  ✓ DSGVO & Privacy Boundary
                </td>
                <td style={{ padding: '16px 18px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: '#0284c7',
                      color: '#fff',
                      fontWeight: '700',
                    }}
                  >
                    EU-Exklusiv
                  </span>
                </td>
                <td style={{ padding: '16px 18px', color: 'var(--text-secondary)' }}>
                  Art. 28 DSGVO AVV-Vorlagen, Anonymisierung & Zero-Third-Party Tracking
                </td>
                <td style={{ padding: '16px 18px', fontWeight: '700' }}>
                  Sitz & Rechenzentren Exklusiv in der EU
                </td>
              </tr>

              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '16px 18px', fontWeight: '800', color: '#0284c7' }}>
                  ✓ ISO 27001 & Access Governance
                </td>
                <td style={{ padding: '16px 18px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: '#0284c7',
                      color: '#fff',
                      fontWeight: '700',
                    }}
                  >
                    ISMS Standard
                  </span>
                </td>
                <td style={{ padding: '16px 18px', color: 'var(--text-secondary)' }}>
                  Rollen- & Rechtemodell (RBAC/PAM), Pflicht-MFA & verschlüsselte Backups
                </td>
                <td style={{ padding: '16px 18px', fontWeight: '700' }}>
                  Audited Access Control Architecture
                </td>
              </tr>

              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '16px 18px', fontWeight: '800', color: '#0284c7' }}>
                  ✓ NIS2 & Cyber Resiliency
                </td>
                <td style={{ padding: '16px 18px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: '#0284c7',
                      color: '#fff',
                      fontWeight: '700',
                    }}
                  >
                    NIS2 Ready
                  </span>
                </td>
                <td style={{ padding: '16px 18px', color: 'var(--text-secondary)' }}>
                  Lieferketten-Sicherheit, Incident Response Protocols & Systemhärtung
                </td>
                <td style={{ padding: '16px 18px', fontWeight: '700' }}>
                  European Critical Infrastructure Standards
                </td>
              </tr>

              <tr>
                <td style={{ padding: '16px 18px', fontWeight: '800', color: '#0284c7' }}>
                  ✓ SLA & Operating Commitments
                </td>
                <td style={{ padding: '16px 18px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: '#0284c7',
                      color: '#fff',
                      fontWeight: '700',
                    }}
                  >
                    Enterprise Level
                  </span>
                </td>
                <td style={{ padding: '16px 18px', color: 'var(--text-secondary)' }}>
                  Kritische Reaktionszeit unter 2h, 99.9% Verfügbarkeit für Core Engines
                </td>
                <td style={{ padding: '16px 18px', fontWeight: '700' }}>
                  Vertraglich Garantiert (SLA Accord)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Corporate RFP Form */}
        <div
          id="tender"
          style={{
            border: '2px solid var(--border-color)',
            borderRadius: '8px',
            backgroundColor: 'var(--bg-card)',
            padding: '32px',
            boxShadow: '4px 4px 0px 0px var(--shadow-color, var(--border-color))',
          }}
        >
          <h2
            style={{
              fontSize: '22px',
              fontWeight: '900',
              textTransform: 'uppercase',
              margin: '0 0 10px 0',
            }}
          >
            {t.rfpTitle}
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              marginBottom: '24px',
              maxWidth: '680px',
            }}
          >
            {t.rfpSub}
          </p>

          {submitted ? (
            <div
              style={{
                padding: '16px',
                borderRadius: '4px',
                backgroundColor: '#0284c7',
                color: '#fff',
                fontWeight: '700',
              }}
            >
              ✓ {t.formSuccess}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'grid', gap: '16px', maxWidth: '680px' }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '16px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    {t.formCompany}
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '4px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-page)',
                      color: 'var(--text-primary)',
                      fontWeight: '600',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    {t.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '4px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-page)',
                      color: 'var(--text-primary)',
                      fontWeight: '600',
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '16px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    {t.formRef}
                  </label>
                  <input
                    type="text"
                    placeholder="z. B. REF-2026-EU-882"
                    value={tenderRef}
                    onChange={(e) => setTenderRef(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '4px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-page)',
                      color: 'var(--text-primary)',
                      fontWeight: '600',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    {t.formContractType}
                  </label>
                  <select
                    value={contractType}
                    onChange={(e) => setContractType(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '4px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-page)',
                      color: 'var(--text-primary)',
                      fontWeight: '700',
                    }}
                  >
                    <option value="EVB-IT Dienstleistung">EVB-IT Dienstleistung</option>
                    <option value="EVB-IT Erstellung">EVB-IT Erstellung</option>
                    <option value="EVB-IT Pflege">EVB-IT Pflege</option>
                    <option value="Custom Enterprise SLA">Custom Enterprise SLA</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  {t.formNotes}
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-page)',
                    color: 'var(--text-primary)',
                    fontWeight: '600',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '12px 20px',
                  backgroundColor: '#fbbf24',
                  color: '#000',
                  fontWeight: '900',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  boxShadow: '2px 2px 0px 0px var(--shadow-color, var(--border-color))',
                }}
              >
                {loading ? 'Processing...' : t.formSubmit}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}

// Default export wrapped completely inside Suspense boundary
export default function ProcurementPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '80vh' }} />}>
      <ProcurementInner />
    </Suspense>
  )
}
