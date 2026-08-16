// src/app/(frontend)/page.tsx
'use client'

import React, { useState } from 'react'
import { defaultServices } from '@/lib/servicesData'

export function ServiceCatalogInteractive() {
  const [openCardId, setOpenCardId] = useState<string | null>(null)

  const toggleCard = (id: string) => {
    setOpenCardId(openCardId === id ? null : id)
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '24px',
      }}
    >
      {defaultServices.map((service) => {
        const isOpen = openCardId === service.id

        return (
          <div
            key={service.id}
            style={{
              border: '2px solid var(--border-color, #1e293b)',
              borderRadius: '8px',
              padding: '24px',
              backgroundColor: 'var(--bg-card, #0f172a)',
              color: '#ffffff',
              boxShadow: '4px 4px 0px 0px var(--border-color, #000)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Category Tag & Title */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                }}
              >
                <h2 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                  {service.title}
                </h2>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '4px',
                    backgroundColor: '#1e293b',
                    color: '#38bdf8',
                    border: '1px solid #334155',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {service.category}
                </span>
              </div>

              <p
                style={{
                  fontSize: '13px',
                  color: '#94a3b8',
                  lineHeight: '1.5',
                  marginBottom: '16px',
                }}
              >
                {service.description}
              </p>

              {/* Bullet Features */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 16px 0',
                  fontSize: '12px',
                  color: '#cbd5e1',
                }}
              >
                {service.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ color: '#38bdf8' }}>→</span> {feat}
                  </li>
                ))}
              </ul>

              {/* Expandable Technical Details Drawer */}
              {isOpen && (
                <div
                  style={{
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px dashed #334155',
                    fontSize: '12px',
                    color: '#94a3b8',
                  }}
                >
                  <div style={{ marginBottom: '8px' }}>
                    <strong style={{ color: '#ffffff' }}>EVB-IT Qualification:</strong> Compliant
                    with Standard Contract Modules.
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    <strong style={{ color: '#ffffff' }}>Data Boundary:</strong> 100% EU Server
                    Processing (ISO 27001).
                  </div>
                  <div>
                    <strong style={{ color: '#ffffff' }}>SLA Level:</strong> 99.9% Uptime with
                    2-Hour Escalation Guarantee.
                  </div>
                </div>
              )}
            </div>

            {/* Accordion Toggle Button */}
            <button
              onClick={() => toggleCard(service.id)}
              style={{
                marginTop: '16px',
                padding: '8px 12px',
                backgroundColor: 'transparent',
                color: '#38bdf8',
                border: '1px solid #38bdf8',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '12px',
                cursor: 'pointer',
                textAlign: 'center',
                width: '100%',
              }}
            >
              {isOpen ? '▲ Close Specification' : '▼ Technical Specification & SLAs'}
            </button>
          </div>
        )
      })}
    </div>
  )
}
