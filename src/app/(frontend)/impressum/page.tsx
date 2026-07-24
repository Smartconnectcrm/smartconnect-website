import React from 'react'

export default function ImpressumPage() {
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
        Impressum
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
          Angaben gemäß § 5 TMG
        </h2>
        <p style={{ margin: '0 0 20px 0' }}>
          SmartConnect CRM Technologies GmbH
          <br />
          Enterprise & Public Sector Division
          <br />
          Europaplaza 1<br />
          10115 Berlin, Deutschland
        </p>

        <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
          Kontakt
        </h2>
        <p style={{ margin: '0 0 20px 0' }}>
          E-Mail: kontakt@smartconnectcrm.eu
          <br />
          Web: https://smartconnectcrm.eu
        </p>

        <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
          Vertretungsberechtigte Geschäftsführung
        </h2>
        <p style={{ margin: 0 }}>SmartConnect CRM Management Board</p>
      </div>
    </main>
  )
}
