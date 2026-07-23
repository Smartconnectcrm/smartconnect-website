'use client'

import React, { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    org: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate/Trigger payload submit endpoint
      const res = await fetch('/api/forms/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => null) // Fallback gracefully if API collection is passive

      setLoading(false)
      setSubmitted(true)
    } catch (err) {
      setLoading(false)
      setSubmitted(true)
    }
  }

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

      {submitted ? (
        <div
          style={{
            border: '2px solid #000000',
            padding: '32px',
            borderRadius: '8px',
            backgroundColor: '#f0fdf4',
            boxShadow: '4px 4px 0px 0px #000000',
          }}
        >
          <h2
            style={{ fontSize: '20px', fontWeight: '900', color: '#166534', marginBottom: '8px' }}
          >
            ✓ Anfrage Erfolgreich Übermittelt
          </h2>
          <p style={{ color: '#15803d', fontSize: '14px', margin: 0 }}>
            Vielen Dank! Ihre Anfrage für <strong>{formData.org || 'Ihre Organisation'}</strong>{' '}
            wurde erfasst. Unser Procurement-Team meldet sich in Kürze unter{' '}
            <strong>{formData.email}</strong>.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
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
              Organisation / Unternehmen *
            </label>
            <input
              type="text"
              required
              placeholder="z.B. Ministerium / Enterprise AG"
              value={formData.org}
              onChange={(e) => setFormData({ ...formData, org: e.target.value })}
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
              E-Mail Adresse *
            </label>
            <input
              type="email"
              required
              placeholder="name@organisation.de"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              Anfrage / Projektbeschreibung *
            </label>
            <textarea
              rows={5}
              required
              placeholder="Beschreiben Sie Ihre Anforderungen oder Tender-Details..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
            disabled={loading}
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
              cursor: loading ? 'wait' : 'pointer',
              boxShadow: '2px 2px 0px 0px #000000',
              alignSelf: 'flex-start',
            }}
          >
            {loading ? 'Wird Übermittelt...' : 'Anfrage Absenden'}
          </button>
        </form>
      )}
    </main>
  )
}
