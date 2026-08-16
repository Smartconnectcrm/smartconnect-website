// src/app/(frontend)/procurement/page.tsx
'use client'

import React, { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const translations: Record<string, Record<string, string>> = {
  DE: {
    badge: 'PUBLIC SECTOR COMPLIANCE PROFILE',
    title: 'PROCUREMENT-PROFIL',
    sub: 'Qualifikationsprofil, Standards und Compliance-Richtlinien für die Beschaffung im öffentlichen Sektor und in Enterprise-Umgebungen.',
    colStandard: 'COMPLIANCE STANDARD',
    colStatus: 'STATUS',
    colScope: 'GELTUNGSBEREICH & ABDECKUNG',
    colLocation: 'PRÜFSTANDORT / NACHWEIS',
    rfpTitle: 'RFP & AUSSCHREIBUNG EINREICHEN',
    rfpSub:
      'Senden Sie Ihre Ausschreibungsunterlagen oder unverbindliche Voranfragen direkt an unser Procurement-Spezialistenteam.',
    formCompany: 'Unternehmen / Behörde',
    formEmail: 'E-Mail-Adresse',
    formNotes: 'Projektbeschreibung / Scope',
    formSubmit: 'Ausschreibung Übermitteln →',
    formSuccess:
      'Vielen Dank! Ihre Anfrage wurde erfolgreich an unser Procurement-Team übermittelt.',
  },
  EN: {
    badge: 'PUBLIC SECTOR COMPLIANCE PROFILE',
    title: 'PROCUREMENT PROFILE',
    sub: 'Qualification profile, standards, and compliance guidelines for public sector procurement and enterprise environments.',
    colStandard: 'COMPLIANCE STANDARD',
    colStatus: 'STATUS',
    colScope: 'SCOPE & COVERAGE',
    colLocation: 'AUDIT LOCATION / PROOF',
    rfpTitle: 'SUBMIT RFP & TENDER',
    rfpSub:
      'Submit your tender documents or non-binding inquiries directly to our procurement specialist team.',
    formCompany: 'Company / Public Authority',
    formEmail: 'Email Address',
    formNotes: 'Project Scope / Requirements',
    formSubmit: 'Submit Tender Request →',
    formSuccess: 'Thank you! Your tender request has been submitted to our procurement team.',
  },
  HU: {
    badge: 'KÖZSZFÉRA MEGFELELŐSÉGI PROFIL',
    title: 'BESZERZÉSI PROFIL',
    sub: 'Minősítési profil, szabványok és megfelelőségi irányelvek a közszféra és vállalati beszerzésekhez.',
    colStandard: 'SZABVÁNY',
    colStatus: 'STÁTUSZ',
    colScope: 'HATÓKÖR ÉS LEFEDETTSÉG',
    colLocation: 'ELLENŐRZÉS / IGAZOLÁS',
    rfpTitle: 'AJÁNLATKÉRÉS ÉS TENDER BENYÚJTÁSA',
    rfpSub: 'Küldje el ajánlatkérési dokumentumait közvetlenül beszerzési szakértő csapatunknak.',
    formCompany: 'Vállalat / Intézmény',
    formEmail: 'E-mail Cím',
    formNotes: 'Projekt Terjedelem / Követelmények',
    formSubmit: 'Tender Benyújtása →',
    formSuccess: 'Köszönjük! Ajánlatkérése sikeresen megérkezett beszerzési csapatunkhoz.',
  },
  FR: {
    badge: 'PROFIL DE CONFORMITÉ SECTEUR PUBLIC',
    title: "PROFIL D'ACHAT",
    sub: 'Profil de qualification, normes et directives de conformité pour les marchés publics et entreprises.',
    colStandard: 'NORME',
    colStatus: 'STATUT',
    colScope: 'PÉRIMÈTRE ET COUVERTURE',
    colLocation: 'LIEU D’AUDIT / PREUVE',
    rfpTitle: "SOUMETTRE UN APPEL D'OFFRES / RFP",
    rfpSub: 'Envoyez vos documents d’appel d’offres directement à notre équipe de spécialistes.',
    formCompany: 'Entreprise / Organisme',
    formEmail: 'Adresse E-mail',
    formNotes: 'Périmètre du Projet',
    formSubmit: 'Soumettre la Demande →',
    formSuccess: 'Merci ! Votre demande a été transmise à notre équipe d’achats.',
  },
  ES: {
    badge: 'PERFIL DE CUMPLIMIENTO SECTOR PÚBLICO',
    title: 'PERFIL DE CONTRATACIÓN',
    sub: 'Perfil de cualificación, estándares y directivas para la contratación pública y empresarial.',
    colStandard: 'ESTÁNDAR',
    colStatus: 'ESTADO',
    colScope: 'ALCANCE Y COBERTURA',
    colLocation: 'UBICACIÓN DE AUDITORÍA',
    rfpTitle: 'PRESENTAR LICITACIÓN / RFP',
    rfpSub: 'Envíe sus documentos de licitación directamente a nuestro equipo especializado.',
    formCompany: 'Empresa / Entidad Pública',
    formEmail: 'Correo Electrónico',
    formNotes: 'Alcance del Proyecto',
    formSubmit: 'Enviar Licitación →',
    formSuccess: '¡Gracias! Su solicitud ha sido enviada a nuestro equipo.',
  },
  IT: {
    badge: 'PROFILO DI CONFORMITÀ SETTORE PUBBLICO',
    title: 'PROFILO PROCUREMENT',
    sub: 'Profilo di qualificazione, standard e linee guida per gli appalti pubblici e aziendali.',
    colStandard: 'STANDARD',
    colStatus: 'STATO',
    colScope: 'AMBITO E COPERTURA',
    colLocation: 'SEDE DI AUDIT / PROVA',
    rfpTitle: 'INVIA GARA D’APPALTO / RFP',
    rfpSub: 'Invia i documenti di gara direttamente al nostro team di specialisti.',
    formCompany: 'Azienda / Ente Pubblico',
    formEmail: 'Indirizzo Email',
    formNotes: 'Ambito del Progetto',
    formSubmit: 'Invia Richiesta Gara →',
    formSuccess: 'Grazie! La tua richiesta è stata inviata al nostro team.',
  },
  NL: {
    badge: 'PUBLIEKE SECTOR COMPLIANCE PROFIEL',
    title: 'INKOOPPROFIEL',
    sub: 'Kwalificatieprofiel, normen en richtlijnen voor inkoop in de publieke sector en enterprise-omgevingen.',
    colStandard: 'NORME',
    colStatus: 'STATUS',
    colScope: 'SCOPE & DEKKING',
    colLocation: 'AUDITLOCATIE / BEWIJS',
    rfpTitle: 'RFP & AANBESTEDING INDIENEN',
    rfpSub: 'Stuur uw aanbestedingsdocumenten direct naar ons inkoopteam.',
    formCompany: 'Bedrijf / Overheidsinstantie',
    formEmail: 'E-mailadres',
    formNotes: 'Projectomvang',
    formSubmit: 'Aanbesteding Indienen →',
    formSuccess: 'Bedankt! Uw aanvraag is succesvol verzonden.',
  },
  PL: {
    badge: 'PROFIL ZGODNOŚCI SEKTORA PUBLICZNEGO',
    title: 'PROFIL ZAKUPOWY',
    sub: 'Profil kwalifikacyjny, standardy i wytyczne zgodności dla zamówień publicznych i komercyjnych.',
    colStandard: 'STANDARD',
    colStatus: 'STATUS',
    colScope: 'ZAKRES I POKRYCIE',
    colLocation: 'LOKALIZACJA AUDYTU',
    rfpTitle: 'ZŁÓŻ ZAPYTANIE OFERTOWE / RFP',
    rfpSub: 'Wyślij dokumentację przetargową bezpośrednio do naszego zespołu specjalistów.',
    formCompany: 'Firma / Instytucja',
    formEmail: 'Adres E-mail',
    formNotes: 'Zakres Projektu',
    formSubmit: 'Wyślij Zapytanie →',
    formSuccess: 'Dziękujemy! Twoje zapytanie zostało wysłane.',
  },
}

function ProcurementContent() {
  const searchParams = useSearchParams()
  const rawLang = searchParams.get('lang') || 'de'
  const langKey = rawLang.toUpperCase()
  const t = translations[langKey] || translations.DE

  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
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
          serviceInterest: 'Procurement RFP Submission',
          notes,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      }
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
        {/* Header Badge & Title */}
        <div style={{ marginBottom: '32px' }}>
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

        {/* Extended Enterprise Compliance Table */}
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
              {/* Row 1: EVB-IT */}
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '16px 18px', fontWeight: '800', color: '#38bdf8' }}>
                  ✓ EVB-IT Standard
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
                  EVB-IT Dienstleistung, Erstellung & Pflege Vertragswerke
                </td>
                <td style={{ padding: '16px 18px', fontWeight: '700' }}>
                  Bereit für Öffentliche Ausschreibungen
                </td>
              </tr>

              {/* Row 2: GDPR */}
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '16px 18px', fontWeight: '800', color: '#38bdf8' }}>
                  ✓ DSGVO & Compliance
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
                  Dokumentierte AVV-Muster gemäß Art. 28 DSGVO & EU-Hosting
                </td>
                <td style={{ padding: '16px 18px', fontWeight: '700' }}>
                  Sitz & Datenverarbeitung Exklusiv in der EU
                </td>
              </tr>

              {/* Row 3: ISO 27001 */}
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '16px 18px', fontWeight: '800', color: '#38bdf8' }}>
                  ✓ Information Security
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
                    ISO 27001 Orientiert
                  </span>
                </td>
                <td style={{ padding: '16px 18px', color: 'var(--text-secondary)' }}>
                  Striktes Rollen- & Rechtemodell, MFA-Zwang für Admin-Zugriffe
                </td>
                <td style={{ padding: '16px 18px', fontWeight: '700' }}>
                  Enterprise Access Security Standard
                </td>
              </tr>

              {/* Row 4: NIS2 & BSI IT-Grundschutz */}
              <tr>
                <td style={{ padding: '16px 18px', fontWeight: '800', color: '#38bdf8' }}>
                  ✓ NIS2 & BSI Grundschutz
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
                    Cyber-Resilient
                  </span>
                </td>
                <td style={{ padding: '16px 18px', color: 'var(--text-secondary)' }}>
                  Vorfall-Meldesysteme, Lieferketten-Sicherheit und Systemhärtung
                </td>
                <td style={{ padding: '16px 18px', fontWeight: '700' }}>
                  Audited European Cloud Infrastructure
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Interactive In-Page Tender & RFP Submission Form */}
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
              style={{ display: 'grid', gap: '16px', maxWidth: '640px' }}
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

export default function ProcurementPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '80vh' }} />}>
      <ProcurementContent />
    </Suspense>
  )
}
