import Link from "next/link"

import { BRAND } from "@/lib/branding"
import { getCompactLegalText } from "@/lib/company"

export default function Footer() {
  const yearText = new Date().getFullYear().toString()
  const legalText = getCompactLegalText()

  return (
    <footer className="border-t-2 border-brand-light-border dark:border-brand-dark-border bg-brand-light-bg dark:bg-brand-dark-bg">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Company */}
          <div className="lg:col-span-2">
            <div className="font-heading text-2xl font-bold text-brand-light-text dark:text-brand-dark-text mb-4">
              {BRAND.legalName}
            </div>
            <div className="space-y-2 text-base text-brand-light-muted dark:text-brand-dark-muted leading-relaxed">
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
            <div className="text-sm font-bold uppercase tracking-widest text-brand-light-muted dark:text-brand-dark-muted mb-4">
              Navigation
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-base text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-base text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-brand-light-muted dark:text-brand-dark-muted mb-4">
              Rechtliches
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/impressum"
                  className="text-base text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-base text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-base text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/procurement"
                  className="text-base text-brand-light-text dark:text-brand-dark-text hover:text-brand-diamond transition-colors"
                >
                  Procurement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-brand-light-border dark:via-brand-dark-border to-transparent" />

        {/* Legal Impressum - Compact German Format */}
        <div className="mb-6 text-xs text-brand-light-muted dark:text-brand-dark-muted leading-relaxed text-center">
          {legalText}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-brand-light-muted dark:text-brand-dark-muted">
          © {yearText} {BRAND.legalName}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}
