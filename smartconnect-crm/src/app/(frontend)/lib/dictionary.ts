// src/lib/translations.ts

export const pageTranslations: Record<string, Record<string, string>> = {
  DE: {
    heroTitle: 'Leistungskatalog',
    heroSub:
      'Strukturierte Leistungsbausteine mit klarer Abgrenzung, dokumentierter Übergabe und compliance-orientierter Umsetzung.',
    deliverables: '✓ Deliverables',
    boundaries: '⊘ Abgrenzung',
    procurementTitle: 'Procurement-Profil',
    contactTitle: 'Kontakt & Anfragen',
  },
  EN: {
    heroTitle: 'Service Catalog',
    heroSub:
      'Structured service modules with clear boundaries, documented handovers, and compliance-oriented execution.',
    deliverables: '✓ Deliverables',
    boundaries: '⊘ Out of Scope',
    procurementTitle: 'Procurement Profile',
    contactTitle: 'Contact & Inquiries',
  },
  HU: {
    heroTitle: 'Szolgáltatási Katalógus',
    heroSub:
      'Strukturált szolgáltatási modulok világos határokkal, dokumentált átadással és megfelelőség-orientált megvalósítással.',
    deliverables: '✓ A Csomag Tartalma',
    boundaries: '⊘ Kizárások',
    procurementTitle: 'Beszerzési Profil',
    contactTitle: 'Kapcsolat és Ajánlatkérés',
  },
  FR: {
    heroTitle: 'Catalogue de Services',
    heroSub:
      'Modules de services structurés avec délimitation claire, transfert documenté et exécution orientée conformité.',
    deliverables: '✓ Livrables',
    boundaries: '⊘ Périmètre Exclu',
    procurementTitle: 'Profil d’Achat',
    contactTitle: 'Contact et Demandes',
  },
  ES: {
    heroTitle: 'Catálogo de Servicios',
    heroSub:
      'Módulos de servicio estructurados con clara delimitación, entrega documentada y ejecución orientada al cumplimiento.',
    deliverables: '✓ Entregables',
    boundaries: '⊘ Fuera de Alcance',
    procurementTitle: 'Perfil de Contratación',
    contactTitle: 'Contacto y Consultas',
  },
  IT: {
    heroTitle: 'Catalogo Servizi',
    heroSub:
      'Moduli di servizio strutturati con chiara delimitazione, consegna documentata ed esecuzione orientata alla conformità.',
    deliverables: '✓ Deliverable',
    boundaries: '⊘ Esclusioni',
    procurementTitle: 'Profilo Procurement',
    contactTitle: 'Contatti e Richieste',
  },
  NL: {
    heroTitle: 'Dienstencatalogus',
    heroSub:
      'Gestructureerde servicemodules met heldere afbakening, gedocumenteerde overdracht en op naleving gerichte uitvoering.',
    deliverables: '✓ Opleveringen',
    boundaries: '⊘ Buiten Scope',
    procurementTitle: 'Inkoopprofiel',
    contactTitle: 'Contact & Aanvragen',
  },
  PL: {
    heroTitle: 'Katalog Usług',
    heroSub:
      'Strukturyzowane moduły usługowe z jasnym rozgraniczeniem, udokumentowanym przekazaniem i realizacją zorientowaną na zgodność.',
    deliverables: '✓ Zakres Usługi',
    boundaries: '⊘ Wyłączenia',
    procurementTitle: 'Profil Zakupowy',
    contactTitle: 'Kontakt i Zapytania',
  },
}

export const serviceTranslations: Record<
  string,
  Record<string, { title: string; description: string; deliverables: string[] }>
> = {
  IT: {
    'Delivery Support & Project Recovery': {
      title: 'Supporto alla Consegna e Recupero Progetti',
      description:
        'Supporto orientato alla stabilizzazione e al passaggio di consegne in situazioni di pressione sui tempi, punti aperti e responsabilità non definite.',
      deliverables: [
        'Valutazione dello stato attuale e backlog dei problemi (prioritizzazione per rischio e impatto)',
        'Sprint di stabilizzazione (contenimento, vittorie rapide, piano di risoluzione)',
        'Passaggio di consegne pulito (RACI, Runbook, rischi aperti, passaggi successivi)',
        'Checklist di garanzia della qualità e collaudo (criteri, verifiche, elementi residui)',
        'Struttura di comunicazione ed escalation (formato di stato, mappa degli stakeholder)',
        'Documentazione delle lezioni apprese',
      ],
    },
    'Data & Reporting Foundations': {
      title: 'Fondamenta Dati e Reportistica',
      description:
        'Creazione delle basi per dati e reportistica con definizioni chiare, controlli di qualità dei dati e logica KPI tracciabile.',
      deliverables: [
        'Catalogo KPI e metriche (definizioni, logica di calcolo, fonti dati)',
        'Fondamenta del modello dati (mappatura, responsabilità, flussi dati)',
        'Controlli di qualità dei dati (completezza, duplicati, plausibilità, coerenza)',
        'Prototipi di dashboard e report (ambito limitato, iterativi, verificabili)',
        "Documentazione per l'operatività e lo sviluppo ulteriore (dizionario dati, logica di modifica)",
        'Concetto di protezione e conservazione dei dati',
      ],
    },
    'Cloud & Modern Workplace Operations': {
      title: 'Operatività Cloud e Modern Workplace',
      description:
        'Supporto operativo per ambienti Microsoft 365/Azure, inclusi identità, dispositivi, governance e monitoraggio.',
      deliverables: [
        'Processi operativi per servizi cloud (incidenti/richieste/modifiche secondo logica ITIL)',
        'Configurazione identità e accessi (MFA, accesso condizionale, ruoli, PIM)',
        'Standard di gestione degli endpoint (set di policy, standard dispositivi, policy di conformità)',
        'Governance tenant e servizi (convenzioni di denominazione, ciclo di vita, autorizzazioni)',
        'Fondamenta di monitoraggio e avvisi (integrazione nei sistemi esistenti)',
        'Documentazione di consegna (manuale di amministrazione, runbook, limiti operativi)',
      ],
    },
  },
  FR: {
    'Delivery Support & Project Recovery': {
      title: 'Support à la Livraison et Redressement de Projet',
      description:
        'Assistance axée sur la stabilisation et le transfert sous pression de livraison, points ouverts et responsabilités non définies.',
      deliverables: [
        "Évaluation de l'état actuel et backlog des problèmes (priorisé par risque et impact)",
        'Sprint de stabilisation (confinement, victoires rapides, plan de résolution)',
        'Passage de relais propre (RACI, Runbooks, risques ouverts, étapes suivantes)',
        "Check-lists d'assurance qualité et de recette (critères, preuves, points résiduels)",
        "Structure de communication et d'escalade (format d'état, carte des parties prenantes)",
        'Documentation des leçons apprises',
      ],
    },
    'Data & Reporting Foundations': {
      title: 'Fondations Données et Reporting',
      description:
        'Mise en place de bases de données et de reporting avec des définitions claires, des contrôles de qualité et une logique KPI traçable.',
      deliverables: [
        'Catalogue de KPI et métriques (définitions, logique de calcul, sources de données)',
        'Fondations du modèle de données (cartographie, responsabilités, flux de données)',
        'Contrôles de qualité des données (exhaustivité, doublons, plausibilité, cohérence)',
        'Prototypes de tableaux de bord et rapports (périmètre limité, itératifs, vérifiables)',
        "Documentation pour l'exploitation et les évolutions (dictionnaire de données, logique de changement)",
        'Concept de protection et de conservation des données',
      ],
    },
    'Cloud & Modern Workplace Operations': {
      title: 'Opérations Cloud et Modern Workplace',
      description:
        'Support opérationnel pour les environnements Microsoft 365/Azure, incluant identités, postes de travail, gouvernance et supervision.',
      deliverables: [
        'Processus opérationnels pour les services Cloud (Incidents/Demandes/Changements selon la logique ITIL)',
        'Configuration des identités et des accès (MFA, accès conditionnel, modèles de rôles, PIM)',
        "Normes de gestion des points de terminaison (jeu de politiques, normes d'équipements, conformité)",
        'Gouvernance du tenant et des services (conventions de nommage, cycle de vie, autorisations)',
        "Bases de supervision et d'alerte (intégration dans les systèmes existants)",
        "Documentation de transfert (manuel d'administration, runbooks, limites opérationnelles)",
      ],
    },
  },
  PL: {
    'Delivery Support & Project Recovery': {
      title: 'Wsparcie Realizacji i Naprawa Projektów',
      description:
        'Wsparcie ukierunkowane na stabilizację i przekazanie zadań pod presją czasu, przy otwartych kwestiach i niejasnych odpowiedzialnościach.',
      deliverables: [
        'Ocena stanu faktycznego i backlog problemów (priorytetyzacja według ryzyka i wpływu)',
        'Sprint stabilizacyjny (opanowanie sytuacji, szybkie wygrane, plan naprawczy)',
        'Czyste przekazanie (RACI, Runbooki, otwarte ryzyka, kolejne kroki)',
        'Listy kontrolne zapewnienia jakości i odbioru (kryteria, dowody, punkty pozostałe)',
        'Struktura komunikacji i eskalacji (format statusu, mapa interesariuszy)',
        'Dokumentacja wyciągniętych wniosków (Lessons Learned)',
      ],
    },
    'Data & Reporting Foundations': {
      title: 'Fundamenty Danych i Raportowania',
      description:
        'Budowa fundamentów danych i raportowania z jasnymi definicjami, kontrolą jakości danych i przejrzystą logiką KPI.',
      deliverables: [
        'Katalog KPI i metryk (definicje, logika obliczeń, źródła danych)',
        'Podstawy modelu danych (mapowanie, odpowiedzialności, przepływy danych)',
        'Kontrole jakości danych (kompletność, duplikaty, wiarygodność, spójność)',
        'Prototypy pulpitów nawigacyjnych i raportów (ograniczony zakres, iteracyjne, weryfikowalne)',
        'Dokumentacja operacyjna i rozwojowa (słownik danych, logika zmian)',
        'Koncepcja ochrony danych i ich przechowywania',
      ],
    },
    'Cloud & Modern Workplace Operations': {
      title: 'Operacje Chmurowe i Nowoczesne Miejsce Pracy',
      description:
        'Wsparcie operacyjne dla środowisk Microsoft 365/Azure, w tym tożsamości, urządzeń końcowych, zarządzania i monitoringu.',
      deliverables: [
        'Procesy operacyjne dla usług chmurowych (incydenty/wnioski/zmiany zgodnie z logiką ITIL)',
        'Konfiguracja tożsamości i dostępu (MFA, dostęp warunkowy, modele ról, PIM)',
        'Standardy zarządzania urządzeniami końcowymi (zbiór polityk, standardy urządzeń, zgodność)',
        'Gubernancja dzierżawy i usług (konwencje nazewnictwa, cykl życia, uprawnienia)',
        'Podstawy monitorowania i alertów (integracja z istniejącymi systemami)',
        'Dokumentacja przekazania (podręcznik administratora, runbooki, granice operacyjne)',
      ],
    },
  },
  NL: {
    'Delivery Support & Project Recovery': {
      title: 'Opleverondersteuning & Projectherstel',
      description:
        'Ondersteuning gericht op stabilisatie en overdracht onder opleverdruk, openstaande punten en onduidelijke verantwoordelijkheden.',
      deliverables: [
        'Nulmeting en probleem-backlog (geprioriteerd op risico en impact)',
        'Stabilisatiesprint (beheersing, snelle winst, herstelplan)',
        "Schone overdracht (RACI, Runbooks, openstaande risico's, vervolgstappen)",
        'Kwaliteitsborging en acceptatiechecklists (criteria, bewijzen, restpunten)',
        'Communicatie- en escalatiestructuur (statusformaat, stakeholderkaart)',
        'Documentatie van geleerde lessen',
      ],
    },
    'Data & Reporting Foundations': {
      title: 'Data- & Rapportagefundamenten',
      description:
        'Opbouw van data- en rapportagebasis met duidelijke definities, datakwaliteitscontroles en traceerbare KPI-logica.',
      deliverables: [
        'KPI- en metricscatalogus (definities, berekeningslogica, databronnen)',
        'Datamodel-fundamenten (mapping, verantwoordelijkheden, datastromen)',
        'Datakwaliteitscontroles (volledigheid, duplicaten, plausibiliteit, consistentie)',
        'Dashboard- en rapportprototypes (beperkte scope, iteratief, verifieerbaar)',
        'Documentatie voor beheer en doorontwikkeling (datawoordenboek, wijzigingslogica)',
        'Databeschermings- en bewaarconcept',
      ],
    },
    'Cloud & Modern Workplace Operations': {
      title: 'Cloud & Modern Workplace Operations',
      description:
        'Operationele ondersteuning voor Microsoft 365/Azure-omgevingen inclusief identiteiten, endpoints, governance en monitoring.',
      deliverables: [
        'Operationele processen voor cloudservices (incident/request/change volgens ITIL-logica)',
        'Identiteits- en toegangsinrichting (MFA, conditional access, rolmodellen, PIM)',
        'Endpoint management-standaarden (beleidsset, apparaatstandaarden, compliancebeleid)',
        'Tenant- en servicegovernance (naamconventies, levenscyclus, rechten)',
        'Monitoring- en alertfundamenten (integratie in bestaande systemen)',
        'Overdrachtsdocumentatie (beheerdershandboek, runbooks, operationele grenzen)',
      ],
    },
  },
  ES: {
    'Delivery Support & Project Recovery': {
      title: 'Soporte de Entrega y Recuperación de Proyectos',
      description:
        'Asistencia orientada a la estabilización y transferencia bajo presión de entrega, puntos pendientes y responsabilidades no resueltas.',
      deliverables: [
        'Evaluación del estado actual y backlog de problemas (priorizado por riesgo e impacto)',
        'Sprint de estabilización (contención, victorias rápidas, plan de solución)',
        'Transferencia limpia (RACI, Runbooks, riesgos abiertos, siguientes pasos)',
        'Checklists de control de calidad y aceptación (criterios, pruebas, puntos pendientes)',
        'Estructura de comunicación y escalamiento (formato de estado, mapa de partes interesadas)',
        'Documentación de lecciones aprendidas',
      ],
    },
    'Data & Reporting Foundations': {
      title: 'Fundamentos de Datos e Informes',
      description:
        'Construcción de bases de datos e informes con definiciones claras, verificaciones de calidad de datos y lógica KPI trazable.',
      deliverables: [
        'Catálogo de KPIs y métricas (definiciones, lógica de cálculo, fuentes de datos)',
        'Fundamentos del modelo de datos (mapeo, responsabilidades, flujos de datos)',
        'Controles de calidad de datos (completitud, duplicados, plausibilidad, consistencia)',
        'Prototipos de paneles e informes (alcance limitado, iterativos, verificables)',
        'Documentación para operación y desarrollo posterior (diccionario de datos, lógica de cambios)',
        'Concepto de protección de datos y retención',
      ],
    },
    'Cloud & Modern Workplace Operations': {
      title: 'Operaciones de Nube y Puesto de Trabajo Moderno',
      description:
        'Soporte operativo para entornos orientados a Microsoft 365/Azure, incluyendo identidades, dispositivos finales, gobernanza y monitoreo.',
      deliverables: [
        'Procesos operativos para servicios en la nube (Incidencias/Solicitudes/Cambios según lógica ITIL)',
        'Configuración de identidad y acceso (MFA, acceso condicional, roles, PIM)',
        'Estándares de gestión de endpoints (conjunto de directivas, estándares de dispositivos, políticas de cumplimiento)',
        'Gobernanza de inquilinos y servicios (convenciones de nomenclatura, ciclo de vida, permisos)',
        'Fundamentos de monitoreo y alertas (integración en sistemas existentes)',
        'Documentación de entrega (manual de administración, runbooks, límites operativos)',
      ],
    },
  },
  HU: {
    'Delivery Support & Project Recovery': {
      title: 'Szállítási Támogatás és Projekt Helyreállítás',
      description:
        'Stabilizációs és átadás-központú támogatás szállítási nyomás, nyitott pontok és tisztázatlan felelősségek esetén.',
      deliverables: [
        'Helyzetfelmérés és probléma-backlog (kockázat és hatás szerinti priorizálás)',
        'Stabilizációs sprint (korlátozás, gyors győzelmek, javítási terv)',
        'Tiszta átadás (RACI, Runbookok, nyitott kockázatok, következő lépések)',
        'Minőségbiztosítási és átvételi ellenőrzőlisták (kritériumok, igazolások, maradványpontok)',
        'Kommunikációs és eszkalációs struktúra (státuszformátum, érdekelt felek térképe)',
        'Tanulságok dokumentációja',
      ],
    },
    'Data & Reporting Foundations': {
      title: 'Adat- és Jelentéskészítési Alapok',
      description:
        'Adat- és jelentéskészítési alapok kiépítése világos definíciókkal, adatminőség-ellenőrzéssel és nyomon követhető KPI-logikával.',
      deliverables: [
        'KPI- és mátrix-katalógus (definíciók, számítási logika, adatforrások)',
        'Adatmodell-alapok (feltérképezés, felelősségek, adatfolyamok)',
        'Adatminőség-ellenőrzések (teljesség, duplikációk, hihetőség, konzisztencia)',
        'Műszerfal- és jelentés-prototípusok (korlátozott terjedelmű, iteratív, ellenőrizhető)',
        'Üzemeltetési és továbbfejlesztési dokumentáció (adatszótár, módosítási logika)',
        'Adatvédelmi és megőrzési koncepció',
      ],
    },
    'Cloud & Modern Workplace Operations': {
      title: 'Felhő és Modern Munkahelyi Üzemeltetés',
      description:
        'Operatív támogatás Microsoft 365/Azure környezetekhez, beleértve az identitásokat, végpontokat, irányítást és monitorozást.',
      deliverables: [
        'Üzemeltetési folyamatok felhőszolgáltatásokhoz (incidens/kérés/módosítás ITIL-logika szerint)',
        'Identitás- és hozzáférés-beállítás (MFA, feltételes hozzáférés, szerepkörök, PIM)',
        'Végpontkezelési szabványok (szabálykészlet, eszközszabványok, megfelelőségi irányelvek)',
        'Bérlői és szolgáltatásirányítás (névkonvenciók, életciklus, jogosultságok)',
        'Monitorozási és riasztási alapok (integráció a meglévő rendszerekbe)',
        'Átadási dokumentáció (adminisztrációs kézikönyv, runbookok, üzemeltetési határok)',
      ],
    },
  },
  EN: {
    'Delivery Support & Project Recovery': {
      title: 'Delivery Support & Project Recovery',
      description:
        'Stabilization and handover-oriented support under delivery pressure, open issues, and unresolved responsibilities.',
      deliverables: [
        'As-is assessment & problem backlog (prioritized by risk and impact)',
        'Stabilization sprint (containment, quick wins, fix plan)',
        'Clean handover (RACI, runbooks, open risks, next steps)',
        'QA and acceptance checklists (criteria, proofs, residual items)',
        'Communication and escalation structure (status format, stakeholder map)',
        'Lessons learned documentation',
      ],
    },
    'Data & Reporting Foundations': {
      title: 'Data & Reporting Foundations',
      description:
        'Establishment of data and reporting foundations with clear definitions, data quality checks, and traceable KPI logic.',
      deliverables: [
        'KPI and metrics catalog (definitions, calculation logic, data sources)',
        'Data model foundations (mapping, responsibilities, data flows)',
        'Data quality checks (completeness, duplicates, plausibility, consistency)',
        'Dashboard and report prototypes (scope-limited, iterative, verifiable)',
        'Documentation for operation and further development (data dictionary, change logic)',
        'Data protection and retention concept',
      ],
    },
    'Cloud & Modern Workplace Operations': {
      title: 'Cloud & Modern Workplace Operations',
      description:
        'Operational support for Microsoft 365/Azure environments including identities, endpoints, governance, and monitoring.',
      deliverables: [
        'Operational processes for cloud services (incident/request/change according to ITIL logic)',
        'Identity and access setup (MFA, conditional access, role models, PIM)',
        'Endpoint management standards (policy set, device standards, compliance policies)',
        'Tenant and service governance (naming conventions, lifecycle, permissions)',
        'Monitoring and alerting foundations (integration into existing systems)',
        'Handover documentation (admin handbook, runbooks, operational boundaries)',
      ],
    },
  },
}
