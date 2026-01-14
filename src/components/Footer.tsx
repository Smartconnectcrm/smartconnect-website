import Link from "next/link"

import { BRAND } from "@/lib/branding"
import { getCompactLegalText } from "@/lib/company"

export default function Footer() {
  const yearText = new Date().getFullYear().toString()
  const legalText = getCompactLegalText()

  return (
    <footer className="border-t-2 border-brand-light-border dark:border-brand-dark-border bg-brand-light-bg dark:bg-brand-dark-bg">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company */}
          <div className="md:col-span-2">
            <div className="font-heading text-xl font-bold text-brand-light-text dark:text-brand-dark-text mb-3">
              {BRAND.legalName}
            </div>
            <div className="text-sm text-brand-light-muted dark:text-brand-dark-muted leading-relaxed mb-4">
              B2B IT &amp; Digital Solutions für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben.
            </div>
            <div className="space-y-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
              <div>{BRAND.location}</div>
              <div>
                E-Mail:{" "}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-brand-diamond hover:text-brand-gold transition-colors underline decoration-brand-diamond/30 hover:decoration-brand-gold"
                >
                  {BRAND.email}
                </a>
              </div>
              <div>
                Telefon:{" "}
                <a
                  href="tel:+4921187973999233"
                  className="text-brand-diamond hover:text-brand-gold transition-colors underline decoration-brand-diamond/30 hover:decoration-brand-gold"
                >
                  +49 211 87973999233
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-brand-light-muted dark:text-brand-dark-muted mb-3">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/procurement"
                  className="text-sm text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Procurement
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-sm text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-brand-light-muted dark:text-brand-dark-muted mb-3">
              Rechtliches
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-sm text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-brand-light-border dark:via-brand-dark-border to-transparent" />

        {/* Legal Impressum - Compact German Format */}
        <div className="mb-4 text-xs text-brand-light-muted dark:text-brand-dark-muted leading-relaxed text-center">
          {legalText}
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-brand-light-muted dark:text-brand-dark-muted">
          © {yearText} {BRAND.legalName}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}
