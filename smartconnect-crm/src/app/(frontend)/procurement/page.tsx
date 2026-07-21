import React from 'react'

export default function ProcurementPage() {
  return (
    <div className="catalog-container">
      {/* Page Header */}
      <header className="catalog-header">
        <span
          style={{
            fontSize: '13px',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          EU Tender & Public Procurement
        </span>
        <h1 style={{ fontSize: '52px', fontWeight: '900', margin: '10px 0' }}>
          Procurement-Profil
        </h1>
        <p>
          Strukturierte Informationen für öffentliche Beschaffung, EU-Tender und Vergabeverfahren
          mit prüffähiger Dokumentation und Compliance-Bausteinen.
        </p>
      </header>

      {/* Procurement Brutalist Table / Grid */}
      <div style={{ border: '2px solid black', backgroundColor: '#ffffff' }}>
        {/* Section 1: Leistungsgegenstand */}
        <div style={{ borderBottom: '2px solid black', padding: '24px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', margin: '0 0 12px 0' }}>
            Leistungsgegenstand
          </h2>
          <p style={{ fontSize: '15px', lineHeight: '1.6', margin: 0, color: '#222' }}>
            IT-Dienstleistungen im Bereich Operations, Integration, Security, Cloud, Data und
            Delivery mit Fokus auf strukturierte Umsetzung, nachvollziehbare Dokumentation und
            compliance-orientierte Arbeitsweise für öffentliche Auftraggeber und regulierte
            Unternehmen.
          </p>
        </div>

        {/* Section 2: Lieferobjekte */}
        <div style={{ borderBottom: '2px solid black', padding: '24px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', margin: '0 0 16px 0' }}>
            Lieferobjekte
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0px',
              border: '1px solid black',
            }}
          >
            {[
              '1. Betriebs- und Service-Dokumentation (Runbooks, SOPs, Admin-Handbücher)',
              '2. Integrations- und Schnittstellenbeschreibungen (APIs, ETL, Datenflüsse)',
              '3. Sicherheitskonzepte und Baseline-Hardening-Checklisten',
              '4. Tender-Readiness-Packs und Angebotsstrukturen',
              '5. Cloud-Governance-Richtlinien und Betriebsprozesse',
              '6. KPI-Kataloge, Datenmodelle und Dashboard-Prototypen',
              '7. Stabilisierungspläne, Backlogs und Übergabeunterlagen',
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '12px 16px',
                  borderBottom: index === 6 ? 'none' : '1px solid black',
                  fontSize: '14px',
                  fontWeight: '500',
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Dokumentationsumfang */}
        <div style={{ padding: '24px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', margin: '0 0 12px 0' }}>
            Dokumentationsumfang
          </h2>
          <p style={{ fontSize: '14px', margin: 0 }}>
            → Technische Dokumentation (Architektur, Konfiguration, Schnittstellen)
          </p>
        </div>
      </div>
    </div>
  )
}
