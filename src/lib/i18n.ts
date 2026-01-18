/**
 * i18n Configuration for SmartConnect CRM UG
 * Languages: DE (default), EN, FR
 * Procurement-grade translation quality
 */

export type Locale = 'de' | 'en' | 'fr';

export const defaultLocale: Locale = 'de';
export const locales: Locale[] = ['de', 'en', 'fr'];

export const localeNames: Record<Locale, string> = {
  de: 'DE',
  en: 'EN',
  fr: 'FR',
};

export interface Translation {
  // Navigation
  nav: {
    home: string;
    services: string;
    procurement: string;
    compliance: string;
    contact: string;
  };
  
  // Homepage
  home: {
    heroTitle: string;
    heroSubtitle: string;
    positioning: string;
    icpTitle: string;
    icp1Title: string;
    icp1Desc: string;
    icp2Title: string;
    icp2Desc: string;
    icp3Title: string;
    icp3Desc: string;
    servicesTitle: string;
    capabilitiesTitle: string;
    arbeitsweisetitle: string;
    arbeitsweisetitle1: string;
    arbeitsweiseDesc1: string;
    arbeitsweisetitle2: string;
    arbeitsweiseDesc2: string;
    arbeitsweisetitle3: string;
    arbeitsweiseDesc3: string;
  };
  
  // Services
  services: {
    title: string;
    subtitle: string;
    runTitle: string;
    changeTitle: string;
    advisoryTitle: string;
    deliverables: string;
    inputs: string;
    outputs: string;
    scopeExclusions: string;
    procurementAlignment: string;
  };
  
  // Procurement
  procurement: {
    title: string;
    subtitle: string;
    scopeTitle: string;
    deliverablesTitle: string;
    documentationTitle: string;
    exclusionsTitle: string;
    sectorsTitle: string;
    complianceTitle: string;
    bafaTitle: string;
    contactTitle: string;
  };
  
  // Compliance
  compliance: {
    title: string;
    subtitle: string;
    gdprTitle: string;
    securityTitle: string;
    governanceTitle: string;
    qualityTitle: string;
    rolesTitle: string;
    transparencyTitle: string;
    standardsTitle: string;
    validationTitle: string;
  };
  
  // Contact
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitButton: string;
    legalEntity: string;
    address: string;
    phone: string;
    email: string;
  };
  
  // Footer
  footer: {
    legalEntity: string;
    registerCourt: string;
    registerNumber: string;
    managingDirector: string;
    taxNumber: string;
    email: string;
    phone: string;
    impressum: string;
    privacy: string;
    complianceLink: string;
  };
  
  // Legal pages
  legal: {
    impressumTitle: string;
    privacyTitle: string;
    legalNotice: string;
    dataProtection: string;
  };
  
  // Common
  common: {
    readMore: string;
    learnMore: string;
    contactUs: string;
  };
}

export const translations: Record<Locale, Translation> = {
  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungskatalog',
      procurement: 'Procurement-Profil',
      compliance: 'Compliance',
      contact: 'Kontakt',
    },
    home: {
      heroTitle: 'SmartConnect CRM UG',
      heroSubtitle: 'B2B IT & Digital Solutions',
      positioning: 'B2B IT & Digital Solutions für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben. Fokus: strukturierte Umsetzung, nachvollziehbare Dokumentation und compliance-orientierte Arbeitsweise ohne Marketing-Übertreibungen.',
      icpTitle: 'Zielgruppen',
      icp1Title: 'Öffentliche Auftraggeber',
      icp1Desc: 'Bund, Länder, Kommunen und öffentliche Einrichtungen mit Anforderungen an Vergabekonformität, Nachweisführung und Datenschutz.',
      icp2Title: 'Regulierter Enterprise Sektor',
      icp2Desc: 'Unternehmen in regulierten Branchen (Finanz, Gesundheit, Energie) mit erhöhten Compliance- und Sicherheitsanforderungen.',
      icp3Title: 'Advisory- & Consulting-Kontexte',
      icp3Desc: 'Beratungshäuser und Systemintegratoren, die strukturierte Umsetzungspartner für Kundenprojekte suchen.',
      servicesTitle: 'Leistungsbereiche',
      capabilitiesTitle: 'Fähigkeiten',
      arbeitsweisetitle: 'Arbeitsweise',
      arbeitsweisetitle1: 'Procurement-tauglich',
      arbeitsweiseDesc1: 'Strukturierte Dokumentation, nachvollziehbare Liefergegenstände und Abgrenzungen für Vergabeverfahren.',
      arbeitsweisetitle2: 'Compliance-orientiert',
      arbeitsweiseDesc2: 'DSGVO-konform, Privacy-by-Design, Security-by-Design, Rollenprinzip und Least Privilege.',
      arbeitsweisetitle3: 'Hinweispflichten & Transparenz',
      arbeitsweiseDesc3: 'Keine unbestätigten Leistungsversprechen, keine erfundenen Referenzen, keine Marketing-Übertreibungen.',
    },
    services: {
      title: 'Leistungskatalog',
      subtitle: 'Strukturierte IT- und Digital-Lösungen für Unternehmen und öffentliche Auftraggeber',
      runTitle: 'RUN (Operations)',
      changeTitle: 'CHANGE (Integration)',
      advisoryTitle: 'ADVISORY (Security/Procurement)',
      deliverables: 'Liefergegenstände',
      inputs: 'Typische Inputs',
      outputs: 'Typische Outputs',
      scopeExclusions: 'Abgrenzung',
      procurementAlignment: 'Procurement-Ausrichtung',
    },
    procurement: {
      title: 'Procurement-Profil',
      subtitle: 'EU-Tender-Ausrichtung und Vergabekonformität',
      scopeTitle: 'Leistungsgegenstand',
      deliverablesTitle: 'Liefergegenstände',
      documentationTitle: 'Dokumentationsumfang',
      exclusionsTitle: 'Abgrenzung',
      sectorsTitle: 'Einsatzbereiche',
      complianceTitle: 'Compliance-Arbeitsweise',
      bafaTitle: 'Unternehmensphase & Beratungsbedarf',
      contactTitle: 'Kontakt für Vergabeverfahren',
    },
    compliance: {
      title: 'Compliance',
      subtitle: 'Datenschutz, Sicherheit und Governance',
      gdprTitle: 'Datenschutz & DSGVO',
      securityTitle: 'Informationssicherheit',
      governanceTitle: 'Corporate Governance',
      qualityTitle: 'Qualitätsmanagement',
      rolesTitle: 'Rollen & Zuständigkeiten',
      transparencyTitle: 'Transparenz & Hinweispflichten',
      standardsTitle: 'Standards & Frameworks',
      validationTitle: 'Procurement Validation',
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Anfrage senden',
      nameLabel: 'Name',
      emailLabel: 'E-Mail',
      messageLabel: 'Nachricht',
      submitButton: 'Anfrage senden',
      legalEntity: 'SmartConnect CRM UG (haftungsbeschränkt)',
      address: 'Otto-Braun-Str. 12, 40595 Düsseldorf, Deutschland',
      phone: '+49 211 87973999233',
      email: 'admin@smartclientcrm.com',
    },
    footer: {
      legalEntity: 'SmartConnect CRM UG (haftungsbeschränkt)',
      registerCourt: 'Registergericht: Amtsgericht Düsseldorf',
      registerNumber: 'HRB 110351',
      managingDirector: 'Geschäftsführung: Abubakar Bolarinwa Alimi',
      taxNumber: 'Steuernummer: 106/5725/5542',
      email: 'E-Mail: admin@smartclientcrm.com',
      phone: 'Telefon: +49 211 87973999233',
      impressum: 'Impressum',
      privacy: 'Datenschutz',
      complianceLink: 'Compliance',
    },
    legal: {
      impressumTitle: 'Impressum',
      privacyTitle: 'Datenschutzerklärung',
      legalNotice: 'Angaben gemäß § 5 TMG',
      dataProtection: 'Datenschutz gemäß DSGVO',
    },
    common: {
      readMore: 'Mehr erfahren',
      learnMore: 'Details',
      contactUs: 'Kontakt aufnehmen',
    },
  },
  
  en: {
    nav: {
      home: 'Home',
      services: 'Services Catalogue',
      procurement: 'Procurement Profile',
      compliance: 'Compliance',
      contact: 'Contact',
    },
    home: {
      heroTitle: 'SmartConnect CRM UG',
      heroSubtitle: 'B2B IT & Digital Solutions',
      positioning: 'B2B IT & Digital Solutions for enterprises, public contracting authorities, and EU tender-related projects. Focus: structured implementation, traceable documentation, and compliance-oriented approach without marketing exaggeration.',
      icpTitle: 'Target Groups',
      icp1Title: 'Public Contracting Authorities',
      icp1Desc: 'Federal, state, municipal, and public institutions with requirements for procurement compliance, evidence documentation, and data protection.',
      icp2Title: 'Regulated Enterprise Sector',
      icp2Desc: 'Companies in regulated industries (finance, healthcare, energy) with elevated compliance and security requirements.',
      icp3Title: 'Advisory & Consulting Contexts',
      icp3Desc: 'Consulting firms and system integrators seeking structured implementation partners for client projects.',
      servicesTitle: 'Service Areas',
      capabilitiesTitle: 'Capabilities',
      arbeitsweisetitle: 'Working Approach',
      arbeitsweisetitle1: 'Procurement-Ready',
      arbeitsweiseDesc1: 'Structured documentation, traceable deliverables, and scope exclusions for procurement procedures.',
      arbeitsweisetitle2: 'Compliance-Oriented',
      arbeitsweiseDesc2: 'GDPR-compliant, Privacy-by-Design, Security-by-Design, role-based principles, and Least Privilege.',
      arbeitsweisetitle3: 'Disclosure & Transparency',
      arbeitsweiseDesc3: 'No unverified performance claims, no invented references, no marketing exaggeration.',
    },
    services: {
      title: 'Services Catalogue',
      subtitle: 'Structured IT and digital solutions for enterprises and public contracting authorities',
      runTitle: 'RUN (Operations)',
      changeTitle: 'CHANGE (Integration)',
      advisoryTitle: 'ADVISORY (Security/Procurement)',
      deliverables: 'Deliverables',
      inputs: 'Typical Inputs',
      outputs: 'Typical Outputs',
      scopeExclusions: 'Scope Exclusions',
      procurementAlignment: 'Procurement Alignment',
    },
    procurement: {
      title: 'Procurement Profile',
      subtitle: 'EU Tender Alignment and Procurement Compliance',
      scopeTitle: 'Scope of Services',
      deliverablesTitle: 'Deliverables',
      documentationTitle: 'Documentation Scope',
      exclusionsTitle: 'Scope Exclusions',
      sectorsTitle: 'Application Areas',
      complianceTitle: 'Compliance Approach',
      bafaTitle: 'Company Phase & Consulting Needs',
      contactTitle: 'Contact for Procurement Procedures',
    },
    compliance: {
      title: 'Compliance',
      subtitle: 'Data Protection, Security, and Governance',
      gdprTitle: 'Data Protection & GDPR',
      securityTitle: 'Information Security',
      governanceTitle: 'Corporate Governance',
      qualityTitle: 'Quality Management',
      rolesTitle: 'Roles & Responsibilities',
      transparencyTitle: 'Transparency & Disclosure',
      standardsTitle: 'Standards & Frameworks',
      validationTitle: 'Procurement Validation',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Send Inquiry',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitButton: 'Send Inquiry',
      legalEntity: 'SmartConnect CRM UG (haftungsbeschränkt)',
      address: 'Otto-Braun-Str. 12, 40595 Düsseldorf, Germany',
      phone: '+49 211 87973999233',
      email: 'admin@smartclientcrm.com',
    },
    footer: {
      legalEntity: 'SmartConnect CRM UG (haftungsbeschränkt)',
      registerCourt: 'Commercial Register: Amtsgericht Düsseldorf',
      registerNumber: 'HRB 110351',
      managingDirector: 'Managing Director: Abubakar Bolarinwa Alimi',
      taxNumber: 'Tax Number: 106/5725/5542',
      email: 'Email: admin@smartclientcrm.com',
      phone: 'Phone: +49 211 87973999233',
      impressum: 'Legal Notice',
      privacy: 'Privacy Policy',
      complianceLink: 'Compliance',
    },
    legal: {
      impressumTitle: 'Legal Notice',
      privacyTitle: 'Privacy Policy',
      legalNotice: 'Information pursuant to § 5 TMG',
      dataProtection: 'Data Protection pursuant to GDPR',
    },
    common: {
      readMore: 'Read more',
      learnMore: 'Details',
      contactUs: 'Contact us',
    },
  },
  
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Catalogue des Services',
      procurement: 'Profil Procurement',
      compliance: 'Conformité',
      contact: 'Contact',
    },
    home: {
      heroTitle: 'SmartConnect CRM UG',
      heroSubtitle: 'Solutions IT & Digitales B2B',
      positioning: 'Solutions IT & digitales B2B pour entreprises, autorités contractantes publiques et projets liés aux appels d\'offres UE. Focus : mise en œuvre structurée, documentation traçable et approche orientée conformité sans exagération marketing.',
      icpTitle: 'Groupes Cibles',
      icp1Title: 'Autorités Contractantes Publiques',
      icp1Desc: 'Institutions fédérales, régionales, municipales et publiques avec exigences de conformité aux marchés publics, documentation probante et protection des données.',
      icp2Title: 'Secteur Entreprise Réglementé',
      icp2Desc: 'Entreprises dans des secteurs réglementés (finance, santé, énergie) avec exigences élevées de conformité et sécurité.',
      icp3Title: 'Contextes Conseil & Advisory',
      icp3Desc: 'Cabinets de conseil et intégrateurs système recherchant des partenaires de mise en œuvre structurée pour projets clients.',
      servicesTitle: 'Domaines de Services',
      capabilitiesTitle: 'Capacités',
      arbeitsweisetitle: 'Approche de Travail',
      arbeitsweisetitle1: 'Prêt pour Procurement',
      arbeitsweiseDesc1: 'Documentation structurée, livrables traçables et exclusions de périmètre pour procédures de passation.',
      arbeitsweisetitle2: 'Orienté Conformité',
      arbeitsweiseDesc2: 'Conforme RGPD, Privacy-by-Design, Security-by-Design, principe de rôles et moindre privilège.',
      arbeitsweisetitle3: 'Obligations de Divulgation & Transparence',
      arbeitsweiseDesc3: 'Pas de promesses de performance non vérifiées, pas de références inventées, pas d\'exagération marketing.',
    },
    services: {
      title: 'Catalogue des Services',
      subtitle: 'Solutions IT et digitales structurées pour entreprises et autorités contractantes publiques',
      runTitle: 'RUN (Opérations)',
      changeTitle: 'CHANGE (Intégration)',
      advisoryTitle: 'ADVISORY (Sécurité/Procurement)',
      deliverables: 'Livrables',
      inputs: 'Inputs Typiques',
      outputs: 'Outputs Typiques',
      scopeExclusions: 'Exclusions de Périmètre',
      procurementAlignment: 'Alignement Procurement',
    },
    procurement: {
      title: 'Profil Procurement',
      subtitle: 'Alignement Appels d\'Offres UE et Conformité Procurement',
      scopeTitle: 'Objet des Prestations',
      deliverablesTitle: 'Livrables',
      documentationTitle: 'Périmètre de Documentation',
      exclusionsTitle: 'Exclusions de Périmètre',
      sectorsTitle: 'Domaines d\'Application',
      complianceTitle: 'Approche Conformité',
      bafaTitle: 'Phase Entreprise & Besoins de Conseil',
      contactTitle: 'Contact pour Procédures de Passation',
    },
    compliance: {
      title: 'Conformité',
      subtitle: 'Protection des Données, Sécurité et Gouvernance',
      gdprTitle: 'Protection des Données & RGPD',
      securityTitle: 'Sécurité de l\'Information',
      governanceTitle: 'Gouvernance d\'Entreprise',
      qualityTitle: 'Gestion de la Qualité',
      rolesTitle: 'Rôles & Responsabilités',
      transparencyTitle: 'Transparence & Divulgation',
      standardsTitle: 'Standards & Frameworks',
      validationTitle: 'Validation Procurement',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Envoyer une Demande',
      nameLabel: 'Nom',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitButton: 'Envoyer la Demande',
      legalEntity: 'SmartConnect CRM UG (haftungsbeschränkt)',
      address: 'Otto-Braun-Str. 12, 40595 Düsseldorf, Allemagne',
      phone: '+49 211 87973999233',
      email: 'admin@smartclientcrm.com',
    },
    footer: {
      legalEntity: 'SmartConnect CRM UG (haftungsbeschränkt)',
      registerCourt: 'Registre du Commerce : Amtsgericht Düsseldorf',
      registerNumber: 'HRB 110351',
      managingDirector: 'Direction : Abubakar Bolarinwa Alimi',
      taxNumber: 'Numéro Fiscal : 106/5725/5542',
      email: 'Email : admin@smartclientcrm.com',
      phone: 'Téléphone : +49 211 87973999233',
      impressum: 'Mentions Légales',
      privacy: 'Politique de Confidentialité',
      complianceLink: 'Conformité',
    },
    legal: {
      impressumTitle: 'Mentions Légales',
      privacyTitle: 'Politique de Confidentialité',
      legalNotice: 'Informations conformément au § 5 TMG',
      dataProtection: 'Protection des données conformément au RGPD',
    },
    common: {
      readMore: 'En savoir plus',
      learnMore: 'Détails',
      contactUs: 'Nous contacter',
    },
  },
};

export function getTranslation(locale: Locale): Translation {
  return translations[locale] || translations[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
