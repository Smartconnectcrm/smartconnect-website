import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { translations } from './lib/dictionary'

// Force Next.js to re-evaluate searchParams on every navigation/language change
export const dynamic = 'force-dynamic'

type Props = {
  searchParams: Promise<{ lang?: string }>
}

export default async function HomePage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams
  const activeLang = (resolvedSearchParams.lang || 'DE').toUpperCase()
  const dict = translations[activeLang as keyof typeof translations] || translations.DE

  const payload = await getPayload({ config: configPromise })
  const { docs: services } = await payload.find({
    collection: 'services',
  })

  return (
    <main
      style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '40px 20px 80px 20px',
        minHeight: 'calc(100vh - 80px - 300px)',
      }}
    >
      {/* Hero Section Header */}
      <section
        style={{
          marginBottom: '36px',
          borderBottom: '2px solid #000000',
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
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {dict.title}
        </h1>
        <p
          style={{
            fontWeight: '500',
            maxWidth: '680px',
            fontSize: '15px',
            lineHeight: '1.6',
            margin: 0,
          }}
        >
          {dict.subtitle}
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
        {services.map((service) => (
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
                  }}
                >
                  {service.title}
                </h2>
                {service.categoryTag && (
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '4px 8px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {service.categoryTag}
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '13px',
                  marginBottom: '24px',
                  lineHeight: '1.5',
                  margin: '0 0 24px 0',
                }}
              >
                {service.description}
              </p>

              {/* Deliverables */}
              {service.deliverables && service.deliverables.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <h3
                    style={{
                      fontSize: '12px',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '8px',
                      margin: '0 0 8px 0',
                    }}
                  >
                    ✓ {dict.deliverables}
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
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
                      >
                        <span style={{ color: '#2563eb', fontWeight: 'bold' }}>→</span>
                        <span style={{ lineHeight: '1.4' }}>{item.item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Boundaries / Abgrenzung */}
            {service.boundaries && service.boundaries.length > 0 && (
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
                    marginBottom: '8px',
                    margin: '0 0 8px 0',
                  }}
                >
                  ⊘ {dict.boundaries}
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
                  {service.boundaries.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#94a3b8' }}>×</span>
                      <span style={{ lineHeight: '1.4' }}>{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
