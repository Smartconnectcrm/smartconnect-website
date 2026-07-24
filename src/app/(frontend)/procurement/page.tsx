import React from 'react'
import Link from 'next/link'

export default function ProcurementPage() {
  return (
    <main
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '40px 20px 80px 20px',
      }}
    >
      {/* Hero */}
      <section
        style={{
          marginBottom: '40px',
          borderBottom: '2px solid #000000',
          paddingBottom: '24px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            backgroundColor: '#f1f5f9',
            border: '1px solid #cbd5e1',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: '800',
            color: '#334155',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '12px',
          }}
        >
          🇪🇺 Public Sector Compliance Profile
        </div>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: '900',
            textTransform: 'uppercase',
            color: '#0f172a',
            marginBottom: '12px',
          }}
        >
          Procurement-Profil
        </h1>
        <p
          style={{
            color: '#475569',
            fontSize: '15px',
            lineHeight: '1.6',
            margin: 0,
            maxWidth: '700px',
          }}
        >
          Qualifikationsprofil, Standards und Compliance-Richtlinien für die Beschaffung im
          öffentlichen Sektor und in Enterprise-Umgebungen.
        </p>
      </section>

      {/* Grid Specs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}
      >
        <div
          style={{
            border: '2px solid #000000',
            padding: '24px',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            boxShadow: '4px 4px 0px 0px #000000',
          }}
        >
          <h2
            style={{ fontSize: '16px', fontWeight: '800', marginBottom: '12px', color: '#0f172a' }}
          >
            ✓ EVB-IT Standard
          </h2>
          <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', margin: 0 }}>
            Vollständige Konformität mit Ergänzenden Vertragsbedingungen für die Beschaffung von
            IT-Leistungen (EVB-IT Dienstleistung / Erstellung).
          </p>
        </div>

        <div
          style={{
            border: '2px solid #000000',
            padding: '24px',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            boxShadow: '4px 4px 0px 0px #000000',
          }}
        >
          <h2
            style={{ fontSize: '16px', fontWeight: '800', marginBottom: '12px', color: '#0f172a' }}
          >
            🔒 DSGVO & Compliance
          </h2>
          <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', margin: 0 }}>
            Dokumentierte AVV-Muster, Auftragsverarbeitung gemäß Art. 28 DSGVO, Sitz &
            Datenverarbeitung exklusiv in der Europäischen Union.
          </p>
        </div>

        <div
          style={{
            border: '2px solid #000000',
            padding: '24px',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            boxShadow: '4px 4px 0px 0px #000000',
          }}
        >
          <h2
            style={{ fontSize: '16px', fontWeight: '800', marginBottom: '12px', color: '#0f172a' }}
          >
            🛡️ Information Security
          </h2>
          <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', margin: 0 }}>
            ISO 27001-orientierte Betriebsstrukturen, striktes Rollen- & Rechtemodell, MFA-Zwang für
            administrative Zugriffe.
          </p>
        </div>
      </div>

      {/* Tender Anchor Section */}
      <section
        id="tender"
        style={{
          border: '2px solid #000000',
          padding: '32px',
          borderRadius: '8px',
          backgroundColor: '#0f172a',
          color: '#ffffff',
          boxShadow: '4px 4px 0px 0px #000000',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: '900',
            textTransform: 'uppercase',
            marginBottom: '8px',
            color: '#ffffff',
          }}
        >
          RFP & Ausschreibung Einreichen
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#94a3b8',
            marginBottom: '24px',
            maxWidth: '600px',
            lineHeight: '1.5',
          }}
        >
          Senden Sie Ihre Ausschreibungsunterlagen oder unverbindliche Voranfragen direkt an unser
          Procurement-Spezialistenteam.
        </p>
        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            backgroundColor: '#fbbf24',
            color: '#000000',
            border: '2px solid #000000',
            padding: '12px 24px',
            borderRadius: '4px',
            fontWeight: '900',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            boxShadow: '2px 2px 0px 0px #ffffff',
          }}
        >
          Ausschreibung Übermitteln →
        </Link>
      </section>
    </main>
  )
}
