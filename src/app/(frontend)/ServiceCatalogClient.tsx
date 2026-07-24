'use client'

import React, { useState } from 'react'

type ArrayItem = { item: string }

type Service = {
  id: string
  title: string
  categoryTag?: string
  description?: string
  deliverables?: ArrayItem[]
  inputs?: ArrayItem[]
  outputs?: ArrayItem[]
  boundaries?: ArrayItem[]
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

  // Extract unique category tags dynamically from Payload CMS
  const dynamicCategories = Array.from(
    new Set(services.map((s) => s.categoryTag).filter(Boolean) as string[]),
  )

  const tags = ['ALL', ...dynamicCategories]

  // Filter service items based on the active tag button
  const filteredServices =
    selectedTag && selectedTag !== 'ALL'
      ? services.filter((s) => s.categoryTag === selectedTag)
      : services

  return (
    <div>
      {/* Category Filter Buttons (Wired directly to Payload Options) */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
        {tags.map((tag) => {
          const isActive = (selectedTag === null && tag === 'ALL') || selectedTag === tag
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag === 'ALL' ? null : tag)}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: '2px solid #000000',
                backgroundColor: isActive ? '#0f172a' : '#f8fafc',
                color: isActive ? '#ffffff' : '#0f172a',
                fontSize: '12px',
                fontWeight: '800',
                cursor: 'pointer',
                boxShadow: isActive ? '2px 2px 0px 0px #000000' : 'none',
                transition: 'all 0.1s ease',
              }}
            >
              {tag}
            </button>
          )
        })}
      </div>

      {/* Services Grid */}
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
          const inputsList = service.inputs?.map((i) => i.item) || []
          const outputsList = service.outputs?.map((o) => o.item) || []
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
                {/* Header: Title & Clickable Tag */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '16px',
                    marginBottom: '16px',
                  }}
                >
                  <h2 style={{ fontSize: '18px', fontWeight: '800', margin: 0, lineHeight: '1.3' }}>
                    {service.title}
                  </h2>

                  {service.categoryTag && (
                    <button
                      type="button"
                      onClick={() => setSelectedTag(service.categoryTag || null)}
                      style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        padding: '4px 8px',
                        border: '1px solid #000000',
                        borderRadius: '4px',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer',
                        backgroundColor:
                          selectedTag === service.categoryTag ? '#0f172a' : '#f1f5f9',
                        color: selectedTag === service.categoryTag ? '#ffffff' : '#334155',
                        boxShadow: '1px 1px 0px 0px #000000',
                      }}
                      title={`Filter by ${service.categoryTag}`}
                    >
                      {service.categoryTag}
                    </button>
                  )}
                </div>

                {/* Description */}
                <p style={{ fontSize: '13px', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                  {service.description}
                </p>

                {/* Deliverables */}
                {deliverablesList.length > 0 && (
                  <div style={{ marginBottom: '16px' }}>
                    <h3
                      style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        margin: '0 0 6px 0',
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
                        gap: '4px',
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

                {/* Inputs & Outputs (From Payload CMS Schema) */}
                {(inputsList.length > 0 || outputsList.length > 0) && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px',
                      marginBottom: '16px',
                      padding: '12px',
                      backgroundColor: 'rgba(0,0,0,0.02)',
                      borderRadius: '6px',
                      border: '1px dashed #cbd5e1',
                    }}
                  >
                    {/* Inputs */}
                    {inputsList.length > 0 && (
                      <div>
                        <h4
                          style={{
                            fontSize: '10.5px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            margin: '0 0 4px 0',
                            color: '#2563eb',
                          }}
                        >
                          ↓ Inputs
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '11px' }}>
                          {inputsList.map((itemText, idx) => (
                            <li key={idx} style={{ marginBottom: '2px' }}>
                              • {itemText}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Outputs */}
                    {outputsList.length > 0 && (
                      <div>
                        <h4
                          style={{
                            fontSize: '10.5px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            margin: '0 0 4px 0',
                            color: '#16a34a',
                          }}
                        >
                          ↑ Outputs
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '11px' }}>
                          {outputsList.map((itemText, idx) => (
                            <li key={idx} style={{ marginBottom: '2px' }}>
                              • {itemText}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Boundaries / Abgrenzung */}
              {boundariesList.length > 0 && (
                <div
                  className="boundary-box"
                  style={{
                    border: '1px solid #e2e8f0',
                    padding: '12px',
                    borderRadius: '6px',
                    marginTop: '12px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '11px',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      margin: '0 0 6px 0',
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
                      gap: '4px',
                      fontSize: '11.5px',
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
