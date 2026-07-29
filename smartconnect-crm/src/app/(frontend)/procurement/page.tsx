'use client'

import React, { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export const dynamic = 'force-dynamic'

const procurementTranslations: Record<string, Record<string, string>> = {
  DE: {
    badge: '🇪🇺 Public Sector Compliance Profile',
    title: 'Procurement-Profil',
    subtitle:
      'Qualifikationsprofil, Standards und Compliance-Richtlinien für die Beschaffung im öffentlichen Sektor und in Enterprise-Umgebungen.',
    evbTitle: '✓ EVB-IT Standard',
    evbDesc:
      'Vollständige Konformität mit Ergänzenden Vertragsbedingungen für die Beschaffung von IT-Leistungen (EVB-IT Dienstleistung / Erstellung).',
    gdprTitle: '🔒 DSGVO & Compliance',
    gdprDesc:
      'Dokumentierte AVV-Muster, Auftragsverarbeitung gemäß Art. 28 DSGVO, Sitz & Datenverarbeitung exklusiv in der Europäischen Union.',
    securityTitle: '🛡️ Information Security',
    securityDesc:
      'ISO 27001-orientierte Betriebsstrukturen, striktes Rollen- & Rechtemodell, MFA-Zwang für administrative Zugriffe.',
    tenderTitle: 'RFP & Ausschreibung Einreichen',
    tenderDesc:
      'Senden Sie Ihre Ausschreibungsunterlagen oder unverbindliche Voranfragen direkt an unser Procurement-Spezialistenteam.',
    tenderBtn: 'Ausschreibung Übermitteln →',
  },
  EN: {
    badge: '🇪🇺 Public Sector Compliance Profile',
    title: 'Procurement Profile',
    subtitle:
      'Qualification profile, standards, and compliance guidelines for public sector and enterprise procurement.',
    evbTitle: '✓ EVB-IT Standard',
    evbDesc:
      'Full compliance with Supplementary Contract Terms for Procurement of IT Services (EVB-IT Services / Creation).',
    gdprTitle: '🔒 GDPR & Compliance',
    gdprDesc:
      'Documented DPA templates, data processing pursuant to Art. 28 GDPR, headquarters & data processing exclusively within the EU.',
    securityTitle: '🛡️ Information Security',
    securityDesc:
      'ISO 27001-oriented operational structures, strict role & permission models, mandatory MFA for administrative access.',
    tenderTitle: 'Submit RFP & Tender',
    tenderDesc:
      'Submit your tender documents or non-binding inquiries directly to our procurement specialist team.',
    tenderBtn: 'Submit Tender →',
  },
  HU: {
    badge: '🇪🇺 Közszféra Megfelelőségi Profil',
    title: 'Beszerzési Profil',
    subtitle:
      'Képesítési profil, szabványok és megfelelőségi irányelvek a közszféra és a vállalati beszerzések számára.',
    evbTitle: '✓ EVB-IT Szabvány',
    evbDesc:
      'Teljes körű megfelelőség az IT-szolgáltatások beszerzésére vonatkozó kiegészítő szerződési feltételeknek (EVB-IT).',
    gdprTitle: '🔒 GDPR és Megfelelőség',
    gdprDesc:
      'Dokumentált adatfeldolgozási sablonok, GDPR 28. cikk szerinti feldolgozás, székhely és adatfeldolgozás kizárólag az EU-ban.',
    securityTitle: '🛡️ Információbiztonság',
    securityDesc:
      'ISO 27001 orientált működési struktúra, szigorú szerep- és jogosultságkezelés, kötelező MFA az adminisztratív hozzáférésekhez.',
    tenderTitle: 'RFP és Tender Benyújtása',
    tenderDesc:
      'Küldje el tenderdokumentációját vagy kötelezettségmentes megkeresését közvetlenül beszerzési szakértő csapatunknak.',
    tenderBtn: 'Tender Benyújtása →',
  },
  FR: {
    badge: '🇪🇺 Profil de Conformité Secteur Public',
    title: 'Profil d’Achat',
    subtitle:
      'Profil de qualification, normes et directives de conformité pour les marchés publics et les achats en entreprise.',
    evbTitle: '✓ Norme EVB-IT',
    evbDesc:
      'Conformité totale avec les conditions contractuelles complémentaires pour la fourniture de prestations IT (EVB-IT).',
    gdprTitle: '🔒 RGPD & Conformité',
    gdprDesc:
      'Modèles de sous-traitance documentés, traitement des données selon l’Art. 28 RGPD, siège et traitement situés exclusivement dans l’UE.',
    securityTitle: '🛡️ Sécurité de l’Information',
    securityDesc:
      'Structures opérationnelles axées sur ISO 27001, modèle strict de rôles et privilèges, MFA obligatoire pour l’administration.',
    tenderTitle: 'Soumettre un RFP & Appel d’Offres',
    tenderDesc:
      'Transmettez vos documents d’appel d’offres ou demandes d’informations directement à notre équipe spécialisée en achats.',
    tenderBtn: 'Soumettre l’Appel d’Offres →',
  },
  ES: {
    badge: '🇪🇺 Perfil de Cumplimiento Sector Público',
    title: 'Perfil de Contratación',
    subtitle:
      'Perfil de cualificación, estándares y directrices de cumplimiento para la contratación pública y empresarial.',
    evbTitle: '✓ Estándar EVB-IT',
    evbDesc:
      'Cumplimiento total de las Condiciones Contractuales Complementarias para la Contratación de Servicios TI (EVB-IT).',
    gdprTitle: '🔒 RGPD y Cumplimiento',
    gdprDesc:
      'Plantillas de encargados de tratamiento documentadas, procesamiento según Art. 28 RGPD, sede y datos procesados en la UE.',
    securityTitle: '🛡️ Seguridad de la Información',
    securityDesc:
      'Estructuras operativas orientadas a ISO 27001, modelo estricto de roles y permisos, MFA obligatorio para accesos de administración.',
    tenderTitle: 'Enviar RFP y Licitación',
    tenderDesc:
      'Envíe los pliegos de su licitación o consultas preliminares directamente a nuestro equipo especializado en contratación.',
    tenderBtn: 'Enviar Licitación →',
  },
  IT: {
    badge: '🇪🇺 Profilo di Conformità Settore Pubblico',
    title: 'Profilo Appalti',
    subtitle:
      'Profilo di qualificazione, standard e linee guida di conformità per gli appalti del settore pubblico e aziendale.',
    evbTitle: '✓ Standard EVB-IT',
    evbDesc:
      'Piena conformità con le Condizioni Contrattuali Supplementari per l’Acquisto di Servizi IT (EVB-IT).',
    gdprTitle: '🔒 GDPR & Conformità',
    gdprDesc:
      'Modelli DPA documentati, trattamento dei dati ai sensi dell’Art. 28 GDPR, sede e trattamento dei dati esclusivamente nell’UE.',
    securityTitle: '🛡️ Sicurezza delle Informazioni',
    securityDesc:
      'Strutture operative orientate alla ISO 27001, modello rigoroso di ruoli e permessi, MFA obbligatoria per accessi amministrativi.',
    tenderTitle: 'Invia RFP e Gara d’Appalto',
    tenderDesc:
      'Inviate i documenti di gara o richieste non vincolanti direttamente al nostro team specializzato in appalti.',
    tenderBtn: 'Invia Gara →',
  },
  NL: {
    badge: '🇪🇺 Publieke Sector Compliance Profiel',
    title: 'Inkoopprofiel',
    subtitle:
      'Kwalificatieprofiel, standaarden en richtlijnen voor inkoop in de publieke sector en enterprise-omgevingen.',
    evbTitle: '✓ EVB-IT Standaard',
    evbDesc:
      'Volledige conformiteit met aanvullende contractvoorwaarden voor inkoop van IT-diensten (EVB-IT).',
    gdprTitle: '🔒 AVG / GDPR & Compliance',
    gdprDesc:
      'Gedocumenteerde verwerkersovereenkomsten, verwerking conform Art. 28 AVG, vestiging en dataverwerking exclusief binnen de EU.',
    securityTitle: '🛡️ Informatiebeveiliging',
    securityDesc:
      'ISO 27001-gericht beheer, strikt rollen- en rechtenmodel, verplichte MFA voor beheerderstoegang.',
    tenderTitle: 'RFP & Tender Indienen',
    tenderDesc:
      'Stuur uw tenderdocumenten of vrijblijvende vragen rechtstreeks naar ons inkoopspecialistenteam.',
    tenderBtn: 'Tender Verzenden →',
  },
  PL: {
    badge: '🇪🇺 Profil Zgodności Sektora Publicznego',
    title: 'Profil Zakupowy',
    subtitle:
      'Profil kwalifikacyjny, standardy i wytyczne dotyczące zgodności dla zamówień publicznych i korporacyjnych.',
    evbTitle: '✓ Standard EVB-IT',
    evbDesc: 'Pełna zgodność z dodatkowymi warunkami umowy na zakup usług IT (EVB-IT).',
    gdprTitle: '🔒 RODO & Zgodność',
    gdprDesc:
      'Udokumentowane wzorce umów powierzenia przetwarzania, przetwarzanie wg Art. 28 RODO, siedziba i dane w Unii Europejskiej.',
    securityTitle: '🛡️ Bezpieczeństwo Informacji',
    securityDesc:
      'Struktury operacyjne zorientowane na ISO 27001, rygorystyczny model ról i uprawnień, obowiązkowe MFA dla dostępów admina.',
    tenderTitle: 'Złóż RFP i Zapytanie Przetargowe',
    tenderDesc:
      'Prześlij dokumentację przetargową lub wstępne zapytania bezpośrednio do naszego zespołu specjalistów ds. zamówień.',
    tenderBtn: 'Wyślij Oferte Przetargową →',
  },
}

function ProcurementContent() {
  const searchParams = useSearchParams()
  const rawLang = searchParams?.get('lang')?.toLowerCase() || 'de'
  const langKey = rawLang.toUpperCase()

  const t = procurementTranslations[langKey] || procurementTranslations.DE

  const contactHref = rawLang && rawLang !== 'de' ? `/contact?lang=${rawLang}` : '/contact'

  return (
    <>
      {/* Hero */}
      <section
        style={{
          marginBottom: '40px',
          borderBottom: '2px solid var(--border-color, #000000)',
          paddingBottom: '24px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--bg-tag, #f1f5f9)',
            border: '1px solid var(--border-color, #cbd5e1)',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: '800',
            color: 'var(--text-secondary, #334155)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '12px',
          }}
        >
          {t.badge}
        </div>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: '900',
            textTransform: 'uppercase',
            color: 'var(--text-primary, #0f172a)',
            marginBottom: '12px',
          }}
        >
          {t.title}
        </h1>
        <p
          style={{
            color: 'var(--text-secondary, #475569)',
            fontSize: '15px',
            lineHeight: '1.6',
            margin: 0,
            maxWidth: '700px',
          }}
        >
          {t.subtitle}
        </p>
      </section>

      {/* Grid Specs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}
      >
        <div
          style={{
            border: '2px solid var(--border-color, #000000)',
            padding: '24px',
            borderRadius: '8px',
            backgroundColor: 'var(--bg-card, #ffffff)',
            boxShadow: '4px 4px 0px 0px var(--border-color, #000000)',
          }}
        >
          <h2
            style={{
              fontSize: '16px',
              fontWeight: '800',
              marginBottom: '12px',
              color: 'var(--text-primary, #0f172a)',
            }}
          >
            {t.evbTitle}
          </h2>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary, #475569)',
              lineHeight: '1.5',
              margin: 0,
            }}
          >
            {t.evbDesc}
          </p>
        </div>

        <div
          style={{
            border: '2px solid var(--border-color, #000000)',
            padding: '24px',
            borderRadius: '8px',
            backgroundColor: 'var(--bg-card, #ffffff)',
            boxShadow: '4px 4px 0px 0px var(--border-color, #000000)',
          }}
        >
          <h2
            style={{
              fontSize: '16px',
              fontWeight: '800',
              marginBottom: '12px',
              color: 'var(--text-primary, #0f172a)',
            }}
          >
            {t.gdprTitle}
          </h2>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary, #475569)',
              lineHeight: '1.5',
              margin: 0,
            }}
          >
            {t.gdprDesc}
          </p>
        </div>

        <div
          style={{
            border: '2px solid var(--border-color, #000000)',
            padding: '24px',
            borderRadius: '8px',
            backgroundColor: 'var(--bg-card, #ffffff)',
            boxShadow: '4px 4px 0px 0px var(--border-color, #000000)',
          }}
        >
          <h2
            style={{
              fontSize: '16px',
              fontWeight: '800',
              marginBottom: '12px',
              color: 'var(--text-primary, #0f172a)',
            }}
          >
            {t.securityTitle}
          </h2>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary, #475569)',
              lineHeight: '1.5',
              margin: 0,
            }}
          >
            {t.securityDesc}
          </p>
        </div>
      </div>

      {/* Tender Anchor Section */}
      <section
        id="tender"
        style={{
          border: '2px solid var(--border-color, #000000)',
          padding: '32px',
          borderRadius: '8px',
          backgroundColor: '#0f172a',
          color: '#ffffff',
          boxShadow: '4px 4px 0px 0px var(--border-color, #000000)',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: '900',
            textTransform: 'uppercase',
            marginBottom: '8px',
            color: '#ffffff',
          }}
        >
          {t.tenderTitle}
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#94a3b8',
            marginBottom: '24px',
            maxWidth: '600px',
            lineHeight: '1.5',
          }}
        >
          {t.tenderDesc}
        </p>
        <Link
          href={contactHref}
          style={{
            display: 'inline-block',
            backgroundColor: '#fbbf24',
            color: '#000000',
            border: '2px solid #000000',
            padding: '12px 24px',
            borderRadius: '4px',
            fontWeight: '900',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            boxShadow: '2px 2px 0px 0px #ffffff',
          }}
        >
          {t.tenderBtn}
        </Link>
      </section>
    </>
  )
}

export default function ProcurementPage() {
  return (
    <main
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '40px 20px 80px 20px',
      }}
    >
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <ProcurementContent />
      </Suspense>
    </main>
  )
}
