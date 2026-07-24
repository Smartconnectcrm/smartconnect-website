import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { translations } from './lib/dictionary'

export const dynamic = 'force-dynamic'

type Props = {
  searchParams: Promise<{ lang?: string }>
}

// Complete multi-language translation map for card contents & bullet items
const cardContentTranslations: Record<
  string,
  Array<{
    titleKeywords: string[]
    title: string
    description: string
    deliverables?: string[]
    boundaries?: string[]
  }>
> = {
  ES: [
    {
      titleKeywords: ['Delivery Support', 'Project Recovery'],
      title: 'Soporte de Entrega y Recuperación de Proyectos',
      description:
        'Soporte orientado a la estabilización y la entrega bajo presión, puntos abiertos y responsabilidades no aclaradas.',
      deliverables: [
        'Análisis del estado actual y backlog de problemas (priorización por riesgo)',
        'Sprint de estabilización (contención, victorias rápidas, plan de solución)',
        'Entrega limpia (RACI, guías de ejecución, riesgos abiertos, siguientes pasos)',
        'Listas de verificación de QA y aceptación (criterios, evidencia)',
        'Estructura de comunicación y escalado (mapa de partes interesadas)',
        'Documentación de lecciones aprendidas',
      ],
      boundaries: [
        'Sin responsabilidad por decisiones o arquitecturas heredadas sin transparencia',
        'Sin expansión de alcance sin proceso de control de cambios y priorización',
        'Sin cambios en producción sin aprobación y prueba documentada',
        'Sin garantía de éxito del proyecto en caso de responsabilidades no claras',
      ],
    },
    {
      titleKeywords: ['Data', 'Reporting Foundations'],
      title: 'Bases de Datos e Informes',
      description:
        'Establecimiento de bases de datos e informes con definiciones claras, controles de calidad y lógica de KPI rastreable.',
      deliverables: [
        'Catálogo de KPI y métricas (definiciones, lógica de cálculo)',
        'Bases del modelo de datos (mapeo, responsabilidades, flujos)',
        'Controles de calidad de datos (completitud, duplicados, consistencia)',
        'Prototipos de cuadro de mando e informes (alcance limitado)',
        'Documentación para operaciones y desarrollo posterior',
        'Concepto de protección de datos y retención',
      ],
      boundaries: [
        'Sin interpretación de KPI como consultoría de gestión sin mandato separado',
        'Sin consolidación de datos sin base legal y propósito documentado',
        'Sin automatización productiva de ETL sin pruebas de aceptación',
        'Sin garantía de calidad de datos con fuentes originales defectuosas',
      ],
    },
    {
      titleKeywords: ['Cloud', 'Workplace Operations'],
      title: 'Operaciones de Nube y Entorno de Trabajo Moderno',
      description:
        'Soporte operativo para entornos Microsoft 365/Azure, incluyendo identidades, dispositivos, gobernanza y monitoreo.',
      deliverables: [
        'Procesos operativos para servicios en la nube (Incidencia/Solicitud/Cambio ITIL)',
        'Configuración de identidad y acceso (MFA, Acceso Condicional, PIM)',
        'Estándares de gestión de puntos finales (Políticas, estándares de dispositivos)',
        'Gobernanza de inquilinos y servicios (Convenciones de nombres, ciclo de vida)',
        'Bases de monitoreo y alertas (Integración en sistemas existentes)',
        'Documentación de entrega (Manuales de administración, límites de servicio)',
      ],
      boundaries: [
        'Sin operaciones 24/7 sin acuerdo explícito y definición de SLA',
        'Sin cambios en sistemas de producción sin proceso de cambio documentado',
        'Sin adopción de responsabilidad de proveedores/licencias sin mandato',
        'Sin disponibilidad 24/7 sin acuerdo de nivel de servicio dedicado',
      ],
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

          // Fallback array mapping for bullets
          const deliverablesList =
            matchedTranslation?.deliverables || service.deliverables?.map((d) => d.item) || []

          const boundariesList =
            matchedTranslation?.boundaries || service.boundaries?.map((b) => b.item) || []

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
