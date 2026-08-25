export interface UILabelSet {
  title: string
  subtitle: string
  deliverables: string
  boundaries: string
}

export const uiLabels: Record<string, UILabelSet> = {
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
