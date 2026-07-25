'use client'

import React, { useState } from 'react'

type ArrayItem = { item?: string; text?: string } | string

type Service = {
  id: string
  title: string
  categoryTag?: string
  description?: string
  deliverables?: ArrayItem[]
  inputs?: ArrayItem[]
  outputs?: ArrayItem[]
  boundaries?: ArrayItem[]
  outOfScope?: ArrayItem[]
}

type ServiceCatalogClientProps = {
  services: Service[]
  labels: {
    deliverables: string
    boundaries: string
  }
}

// Helper function to extract text safely regardless of Payload's internal array format
function parseItemText(item: ArrayItem): string {
  if (typeof item === 'string') return item
  return item?.text || item?.item || ''
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
      {/* Category Filter Buttons */}
      <div
        className="category-filter-row"
        style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}
      >
        {tags.map((tag) => {
          const isActive = (selectedTag === null && tag === 'ALL') || selectedTag === tag
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag === 'ALL' ? null : tag)}
              className="category-tag"
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: '2px solid var(--border-color)',
                backgroundColor: isActive ? 'var(--text-primary)' : 'var(--bg-tag)',
                color: isActive ? 'var(--bg-page)' : 'var(--text-primary)',
                fontSize: '12px',
                fontWeight: '800',
                cursor: 'pointer',
                boxShadow: isActive ? '2px 2px 0px 0px var(--shadow-color)' : 'none',
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
        className="services-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'stretch',
        }}
      >
        {filteredServices.map((service) => {
          const deliverablesList = service.deliverables?.map(parseItemText).filter(Boolean) || []
          const inputsList = service.inputs?.map(parseItemText).filter(Boolean) || []
          const outputsList = service.outputs?.map(parseItemText).filter(Boolean) || []

          // Support both `outOfScope` (from Payload) and `boundaries`
          const rawBoundaries =
            service.outOfScope && service.outOfScope.length > 0
              ? service.outOfScope
              : service.boundaries
          const boundariesList = rawBoundaries?.map(parseItemText).filter(Boolean) || []

          return (
            <div
              key={service.id}
              className="service-card"
              style={{
                border: '2px solid var(--border-color)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '4px 4px 0px 0px var(--shadow-color)',
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
                  <h2
                    style={{
                      fontSize: '18px',
                      fontWeight: '800',
                      margin: 0,
                      lineHeight: '1.3',
                      color: 'var(--text-primary)',
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
                        fontWeight: '800',
                        padding: '4px 8px',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer',
                        backgroundColor:
                          selectedTag === service.categoryTag
                            ? 'var(--text-primary)'
                            : 'var(--bg-tag)',
                        color:
                          selectedTag === service.categoryTag
                            ? 'var(--bg-page)'
                            : 'var(--text-primary)',
                        boxShadow: '1px 1px 0px 0px var(--shadow-color)',
                      }}
                      title={`Filter by ${service.categoryTag}`}
                    >
                      {service.categoryTag}
                    </button>
                  )}
                </div>

                {/* Description */}
                {service.description && (
                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: '1.5',
                      margin: '0 0 20px 0',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {service.description}
                  </p>
                )}

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
                        color: 'var(--text-primary)',
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
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {deliverablesList.map((itemText, idx) => (
                        <li
                          key={idx}
                          style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
                        >
                          <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>
                            →
                          </span>
                          <span style={{ lineHeight: '1.4' }}>{itemText}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Inputs & Outputs */}
                {(inputsList.length > 0 || outputsList.length > 0) && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px',
                      marginBottom: '16px',
                      padding: '12px',
                      backgroundColor: 'var(--bg-secondary)',
                      borderRadius: '6px',
                      border: '1px dashed var(--border-color)',
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
                            color: 'var(--text-primary)',
                          }}
                        >
                          ↓ Inputs
                        </h4>
                        <ul
                          style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            fontSize: '11px',
                            color: 'var(--text-muted)',
                          }}
                        >
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
                            color: 'var(--text-primary)',
                          }}
                        >
                          ↑ Outputs
                        </h4>
                        <ul
                          style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            fontSize: '11px',
                            color: 'var(--text-muted)',
                          }}
                        >
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
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-secondary)',
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
                      color: 'var(--text-primary)',
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
                      color: 'var(--text-muted)',
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
