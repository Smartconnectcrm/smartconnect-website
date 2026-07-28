import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const dynamic = 'force-dynamic'

const pageTranslations: Record<string, Record<string, string>> = {
  DE: {
    heroTitle: 'Leistungskatalog',
    heroSub:
      'Strukturierte Leistungsbausteine mit klarer Abgrenzung, dokumentierter Übergabe und compliance-orientierter Umsetzung.',
    deliverables: '✓ Deliverables',
    boundaries: '⊘ Abgrenzung',
  },
  EN: {
    heroTitle: 'Service Catalog',
    heroSub:
      'Structured service modules with clear scope, documented handover, and compliance-oriented execution.',
    deliverables: '✓ Deliverables',
    boundaries: '⊘ Out of Scope',
  },
  HU: {
    heroTitle: 'Szolgáltatási Katalógus',
    heroSub:
      'Strukturált szolgáltatási modulok világos határokkal, dokumentált átadással és megfelelőség-orientált megvalósítással.',
    deliverables: '✓ Eredmények / Deliverables',
    boundaries: '⊘ Kiterjedésen Kívül',
  },
  FR: {
    heroTitle: 'Catalogue de Services',
    heroSub:
      'Modules de services structurés avec un périmètre clair, une transmission documentée et une exécution axée sur la conformité.',
    deliverables: '✓ Livrables',
    boundaries: '⊘ Hors Périmètre',
  },
  ES: {
    heroTitle: 'Catálogo de Servicios',
    heroSub:
      'Módulos de servicio estructurados con alcance claro, entrega documentada y ejecución orientada al cumplimiento.',
    deliverables: '✓ Entregables',
    boundaries: '⊘ Fuera de Alcance',
  },
  IT: {
    heroTitle: 'Catalogo Servizi',
    heroSub:
      'Moduli di servizio strutturati con perimetro chiaro, passaggio di consegne documentato ed esecuzione orientata alla conformità.',
    deliverables: '✓ Deliverables',
    boundaries: '⊘ Fuori Ambito',
  },
  NL: {
    heroTitle: 'Dienstencatalogus',
    heroSub:
      'Gegestructureerde servicemodules met een duidelijke afbakening, gedocumenteerde overdracht en compliance-gerichte uitvoering.',
    deliverables: '✓ Opleveringen',
    boundaries: '⊘ Buiten Scope',
  },
  PL: {
    heroTitle: 'Katalog Usług',
    heroSub:
      'Ustrukturyzowane moduły usługowe z jasnym zakresem, udokumentowanym przekazaniem i realizacją zorientowaną na zgodność.',
    deliverables: '✓ Rezultaty',
    boundaries: '⊘ Poza Zakresem',
  },
}

interface PageProps {
  searchParams: Promise<{ lang?: string }>
}

export default async function HomePage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams
  const rawLang = resolvedParams?.lang || 'de'
  const langKey = rawLang.toUpperCase()
  const payloadLocale = rawLang.toLowerCase()

  const t = pageTranslations[langKey] || pageTranslations.DE

  const payload = await getPayload({ config: configPromise })

  // Query Payload CMS with explicitly requested locale
  const { docs: services } = await payload.find({
    collection: 'services',
    locale: payloadLocale as any,
    fallbackLocale: 'de' as any,
  })

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
          {services.map((service) => {
            const deliverablesList = service.deliverables?.map((d) => d.item) || []
            const boundariesList = service.boundaries?.map((b) => b.item) || []

            return (
              <div
                key={service.id}
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
                      {service.title}
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
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
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
                        {deliverablesList.map((itemText, idx) => (
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
                      {boundariesList.map((itemText, idx) => (
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
