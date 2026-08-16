// src/app/(frontend)/page.tsx
import React from 'react'
import Link from 'next/link'
import { pageTranslations } from '@/lib/translations'
import { defaultServices } from '@/lib/servicesData'

export const dynamic = 'force-dynamic'

interface PageProps {
  searchParams: Promise<{ lang?: string }>
}

export default async function HomePage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams
  const rawLang = resolvedParams?.lang || 'de'
  const langKey = rawLang.toUpperCase()
  const t = pageTranslations[langKey] || pageTranslations.DE
  const contactBase = rawLang && rawLang !== 'de' ? `/contact?lang=${rawLang}` : '/contact'

  return (
    <main
      style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', minHeight: '80vh' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 20px 80px 20px' }}>
        {/* Hero Section */}
        <section
          style={{
            marginBottom: '36px',
            borderBottom: '2px solid var(--border-color)',
            paddingBottom: '20px',
          }}
        >
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '900',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            {t.heroTitle}
          </h1>
          <p
            style={{
              fontWeight: '500',
              maxWidth: '680px',
              fontSize: '15px',
              lineHeight: '1.6',
              margin: 0,
              color: 'var(--text-secondary)',
            }}
          >
            {t.heroSub}
          </p>
        </section>

        {/* 12-Item Enterprise Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {defaultServices.map((service, index) => {
            const localized = service.translations[langKey] || service.translations.DE
            const targetHref = `${contactBase}${contactBase.includes('?') ? '&' : '?'}service=${encodeURIComponent(localized.title)}`

            return (
              <div
                key={service.id || index}
                style={{
                  border: '2px solid var(--border-color)',
                  padding: '24px',
                  borderRadius: '8px',
                  boxShadow: '4px 4px 0px 0px var(--shadow-color, var(--border-color))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <div>
                  {/* Category Tag & Enterprise Badge */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '14px',
                      gap: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-tag)',
                        color: 'var(--text-primary)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {service.category}
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: '700',
                        color: '#0284c7',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      ✓ EVB-IT & ISO 27001
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: '18px',
                      fontWeight: '800',
                      margin: '0 0 10px 0',
                      lineHeight: '1.3',
                    }}
                  >
                    {localized.title}
                  </h2>

                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.5',
                      margin: '0 0 16px 0',
                    }}
                  >
                    {localized.description}
                  </p>

                  {/* Feature Deliverables */}
                  <div style={{ marginBottom: '20px' }}>
                    <h3
                      style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        margin: '0 0 8px 0',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {t.deliverables}
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
                      {localized.features.map((feat, idx) => (
                        <li
                          key={idx}
                          style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
                        >
                          <span style={{ color: '#0284c7', fontWeight: 'bold' }}>→</span>
                          <span style={{ lineHeight: '1.4' }}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Button */}
                <Link
                  href={targetHref}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '10px 14px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    backgroundColor: 'var(--bg-tag)',
                    color: 'var(--text-primary)',
                    fontWeight: '800',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    boxShadow: '2px 2px 0px 0px var(--shadow-color, var(--border-color))',
                    marginTop: '12px',
                  }}
                >
                  {t.ctaBtn}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
