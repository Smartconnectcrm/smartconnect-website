'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Locale, getTranslation, defaultLocale } from '@/lib/i18n';
import { COMPANY_LEGAL } from '@/lib/company';

import { BRAND } from "@/lib/branding"
import { getCompactLegalText } from "@/lib/company"

import { BRAND } from "@/lib/branding"
import { getCompactLegalText } from "@/lib/company"

export default function Footer() {
  const pathname = usePathname();

  // Extract locale from pathname
  const currentLocale: Locale = pathname.startsWith('/en')
    ? 'en'
    : pathname.startsWith('/fr')
    ? 'fr'
    : defaultLocale;

  const t = getTranslation(currentLocale);

  // Build localized path
  const getLocalizedPath = (locale: Locale, path: string) => {
    if (locale === defaultLocale) return path;
    return `/${locale}${path}`;
  };

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Legal Block - Single Instance */}
        <div className="mb-8 pb-8 border-b border-neutral-200">
          <div className="text-sm text-neutral-700 leading-relaxed space-y-1">
            <p className="font-semibold text-neutral-900">{COMPANY_LEGAL.legalName}</p>
            <p>{COMPANY_LEGAL.address.street}</p>
            <p>
              {COMPANY_LEGAL.address.postalCode} {COMPANY_LEGAL.address.city}
            </p>
            <p>{COMPANY_LEGAL.address.country}</p>
            <p className="pt-2">
              {t.footer.registerCourt}
            </p>
            <p>{t.footer.registerNumber}</p>
            <p className="pt-2">{t.footer.managingDirector}</p>
            <p>{t.footer.taxNumber}</p>
            <p className="pt-2">{t.footer.email}</p>
            <p>{t.footer.phone}</p>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link
            href={getLocalizedPath(currentLocale, '/impressum')}
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            {t.footer.impressum}
          </Link>
          <span className="text-neutral-300">|</span>
          <Link
            href={getLocalizedPath(currentLocale, '/datenschutz')}
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            {t.footer.privacy}
          </Link>
          <span className="text-neutral-300">|</span>
          <Link
            href={getLocalizedPath(currentLocale, '/compliance')}
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            {t.footer.complianceLink}
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {COMPANY_LEGAL.legalName}
        </div>
      </div>
    </footer>
  );
}
