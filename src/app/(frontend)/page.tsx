import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ServiceCatalogClient from './ServiceCatalogClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

type Props = {
  searchParams: Promise<{ lang?: string }>
}

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

      {/* Interactive Catalog Component */}
      <ServiceCatalogClient services={services as any} labels={labels} />
    </main>
  )
}
