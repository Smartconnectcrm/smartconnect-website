import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
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
      {/* Hero Header */}
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
          Leistungskatalog
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
          Strukturierte Leistungsbausteine mit klarer Abgrenzung, dokumentierter Übergabe und
          compliance-orientierter Umsetzung.
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
        {services.map((service) => {
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
                backgroundColor: '#ffffff',
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
                      color: '#0f172a',
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
                        backgroundColor: '#f1f5f9',
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
                    lineHeight: '1.5',
                    margin: '0 0 24px 0',
                  }}
                >
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
                        color: '#0f172a',
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
                    backgroundColor: '#f8fafc',
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
                      color: '#0f172a',
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
                    {boundariesList.map((itemText, idx) => (
                      <li
                        key={idx}
                        style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
                      >
                        <span style={{ color: '#94a3b8' }}>×</span>
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
    </main>
  )
}
