import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  const { docs: services } = await payload.find({
    collection: 'services',
  })

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px 24px 64px 24px',
      }}
    >
      {/* Hero Section Header */}
      <section
        style={{
          marginBottom: '40px',
          borderBottom: '2px solid #000000',
          paddingBottom: '24px',
        }}
      >
        <h1
          style={{
            fontSize: '32px',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            color: '#0f172a',
            marginBottom: '12px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          Leistungskatalog
        </h1>
        <p
          style={{
            color: '#475569',
            fontWeight: '500',
            maxWidth: '650px',
            fontSize: '15px',
            lineHeight: '1.6',
            margin: 0,
          }}
        >
          Strukturierte Leistungsbausteine mit klarer Abgrenzung, dokumentierter Übergabe und
          compliance-orientierter Umsetzung.
        </p>
      </section>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              border: '2px solid #000000',
              padding: '24px',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
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
                    color: '#0f172a',
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
                      backgroundColor: '#f1f5f9',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      whiteSpace: 'nowrap',
                      color: '#334155',
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
                  color: '#475569',
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
                      color: '#0f172a',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '8px',
                      margin: '0 0 8px 0',
                    }}
                  >
                    ✓ Deliverables
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
                      color: '#334155',
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

            {/* Abgrenzung */}
            {service.boundaries && service.boundaries.length > 0 && (
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  padding: '16px',
                  borderRadius: '6px',
                }}
              >
                <h3
                  style={{
                    fontSize: '12px',
                    fontWeight: '800',
                    color: '#0f172a',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '8px',
                    margin: '0 0 8px 0',
                  }}
                >
                  ⊘ Abgrenzung
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
                    color: '#64748b',
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
    </div>
  )
}
