'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { type Locale, locales, localeNames, getTranslation, defaultLocale } from '@/lib/i18n';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Extract locale from pathname
  const currentLocale: Locale = pathname.startsWith('/en')
    ? 'en'
    : pathname.startsWith('/fr')
    ? 'fr'
    : defaultLocale;

  const t = getTranslation(currentLocale);

  // Get base path without locale
  const getBasePath = () => {
    if (pathname.startsWith('/en')) return pathname.slice(3) || '/';
    if (pathname.startsWith('/fr')) return pathname.slice(3) || '/';
    return pathname;
  };

  const basePath = getBasePath();

  // Build localized path
  const getLocalizedPath = (locale: Locale, path: string) => {
    if (locale === defaultLocale) return path;
    return `/${locale}${path}`;
  };

  const navItems = [
    { label: t.nav.home, href: getLocalizedPath(currentLocale, '/') },
    { label: t.nav.services, href: getLocalizedPath(currentLocale, '/services') },
    { label: t.nav.procurement, href: getLocalizedPath(currentLocale, '/procurement') },
    { label: t.nav.compliance, href: getLocalizedPath(currentLocale, '/compliance') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={getLocalizedPath(currentLocale, '/')} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-neutral-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <span className="font-semibold text-neutral-900 text-sm hidden sm:inline">
              SmartConnect CRM UG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === item.href
                    ? 'text-neutral-900 bg-neutral-100'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section: Contact + Language Toggle */}
          <div className="flex items-center space-x-4">
            {/* Contact Button */}
            <Link
              href={getLocalizedPath(currentLocale, '/contact')}
              className="px-4 py-2 text-sm font-medium text-white bg-neutral-900 rounded hover:bg-neutral-800 transition-colors"
            >
              {t.nav.contact}
            </Link>

            {/* Language Toggle */}
            <div className="flex items-center space-x-1 border border-neutral-300 rounded p-1">
              {locales.map((locale) => (
                <Link
                  key={locale}
                  href={getLocalizedPath(locale, basePath)}
                  className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                    currentLocale === locale
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  {localeNames[locale]}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600 hover:text-neutral-900"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    pathname === item.href
                      ? 'text-neutral-900 bg-neutral-100'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
