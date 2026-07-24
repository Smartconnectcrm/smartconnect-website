'use client'

import React, { useState } from 'react'

type Service = {
  id: string
  title: string
  categoryTag?: string
  description?: string
  deliverables?: { item: string }[]
  boundaries?: { item: string }[]
}

type ServiceCatalogClientProps = {
  services: Service[]
  labels: {
    deliverables: string
    boundaries: string
  }
}

export default function ServiceCatalogClient({ services, labels }: ServiceCatalogClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const tags = ['ALL', 'RunOperations', 'Change', 'Advisory', 'Security']

  const filteredServices =
    selectedTag && selectedTag !== 'ALL'
      ? services.filter((s) => s.categoryTag === selectedTag)
      : services

  return (
    <div>
      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {tags.map((tag) => {
          const isActive = (selectedTag === null && tag === 'ALL') || selectedTag === tag
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag === 'ALL' ? null : tag)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                border: isActive ? '2px solid #000000' : '1px solid #cbd5e1',
                backgroundColor: isActive ? '#0f172a' : '#f8fafc',
                color: isActive ? '#ffffff' : '#334155',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {tag}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'stretch',
        }}
      >
        {filteredServices.map((service) => {
          const deliverablesList = service.deliverables?.map((d) => d.item) || []
          const boundariesList = service.boundaries?.map((b) => b.item) || []

          return (
            <div
              key={service.id}
              className="service-card"
              style={{
                border: '2px solid #000000',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '4px 4px 0px 0px #000000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Title & Clickable Tag */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '16px',
                    marginBottom: '16px',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '18px',
                      fontWeight: '800',
                      margin: 0,
                      lineHeight: '1.3',
                    }}
                  >
                    {service.title}
                  </h2>
                  {service.categoryTag && (
                    <button
                      type="button"
                      onClick={() => setSelectedTag(service.categoryTag || null)}
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        padding: '4px 8px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '4px',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer',
                        backgroundColor:
                          selectedTag === service.categoryTag ? '#0f172a' : '#f1f5f9',
                        color: selectedTag === service.categoryTag ? '#ffffff' : '#334155',
                      }}
                      title={`Filter by ${service.categoryTag}`}
                    >
                      {service.categoryTag}
                    </button>
                  )}
                </div>

                {/* Description */}
                <p style={{ fontSize: '13px', lineHeight: '1.5', margin: '0 0 24px 0' }}>
                  {service.description}
                </p>

                {/* Deliverables */}
                {deliverablesList.length > 0 && (
                  <div style={{ marginBottom: '24px' }}>
                    <h3
                      style={{
                        fontSize: '12px',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        margin: '0 0 8px 0',
                      }}
                    >
                      ✓ {labels.deliverables}
                    </h3>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        fontSize: '12px',
                      }}
                    >
                      {deliverablesList.map((itemText, idx) => (
                        <li
                          key={idx}
                          style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
                        >
                          <span style={{ color: '#2563eb', fontWeight: 'bold' }}>→</span>
                          <span style={{ lineHeight: '1.4' }}>{itemText}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Boundaries / Out of Scope */}
              {boundariesList.length > 0 && (
                <div
                  className="boundary-box"
                  style={{
                    border: '1px solid #e2e8f0',
                    padding: '16px',
                    borderRadius: '6px',
                    marginTop: '16px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '12px',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      margin: '0 0 8px 0',
                    }}
                  >
                    ⊘ {labels.boundaries}
                  </h3>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      fontSize: '12px',
                    }}
                  >
                    {boundariesList.map((itemText, idx) => (
                      <li
                        key={idx}
                        style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
                      >
                        <span style={{ opacity: 0.6 }}>×</span>
                        <span style={{ lineHeight: '1.4' }}>{itemText}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
