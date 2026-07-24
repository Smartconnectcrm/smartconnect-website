'use client'

import React, { useState, useEffect } from 'react'

const formTranslations: Record<
  string,
  {
    title: string
    subtitle: string
    orgLabel: string
    orgPlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submitBtn: string
    submittingBtn: string
    successTitle: string
    successMsg: string
  }
> = {
  PL: {
    title: 'KONTAKT I ZAPYTANIA',
    subtitle:
      'Skontaktuj się bezpośrednio z naszym zespołem enterprise lub prześlij dokumentację przetargową.',
    orgLabel: 'ORGANIZACJA / FIRMA *',
    orgPlaceholder: 'np. Ministerstwo / Enterprise Sp. z o.o.',
    emailLabel: 'ADRES E-MAIL *',
    emailPlaceholder: 'nazwisko@organizacja.pl',
    messageLabel: 'ZAPYTANIE / OPIS PROJEKTU *',
    messagePlaceholder: 'Opisz swoje wymagania lub szczegóły przetargu...',
    submitBtn: 'WYŚLIJ ZAPYTANIE',
    submittingBtn: 'WYSYŁANIE...',
    successTitle: '✓ ZAPYTANIE PRZESŁANE POMYŚLNIE',
    successMsg:
      'Dziękujemy. Nasz zespół ds. zakupów i enterprise przeanalizuje Twoją wiadomość i wkrótce się skontaktuje.',
  },
  HU: {
    title: 'KAPCSOLAT ÉS AJÁNLATKÉRÉS',
    subtitle:
      'Lépjen kapcsolatba közvetlenül enterprise csapatunkkal, vagy küldje el tender dokumentációját.',
    orgLabel: 'SZERVEZET / VÁLLALAT *',
    orgPlaceholder: 'pl. Minisztérium / Enterprise Nyrt.',
    emailLabel: 'E-MAIL CÍM *',
    emailPlaceholder: 'nev@szervezet.hu',
    messageLabel: 'AJÁNLATKÉRÉS / PROJEKT LEÍRÁSA *',
    messagePlaceholder: 'Írja le követelményeit vagy a tender részleteit...',
    submitBtn: 'AJÁNLATKÉRÉS ELKÜLDÉSE',
    submittingBtn: 'KÜLDÉS FOLYAMATBAN...',
    successTitle: '✓ AJÁNLATKÉRÉS SIKERESEN ELKÜLDVE',
    successMsg:
      'Köszönjük! Beszerzési és enterprise csapatunk átvizsgálja üzenetét és hamarosan felveszi Önnel a kapcsolatot.',
  },
  FR: {
    title: 'CONTACT ET DEMANDES',
    subtitle:
      'Contactez directement notre équipe Enterprise ou transmettez vos documents d’appel d’offres.',
    orgLabel: 'ORGANISATION / ENTREPRISE *',
    orgPlaceholder: 'ex. Ministère / Enterprise SA',
    emailLabel: 'ADRESSE E-MAIL *',
    emailPlaceholder: 'nom@organisation.fr',
    messageLabel: 'DEMANDE / DESCRIPTION DU PROJET *',
    messagePlaceholder: 'Décrivez vos besoins ou les détails de votre appel d’offres...',
    submitBtn: 'ENVOYER LA DEMANDE',
    submittingBtn: 'ENVOI EN COURS...',
    successTitle: '✓ DEMANDE ENVOYÉE AVEC SUCCÈS',
    successMsg:
      'Merci. Notre équipe Achats et Enterprise étudiera votre message et vous recontactera rapidement.',
  },
  ES: {
    title: 'CONTACTO Y CONSULTAS',
    subtitle:
      'Póngase en contacto directamente con nuestro equipo Enterprise o envíe su documentación de licitación.',
    orgLabel: 'ORGANIZACIÓN / EMPRESA *',
    orgPlaceholder: 'ej. Ministerio / Enterprise S.A.',
    emailLabel: 'CORREO ELECTRÓNICO *',
    emailPlaceholder: 'nombre@organizacion.es',
    messageLabel: 'CONSULTA / DESCRIPCIÓN DEL PROYECTO *',
    messagePlaceholder: 'Describa sus requisitos o detalles de la licitación...',
    submitBtn: 'ENVIAR CONSULTA',
    submittingBtn: 'ENVIANDO...',
    successTitle: '✓ CONSULTA ENVIADA CON ÉXITO',
    successMsg:
      'Gracias. Nuestro equipo de Contratación y Enterprise revisará su mensaje y se pondrá en contacto pronto.',
  },
  IT: {
    title: 'CONTATTI E RICHIESTE',
    subtitle:
      'Mettiti in contatto diretto con il nostro team Enterprise o invia la documentazione di gara.',
    orgLabel: 'ORGANIZZAZIONE / AZIENDA *',
    orgPlaceholder: 'es. Ministero / Enterprise S.p.A.',
    emailLabel: 'INDIRIZZO E-MAIL *',
    emailPlaceholder: 'nome@organizzazione.it',
    messageLabel: 'RICHIESTA / DESCRIZIONE DEL PROGETTO *',
    messagePlaceholder: 'Descrivi i tuoi requisiti o i dettagli della gara...',
    submitBtn: 'INVIA RICHIESTA',
    submittingBtn: 'INVIO IN CORSO...',
    successTitle: '✓ RICHIESTA INVIATA CON SUCCESSO',
    successMsg:
      'Grazie. Il nostro team Procurement ed Enterprise esaminerà il messaggio e ti ricontatterà a breve.',
  },
  NL: {
    title: 'CONTACT & AANVRAGEN',
    subtitle:
      'Neem rechtstreeks contact op met ons Enterprise-team of verstuur uw tenderdocumenten.',
    orgLabel: 'ORGANISATIE / ONDERNEMING *',
    orgPlaceholder: 'bijv. Ministerie / Enterprise B.V.',
    emailLabel: 'E-MAILADRES *',
    emailPlaceholder: 'naam@organisatie.nl',
    messageLabel: 'AANVRAAG / PROJECTBESCHRIJVING *',
    messagePlaceholder: 'Beschrijf uw vereisten of tenderdetails...',
    submitBtn: 'AANVRAAG VERSTUREN',
    submittingBtn: 'VERSTUREN...',
    successTitle: '✓ AANVRAAG SUCCESVOL VERSTUURD',
    successMsg:
      'Bedankt. Ons Procurement- en Enterprise-team zal uw bericht beoordelen en snel contact opnemen.',
  },
  EN: {
    title: 'CONTACT & INQUIRIES',
    subtitle:
      'Get in touch directly with our Enterprise team or submit your RFP/tender documentation.',
    orgLabel: 'ORGANIZATION / COMPANY *',
    orgPlaceholder: 'e.g. Ministry / Enterprise Inc.',
    emailLabel: 'EMAIL ADDRESS *',
    emailPlaceholder: 'name@organization.com',
    messageLabel: 'INQUIRY / PROJECT DESCRIPTION *',
    messagePlaceholder: 'Describe your requirements or tender details...',
    submitBtn: 'SUBMIT INQUIRY',
    submittingBtn: 'SUBMITTING...',
    successTitle: '✓ INQUIRY SUBMITTED SUCCESSFULLY',
    successMsg:
      'Thank you. Our Procurement and Enterprise team will review your message and reach out shortly.',
  },
  DE: {
    title: 'KONTAKT & ANFRAGEN',
    subtitle:
      'Nehmen Sie direkt Kontakt mit unserem Enterprise-Team auf oder übermitteln Sie Ihre Tender-Unterlagen.',
    orgLabel: 'ORGANISATION / UNTERNEHMEN *',
    orgPlaceholder: 'z.B. Ministerium / Enterprise AG',
    emailLabel: 'E-MAIL ADRESSE *',
    emailPlaceholder: 'name@organisation.de',
    messageLabel: 'ANFRAGE / PROJEKTBESCHRIJVING *',
    messagePlaceholder: 'Beschreiben Sie Ihre Anforderungen oder Tender-Details...',
    submitBtn: 'ANFRAGE ABSENDEN',
    submittingBtn: 'WIRD GESENDET...',
    successTitle: '✓ ANFRAGE ERFOLGREICH ÜBERMITTELT',
    successMsg:
      'Vielen Dank. Unser Procurement- und Enterprise-Team wird Ihre Nachricht prüfen und sich in Kürze melden.',
  },
}

export default function ContactPage() {
  const [activeLang, setActiveLang] = useState('DE')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    org: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    // Read saved language preference
    const savedLang = localStorage.getItem('preferred_lang') || 'DE'
    setActiveLang(savedLang.toUpperCase())
  }, [])

  const dict = formTranslations[activeLang] || formTranslations.DE

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <main
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px 80px 20px',
      }}
    >
      <h1
        style={{
          fontSize: '32px',
          fontWeight: '900',
          textTransform: 'uppercase',
          marginBottom: '12px',
          color: '#0f172a',
        }}
      >
        {dict.title}
      </h1>
      <p style={{ color: '#475569', marginBottom: '32px', fontSize: '15px' }}>{dict.subtitle}</p>

      {submitted ? (
        <div
          style={{
            border: '2px solid #000000',
            padding: '32px',
            borderRadius: '8px',
            backgroundColor: '#f0fdf4',
            boxShadow: '4px 4px 0px 0px #000000',
          }}
        >
          <h2
            style={{ fontSize: '20px', fontWeight: '900', color: '#166534', marginBottom: '8px' }}
          >
            {dict.successTitle}
          </h2>
          <p style={{ color: '#15803d', fontSize: '14px', margin: 0 }}>{dict.successMsg}</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            border: '2px solid #000000',
            padding: '32px',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            boxShadow: '4px 4px 0px 0px #000000',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: '800',
                marginBottom: '6px',
                textTransform: 'uppercase',
              }}
            >
              {dict.orgLabel}
            </label>
            <input
              type="text"
              required
              placeholder={dict.orgPlaceholder}
              value={formData.org}
              onChange={(e) => setFormData({ ...formData, org: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #cbd5e1',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: '800',
                marginBottom: '6px',
                textTransform: 'uppercase',
              }}
            >
              {dict.emailLabel}
            </label>
            <input
              type="email"
              required
              placeholder={dict.emailPlaceholder}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #cbd5e1',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: '800',
                marginBottom: '6px',
                textTransform: 'uppercase',
              }}
            >
              {dict.messageLabel}
            </label>
            <textarea
              rows={5}
              required
              placeholder={dict.messagePlaceholder}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #cbd5e1',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: '#fbbf24',
              color: '#000000',
              border: '2px solid #000000',
              padding: '12px 24px',
              borderRadius: '4px',
              fontWeight: '900',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: loading ? 'wait' : 'pointer',
              boxShadow: '2px 2px 0px 0px #000000',
              alignSelf: 'flex-start',
            }}
          >
            {loading ? dict.submittingBtn : dict.submitBtn}
          </button>
        </form>
      )}
    </main>
  )
}
