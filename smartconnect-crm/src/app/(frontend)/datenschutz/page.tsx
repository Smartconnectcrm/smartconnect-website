import React from 'react'

export default function DatenschutzPage() {
  return (
    <main
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px 80px 20px',
      }}
    >
      <h1
        style={{
          fontSize: '32px',
          fontWeight: '900',
          textTransform: 'uppercase',
          marginBottom: '24px',
          color: '#0f172a',
          borderBottom: '2px solid #000000',
          paddingBottom: '16px',
        }}
      >
        Datenschutzerklärung
      </h1>

      <div
        style={{
          border: '2px solid #000000',
          padding: '32px',
          borderRadius: '8px',
          backgroundColor: '#ffffff',
          boxShadow: '4px 4px 0px 0px #000000',
          lineHeight: '1.7',
          color: '#334155',
          fontSize: '14px',
        }}
      >
        <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
          1. Datenschutz auf einen Blick
        </h2>
        <p style={{ margin: '0 0 20px 0' }}>
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Sämtliche
          Datenverarbeitungsprozesse erfolgen unter strikter Einhaltung der
          Datenschutz-Grundverordnung (DSGVO).
        </p>

        <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
          2. Datenerfassung auf unserer Website
        </h2>
        <p style={{ margin: '0 0 20px 0' }}>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Kontaktdaten
          können Sie dem Impressum dieser Website entnehmen.
        </p>

        <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
          3. Hosting & Serverstandort
        </h2>
        <p style={{ margin: 0 }}>
          Diese Plattform wird ausschließlich in zertifizierten Rechenzentren innerhalb der
          Europäischen Union gehostet.
        </p>
      </div>
    </main>
  )
}
