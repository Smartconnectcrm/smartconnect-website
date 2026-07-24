import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const dynamic = 'force-dynamic'

type Props = {
  searchParams: Promise<{ lang?: string }>
}

// UI Section Label Translations
const uiLabels: Record<
  string,
  {
    title: string
    subtitle: string
    deliverables: string
    boundaries: string
  }
> = {
  EN: {
    title: 'Service Catalog',
    subtitle:
      'Structured service modules with clear scope definition, documented handover, and compliance-driven execution.',
    deliverables: 'Deliverables',
    boundaries: 'Out of Scope / Boundaries',
  },
  HU: {
    title: 'Szolgáltatási Katalógus',
    subtitle:
      'Strukturált szolgáltatási modulok világos határokkal, dokumentált átadással és megfelelőség-orientált megvalósítással.',
    deliverables: 'Mérföldkövek / Deliverables',
    boundaries: 'Kiterjedési Határok',
  },
  FR: {
    title: 'Catalogue de Services',
    subtitle:
      'Modules de service structurés avec une délimitation claire, un transfert documenté et une mise en œuvre axée sur la conformité.',
    deliverables: 'Livrables',
    boundaries: 'Limites du Périmètre',
  },
  ES: {
    title: 'Catálogo de Servicios',
    subtitle:
      'Módulos de servicio estructurados con delimitación clara, entrega documentada e implementación orientada al cumplimiento.',
    deliverables: 'Entregables',
    boundaries: 'Límites del Alcance',
  },
  IT: {
    title: 'Catalogo dei Servizi',
    subtitle:
      'Moduli di servizio strutturati con chiara delimitazione, passaggio di consegne documentato e implementazione orientata alla conformità.',
    deliverables: 'Risultati Attesi',
    boundaries: 'Limiti Operativi',
  },
  NL: {
    title: 'Dienstenencatalogus',
    subtitle:
      'Gestructureerde servicemodules met duidelijke afbakening, gedocumenteerde overdracht en compliance-gerichte uitvoering.',
    deliverables: 'Opleveringen',
    boundaries: 'Afbakening / Buiten Scope',
  },
  PL: {
    title: 'Katalog Usług',
    subtitle:
      'Strukturyzowane moduły usługowe z jasnym rozgraniczeniem, udokumentowanym przekazaniem i wdrożeniem zorientowanym na zgodność.',
    deliverables: 'Wyniki / Deliverables',
    boundaries: 'Zakres / Wyłączenia',
  },
  DE: {
    title: 'Leistungskatalog',
    subtitle:
      'Strukturierte Leistungsbausteine mit klarer Abgrenzung, dokumentierter Übergabe und compliance-orientierter Umsetzung.',
    deliverables: 'Deliverables',
    boundaries: 'Abgrenzung',
  },
}

export default async function HomePage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams
  const activeLangCode = (resolvedSearchParams.lang || 'de').toUpperCase()
  const localeKey = activeLangCode.toLowerCase()

  const labels = uiLabels[activeLangCode] || uiLabels.DE

  const payload = await getPayload({ config: configPromise })

  // Fetch services natively filtered by locale from Payload CMS
  const { docs: services } = await payload.find({
    collection: 'services',
    locale: localeKey as any,
    fallbackLocale: true as any,
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
          {labels.title}
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
          {labels.subtitle}
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
          const deliverablesList = service.deliverables?.map((d: any) => d.item) || []
          const boundariesList = service.boundaries?.map((b: any) => b.item) || []

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
                        color: '#334155',
                      }}
                    >
                      {deliverablesList.map((itemText: string, idx: number) => (
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
                      color: '#64748b',
                    }}
                  >
                    {boundariesList.map((itemText: string, idx: number) => (
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
