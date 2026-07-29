import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { pageTranslations, cardIndexTranslations } from '@/lib/translations'

export const dynamic = 'force-dynamic'

interface PageProps {
  searchParams: Promise<{ lang?: string }>
}

export default async function HomePage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams
  const rawLang = resolvedParams?.lang || 'de'
  const langKey = rawLang.toUpperCase()

  const t = pageTranslations[langKey] || pageTranslations.DE

  let services: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    const res = await payload.find({
      collection: 'services',
    })
    services = res.docs || []
  } catch (err) {
    console.error('Failed to fetch services from Payload:', err)
  }

  return (
    <main
      style={{
        backgroundColor: 'var(--bg-page)',
        color: 'var(--text-primary)',
        transition: 'background-color 0.25s ease, color 0.25s ease',
        minHeight: 'calc(100vh - 80px - 300px)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '40px 20px 80px 20px',
        }}
      >
        {/* Hero Header */}
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
              letterSpacing: '-0.02em',
              marginBottom: '10px',
              color: 'var(--text-primary)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
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

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {services.map((service, index) => {
            const translation = cardIndexTranslations[langKey]?.[index]

            const displayTitle = translation?.title || service.title
            const displayDesc = translation?.description || service.description
            const deliverablesList =
              translation?.deliverables ||
              service.deliverables?.map((d: any) => d?.item).filter(Boolean) ||
              []
            const boundariesList =
              translation?.boundaries ||
              service.boundaries?.map((b: any) => b?.item).filter(Boolean) ||
              []

            return (
              <div
                key={service.id || index}
                className="service-card"
                style={{
                  border: '2px solid var(--border-color)',
                  padding: '24px',
                  borderRadius: '8px',
                  boxShadow: '4px 4px 0px 0px var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-card)',
                  transition: 'background-color 0.25s ease, border-color 0.25s ease',
                }}
              >
                <div>
                  {/* Title & Tag */}
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
                      {displayTitle}
                    </h2>
                    {service.categoryTag && (
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          padding: '4px 8px',
                          border: '1px solid var(--border-color)',
                          borderRadius: '4px',
                          whiteSpace: 'nowrap',
                          backgroundColor: 'var(--bg-tag, var(--bg-boundary))',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {service.categoryTag}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  {displayDesc && (
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.5',
                        margin: '0 0 24px 0',
                      }}
                    >
                      {displayDesc}
                    </p>
                  )}

                  {/* Deliverables */}
                  {deliverablesList.length > 0 && (
                    <div style={{ marginBottom: '24px' }}>
                      <h3
                        style={{
                          fontSize: '12px',
                          fontWeight: '800',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--text-primary)',
                          margin: '0 0 8px 0',
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
                          color: 'var(--text-body, var(--text-primary))',
                        }}
                      >
                        {deliverablesList.map((itemText: string, idx: number) => (
                          <li
                            key={idx}
                            style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
                          >
                            <span style={{ color: 'var(--accent, #2563eb)', fontWeight: 'bold' }}>
                              →
                            </span>
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
                      backgroundColor: 'var(--bg-boundary)',
                      border: '1px solid var(--border-color)',
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
                        color: 'var(--text-primary)',
                        margin: '0 0 8px 0',
                      }}
                    >
                      {t.boundaries}
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
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {boundariesList.map((itemText: string, idx: number) => (
                        <li
                          key={idx}
                          style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
                        >
                          <span style={{ color: 'var(--text-secondary)' }}>×</span>
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
    </main>
  )
}
