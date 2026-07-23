import React from 'react'

export default function ContactPage() {
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
          marginBottom: '12px',
          color: '#0f172a',
        }}
      >
        Kontakt & Anfragen
      </h1>
      <p style={{ color: '#475569', marginBottom: '32px', fontSize: '15px' }}>
        Nehmen Sie direkt Kontakt mit unserem Enterprise-Team auf oder übermitteln Sie Ihre
        Tender-Unterlagen.
      </p>

      <form
        style={{
          border: '2px solid #000000',
          padding: '32px',
          borderRadius: '8px',
          backgroundColor: '#ffffff',
          boxShadow: '4px 4px 0px 0px #000000',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: '800',
              marginBottom: '6px',
              textTransform: 'uppercase',
            }}
          >
            Organisation / Unternehmen
          </label>
          <input
            type="text"
            placeholder="z.B. Ministerium / Enterprise AG"
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #cbd5e1',
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: '800',
              marginBottom: '6px',
              textTransform: 'uppercase',
            }}
          >
            E-Mail Adresse
          </label>
          <input
            type="email"
            placeholder="name@organisation.de"
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #cbd5e1',
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: '800',
              marginBottom: '6px',
              textTransform: 'uppercase',
            }}
          >
            Anfrage / Projektbeschreibung
          </label>
          <textarea
            rows={5}
            placeholder="Beschreiben Sie Ihre Anforderungen oder Tender-Details..."
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #cbd5e1',
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#fbbf24',
            color: '#000000',
            border: '2px solid #000000',
            padding: '12px 24px',
            borderRadius: '4px',
            fontWeight: '900',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            boxShadow: '2px 2px 0px 0px #000000',
            alignSelf: 'flex-start',
          }}
        >
          Anfrage Absenden
        </button>
      </form>
    </main>
  )
}
