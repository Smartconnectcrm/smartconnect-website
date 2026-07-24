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
  HU: [
    {
      titleKeywords: ['Delivery Support', 'Project Recovery'],
      title: 'Szállítási Támogatás és Projekt Helyreállítás',
      description:
        'Stabilizációs és átadás-orientált támogatás szállítási nyomás, nyitott pontok és tisztázatlan felelősségek esetén.',
      deliverables: [
        'Helyzetfelmérés és probléma-backlog (kockázat és hatás szerinti prioritás)',
        'Stabilizációs sprint (Quick wins, javítási terv)',
        'Tiszta átadás (RACI, Runbookok, nyitott kockázatok, következő lépések)',
        'Minőségbiztosítási és átvételi ellenőrzőlisták (kritériumok, igazolások)',
        'Kommunikációs és eszkalációs struktúra (Stakeholder térkép)',
        'Tanulságok dokumentációja (Lessons Learned)',
      ],
      boundaries: [
        'Nincs felelősségvállalás meglévő architektúrákért teljes transzparencia nélkül',
        'Nincs scope-bővítés dokumentált change-folyamat nélkül',
        'Nincs éles rendszer módosítás jóváhagyás és tesztelés nélkül',
        'Nincs garancia a sikerre tisztázatlan felelősségi körök esetén',
      ],
    },
    {
      titleKeywords: ['Data', 'Reporting Foundations'],
      title: 'Adat- és Jelentési Alapok',
      description:
        'Adat- és jelentési alapok kiépítése világos definíciókkal, adatminőség-ellenőrzéssel és nyomon követhető KPI-logikával.',
      deliverables: [
        'KPI- és mutatókatalógus (definíciók, számítási logika)',
        'Adatmodell alapok (feltérképezés, felelősségek, adatfolyamok)',
        'Adatminőség-ellenőrzések (teljesség, duplikációk, konzisztencia)',
        'Dashboard és riport prototípusok (korlátozott terjedelemmel)',
        'Dokumentáció az üzemeltetéshez és továbbfejlesztéshez',
        'Adatvédelmi és megőrzési koncepció',
      ],
      boundaries: [
        'KPI-értelmezés mint vezetői tanácsadás nem képezi a feladat részét külön megbízás nélkül',
        'Nincs adatösszevonás jogalap és dokumentált cél nélkül',
        'Nincs éles ETL/automatizálás átvételi teszt nélkül',
        'Nincs adatminőségi garancia hibás forrásadatok esetén',
      ],
    },
    {
      titleKeywords: ['Cloud', 'Workplace Operations'],
      title: 'Felhő és Modern Munkahelyi Üzemeltetés',
      description:
        'Üzemeltetési támogatás Microsoft 365/Azure környezetekhez, beleértve a személyazonosságokat, végpontokat és felügyeletet.',
      deliverables: [
        'Felhőszolgáltatások üzemeltetési folyamatai (ITIL logika szerint)',
        'Identitás- és hozzáférés-kezelés (MFA, Conditional Access, PIM)',
        'Végpontkezelési szabványok (Policy-k, eszközszabványok)',
        'Tenant és service governance (Névkonvenciók, életciklus)',
        'Monitoring és riasztási alapok (Integráció meglévő rendszerekbe)',
        'Átadási dokumentáció (Admin kézikönyv, üzemeltetési határok)',
      ],
      boundaries: [
        'Nincs 24/7 üzemeltetés kifejezett megállapodás és SLA nélkül',
        'Nincs változtatás éles rendszerekben dokumentált folyamat nélkül',
        'Nincs licenc- és szolgáltatói szerződések átvállalása külön mandátum nélkül',
        'Nincs garancia a Microsoft ütemterv-változásaira',
      ],
    },
  ],
  IT: [
    {
      titleKeywords: ['Delivery Support', 'Project Recovery'],
      title: 'Supporto alla Consegna e Recupero Progetti',
      description:
        'Supporto orientato alla stabilizzazione e al passaggio di consegne in condizioni di pressione, problemi aperti e responsabilità non chiarite.',
      deliverables: [
        'Analisi dello stato attuale e backlog dei problemi (priorità per rischio)',
        'Sprint di stabilizzazione (Quick win, piano di risoluzione)',
        'Consegna trasparente (RACI, Runbook, rischi aperti, prossimi passi)',
        'Checklist di controllo qualità e accettazione (criteri, evidenze)',
        'Struttura di comunicazione ed escalation (Mappa degli stakeholder)',
        'Documentazione delle lezioni apprese',
      ],
      boundaries: [
        'Nessuna responsabilità per architetture preesistenti senza piena trasparenza',
        'Nessun ampliamento dello scope senza processo di Change Control',
        'Nessuna modifica ai sistemi di produzione senza approvazione e test',
        'Nessuna garanzia di successo in presenza di responsabilità non chiare',
      ],
    },
    {
      titleKeywords: ['Data', 'Reporting Foundations'],
      title: 'Fondamenta di Dati e Reporting',
      description:
        'Creazione di basi di dati e reporting con definizioni chiare, controlli di qualità dei dati e logica KPI tracciabile.',
      deliverables: [
        'Catalogo KPI e metriche (definizioni, logica di calcolo)',
        'Basi del modello dati (mappatura, responsabilità, flussi dati)',
        'Controlli di qualità dei dati (completezza, duplicati, coerenza)',
        'Prototipi di dashboard e reportistica (scope limitato)',
        'Documentazione per la gestione e lo sviluppo futuro',
        'Concetto di protezione e conservazione dei dati',
      ],
      boundaries: [
        'Interpretazione dei KPI come consulenza direzionale esclusa senza mandato separato',
        'Nessun consolidamento dati senza base giuridica e scopo documentato',
        'Nessuna automazione ETL in produzione senza test di accettazione',
        'Nessuna garanzia di qualità dei dati in presenza di sorgenti difettose',
      ],
    },
    {
      titleKeywords: ['Cloud', 'Workplace Operations'],
      title: 'Operazioni Cloud e Workplace Moderno',
      description:
        'Supporto operativo per ambienti orientati a Microsoft 365/Azure tra cui identità, endpoint, governance e monitoraggio.',
      deliverables: [
        'Processi operativi per servizi Cloud (logica Incident/Request/Change ITIL)',
        'Setup di identità e accessi (MFA, Conditional Access, PIM)',
        'Standard di gestione endpoint (Policy, standard di dispositivi)',
        'Governance Tenant e Service (Convenzioni di denominazione, lifecycle)',
        'Basi di monitoraggio e alerting (Integrazione nei sistemi esistenti)',
        'Documentazione di consegna (Manuale Admin, limiti di servizio)',
      ],
      boundaries: [
        'Nessun servizio 24/7 senza accordo esplicito e definizione SLA',
        'Nessuna modifica ai sistemi di produzione senza Change Process documentato',
        'Nessuna presa in carico di contratti con provider senza mandato separato',
        'Nessuna garanzia per modifiche alla roadmap di Microsoft',
      ],
    },
  ],
  FR: [
    {
      titleKeywords: ['Delivery Support', 'Project Recovery'],
      title: 'Support de Livraison & Redressement de Projet',
      description:
        'Accompagnement axé sur la stabilisation et le transfert sous pression de livraison, points ouverts et responsabilités non clarifiées.',
      deliverables: [
        'Analyse de l’état actuel et backlog de problèmes (priorisation par risque)',
        'Sprint de stabilisation (Quick wins, plan de résolution)',
        'Transfert propre (RACI, Runbooks, risques ouverts, étapes suivantes)',
        'Check-lists de contrôle qualité et de recette (critères, preuves)',
        'Structure de communication et d’escalade (Cartographie des parties prenantes)',
        'Documentation des retex (Lessons Learned)',
      ],
      boundaries: [
        'Pas de responsabilité pour les architectures existantes sans transparence totale',
        'Pas d’extension de périmètre sans processus de gestion des modifications',
        'Pas de modification des systèmes de production sans validation et test',
        'Pas de garantie de succès en cas de responsabilités floues',
      ],
    },
    {
      titleKeywords: ['Data', 'Reporting Foundations'],
      title: 'Bases de Données & Reporting',
      description:
        'Mise en place de bases de données et de reporting avec des définitions claires, des contrôles de qualité et une logique KPI traçable.',
      deliverables: [
        'Catalogue de KPI et de métriques (définitions, logique de calcul)',
        'Bases du modèle de données (cartographie, responsabilités, flux)',
        'Contrôles de qualité des données (exhaustivité, doublons, cohérence)',
        'Prototypage de tableaux de bord et de rapports (périmètre limité)',
        'Documentation pour l’exploitation et le développement futur',
        'Concept de protection et de conservation des données',
      ],
      boundaries: [
        'Interprétation des KPI en tant que conseil de direction exclue sans mandat séparé',
        'Pas de consolidation de données sans base légale et objectif documenté',
        'Pas d’automatisation ETL en production sans tests de recette',
        'Pas de garantie de qualité des données en cas de sources défaillantes',
      ],
    },
    {
      titleKeywords: ['Cloud', 'Workplace Operations'],
      title: 'Opérations Cloud & Workplace Moderne',
      description:
        'Support opérationnel pour les environnements Microsoft 365/Azure, y compris identités, terminaux, gouvernance et surveillance.',
      deliverables: [
        'Processus opérationnels pour les services Cloud (logique ITIL)',
        'Configuration des identités et accès (MFA, Conditional Access, PIM)',
        'Normes de gestion des terminaux (Stratégies, standards matériels)',
        'Gouvernance des tenants et services (Conventions de nommage, cycle de vie)',
        'Bases de surveillance et d’alerte (Intégration aux systèmes existants)',
        'Documentation de transfert (Manuel administrateur, limites de service)',
      ],
      boundaries: [
        'Pas d’exploitation 24/7 sans accord explicite et définition de SLA',
        'Pas de modification des systèmes de production sans processus de changement documenté',
        'Pas de reprise de contrats fournisseurs/licences sans mandat séparé',
        'Pas de garantie concernant les modifications de la feuille de route Microsoft',
      ],
    },
  ],
  EN: [
    {
      titleKeywords: ['Delivery Support', 'Project Recovery'],
      title: 'Delivery Support & Project Recovery',
      description:
        'Stabilization and handover-oriented support under delivery pressure, open issues, and unresolved responsibilities.',
      deliverables: [
        'Current state assessment & issue backlog (risk & impact prioritization)',
        'Stabilization sprint (containment, quick wins, fix plan)',
        'Clean handover (RACI, runbooks, open risks, next steps)',
        'QA and acceptance checklists (criteria, verification)',
        'Communication & escalation framework (stakeholder map)',
        'Lessons learned documentation',
      ],
      boundaries: [
        'No liability for legacy architectures without full transparency',
        'No scope expansion without change control process and prioritization',
        'No production changes without sign-off and documented testing',
        'No guarantee of project success under unclear stakeholder roles',
      ],
    },
    {
      titleKeywords: ['Data', 'Reporting Foundations'],
      title: 'Data & Reporting Foundations',
      description:
        'Establishment of data and reporting foundations with clear definitions, data quality checks, and traceable KPI logic.',
      deliverables: [
        'KPI & metric catalog (definitions, calculation logic)',
        'Data model fundamentals (mapping, responsibilities, data flows)',
        'Data quality checks (completeness, duplicates, consistency)',
        'Dashboard & report prototypes (scope-limited, testable)',
        'Documentation for operations and future maintenance',
        'Data privacy & retention concept',
      ],
      boundaries: [
        'No KPI interpretation as management consulting without dedicated mandate',
        'No data consolidation without documented legal basis & purpose',
        'No production ETL automation without acceptance testing',
        'No data quality guarantees with faulty source data systems',
      ],
    },
    {
      titleKeywords: ['Cloud', 'Workplace Operations'],
      title: 'Cloud & Modern Workplace Operations',
      description:
        'Operational support for Microsoft 365/Azure-oriented environments including identities, endpoints, governance, and monitoring.',
      deliverables: [
        'Operational processes for Cloud Services (ITIL-oriented Incident/Request/Change)',
        'Identity & Access setup (MFA, Conditional Access, PIM)',
        'Endpoint management standards (Policy sets, device standards)',
        'Tenant & service governance (Naming conventions, lifecycle)',
        'Monitoring & alerting foundations (Integration into existing systems)',
        'Handover documentation (Admin handbook, operational boundaries)',
      ],
      boundaries: [
        'No 24/7 operations without explicit SLA agreement',
        'No production system changes without documented Change Process',
        'No vendor/license contract takeover without separate mandate',
        'No guarantee for Microsoft roadmap shifts',
      ],
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
