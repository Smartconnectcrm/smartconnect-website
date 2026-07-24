import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { translations } from './lib/dictionary'

export const dynamic = 'force-dynamic'

type Props = {
  searchParams: Promise<{ lang?: string }>
}

// Complete multi-language translation map for card contents
const cardContentTranslations: Record<
  string,
  Array<{
    titleKeywords: string[]
    title: string
    description: string
  }>
> = {
  ES: [
    {
      titleKeywords: ['Delivery Support', 'Project Recovery'],
      title: 'Soporte de Entrega y Recuperación de Proyectos',
      description:
        'Soporte orientado a la estabilización y la entrega bajo presión, puntos abiertos y responsabilidades no aclaradas.',
    },
    {
      titleKeywords: ['Data', 'Reporting Foundations'],
      title: 'Bases de Datos e Informes',
      description:
        'Establecimiento de bases de datos e informes con definiciones claras, controles de calidad y lógica de KPI rastreable.',
    },
    {
      titleKeywords: ['Cloud', 'Workplace Operations'],
      title: 'Operaciones de Nube y Entorno de Trabajo Moderno',
      description:
        'Soporte operativo para entornos Microsoft 365/Azure, incluyendo identidades, dispositivos, gobernanza y monitoreo.',
    },
  ],
  FR: [
    {
      titleKeywords: ['Delivery Support', 'Project Recovery'],
      title: 'Support de Livraison & Redressement de Projet',
      description:
        'Accompagnement axé sur la stabilisation et le transfert sous pression de livraison, points ouverts et responsabilités non clarifiées.',
    },
    {
      titleKeywords: ['Data', 'Reporting Foundations'],
      title: 'Bases de Données & Reporting',
      description:
        'Mise en place de bases de données et de reporting avec des définitions claires, des contrôles de qualité et une logique KPI traçable.',
    },
    {
      titleKeywords: ['Cloud', 'Workplace Operations'],
      title: 'Opérations Cloud & Workplace Moderne',
      description:
        'Support opérationnel pour les environnements Microsoft 365/Azure, y compris identités, terminaux, gouvernance et surveillance.',
    },
  ],
  HU: [
    {
      titleKeywords: ['Delivery Support', 'Project Recovery'],
      title: 'Szállítási Támogatás és Projekt Helyreállítás',
      description:
        'Stabilizációs és átadás-orientált támogatás szállítási nyomás, nyitott pontok és tisztázatlan felelősségek esetén.',
    },
    {
      titleKeywords: ['Data', 'Reporting Foundations'],
      title: 'Adat- és Jelentési Alapok',
      description:
        'Adat- és jelentési alapok kiépítése világos definíciókkal, adatminőség-ellenőrzéssel és nyomon követhető KPI-logikával.',
    },
    {
      titleKeywords: ['Cloud', 'Workplace Operations'],
      title: 'Felhő és Modern Munkahelyi Üzemeltetés',
      description:
        'Üzemeltetési támogatás Microsoft 365/Azure környezetekhez, beleértve a személyazonosságokat, végpontokat és felügyeletet.',
    },
  ],
  IT: [
    {
      titleKeywords: ['Delivery Support', 'Project Recovery'],
      title: 'Supporto alla Consegna e Recupero Progetti',
      description:
        'Supporto orientato alla stabilizzazione e al passaggio di consegne in condizioni di pressione, problemi aperti e responsabilità non chiarite.',
    },
    {
      titleKeywords: ['Data', 'Reporting Foundations'],
      title: 'Fondamenta di Dati e Reporting',
      description:
        'Creazione di basi di dati e reporting con definizioni chiare, controlli di qualità dei dati e logica KPI tracciabile.',
    },
    {
      titleKeywords: ['Cloud', 'Workplace Operations'],
      title: 'Operazioni Cloud e Workplace Moderno',
      description:
        'Supporto operativo per ambienti orientati a Microsoft 365/Azure tra cui identità, endpoint, governance e monitoraggio.',
    },
  ],
  NL: [
    {
      titleKeywords: ['Delivery Support', 'Project Recovery'],
      title: 'Leveringsondersteuning & Herstel van Projecten',
      description:
        'Stabilisatie- en overdrachtsgerichte ondersteuning bij leveringsdruk, openstaande punten en onduidelijke verantwoordelijkheden.',
    },
    {
      titleKeywords: ['Data', 'Reporting Foundations'],
      title: 'Data- en Rapportagefundamenten',
      description:
        'Opbouw van data- en rapportagebasis met heldere definities, datakwaliteitscontroles en navolgbare KPI-logica.',
    },
    {
      titleKeywords: ['Cloud', 'Workplace Operations'],
      title: 'Cloud & Modern Workplace Operations',
      description:
        'Operationele ondersteuning voor Microsoft 365/Azure-omgevingen inclusief identiteiten, endpoints, governance en monitoring.',
    },
  ],
  PL: [
    {
      titleKeywords: ['Delivery Support', 'Project Recovery'],
      title: 'Wsparcie Dostaw i Naprawa Projektów',
      description:
        'Wsparcie ukierunkowane na stabilizację i przekazanie projektu pod presją czasu, z otwartymi punktami i niejasną odpowiedzialnością.',
    },
    {
      titleKeywords: ['Data', 'Reporting Foundations'],
      title: 'Fundamenty Danych i Raportowania',
      description:
        'Budowa podstaw danych i raportowania z jasnymi definicjami, kontrolą jakości danych i prześledzalną logiką KPI.',
    },
    {
      titleKeywords: ['Cloud', 'Workplace Operations'],
      title: 'Operacje Chmurowe i Nowoczesne Miejsce Pracy',
      description:
        'Wsparcie operacyjne dla środowisk opartych na Microsoft 365/Azure, w tym tożsamości, punkty końcowe, nadzór i monitoring.',
    },
  ],
  EN: [
    {
      titleKeywords: ['Delivery Support', 'Project Recovery'],
      title: 'Delivery Support & Project Recovery',
      description:
        'Stabilization and handover-oriented support under delivery pressure, open issues, and unresolved responsibilities.',
    },
    {
      titleKeywords: ['Data', 'Reporting Foundations'],
      title: 'Data & Reporting Foundations',
      description:
        'Establishment of data and reporting foundations with clear definitions, data quality checks, and traceable KPI logic.',
    },
    {
      titleKeywords: ['Cloud', 'Workplace Operations'],
      title: 'Cloud & Modern Workplace Operations',
      description:
        'Operational support for Microsoft 365/Azure-oriented environments including identities, endpoints, governance, and monitoring.',
    },
  ],
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
        {services.map((service) => {
          const langMap = cardContentTranslations[activeLang]
          const matchedTranslation = langMap?.find((item) =>
            item.titleKeywords.some((kw) => service.title.toLowerCase().includes(kw.toLowerCase())),
          )

          const displayTitle = matchedTranslation?.title || service.title
          const displayDescription = matchedTranslation?.description || service.description

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
                    {displayTitle}
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
                  {displayDescription}
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
                        color: '#0f172a',
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

              {/* Boundaries */}
              {service.boundaries && service.boundaries.length > 0 && (
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
                      color: '#64748b',
                    }}
                  >
                    {service.boundaries.map((item, idx) => (
                      <li
                        key={idx}
                        style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
                      >
                        <span style={{ color: '#94a3b8' }}>×</span>
                        <span style={{ lineHeight: '1.4' }}>{item.item}</span>
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
