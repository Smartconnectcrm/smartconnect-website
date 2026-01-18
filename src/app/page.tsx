import Link from 'next/link'
import { getTranslation, defaultLocale } from '@/lib/i18n'
import { services, capabilities } from '@/lib/services'

export default function HomePage() {
  const t = getTranslation(defaultLocale)

  const runServices = services.filter((s) => s.category === 'run')
  const changeServices = services.filter((s) => s.category === 'change')
  const advisoryServices = services.filter((s) => s.category === 'advisory')

  return (
    <main className="min-h-screen">
      {/* Hero Section - Compact Institutional */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">
              {t.home.heroTitle}
            </h1>
            <p className="text-lg text-neutral-700 mb-6">{t.home.heroSubtitle}</p>
            <p className="text-base text-neutral-600 leading-relaxed">
              {t.home.positioning}
            </p>
          </div>
        </div>
      </section>

      {/* ICP Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">{t.home.icpTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-neutral-200 rounded-lg p-6 bg-white">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {t.home.icp1Title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.home.icp1Desc}
              </p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-6 bg-white">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {t.home.icp2Title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.home.icp2Desc}
              </p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-6 bg-white">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {t.home.icp3Title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.home.icp3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            {t.home.servicesTitle}
          </h2>

          {/* RUN Services */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded mr-3">
                RUN
              </span>
              {t.services.runTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {runServices.map((service) => (
                <div
                  key={service.id}
                  className="border border-neutral-200 rounded-lg p-5 bg-white"
                >
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    {service.title[defaultLocale]}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.description[defaultLocale]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CHANGE Services */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded mr-3">
                CHANGE
              </span>
              {t.services.changeTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {changeServices.map((service) => (
                <div
                  key={service.id}
                  className="border border-neutral-200 rounded-lg p-5 bg-white"
                >
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    {service.title[defaultLocale]}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.description[defaultLocale]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ADVISORY Services */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center">
              <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded mr-3">
                ADVISORY
              </span>
              {t.services.advisoryTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {advisoryServices.map((service) => (
                <div
                  key={service.id}
                  className="border border-neutral-200 rounded-lg p-5 bg-white"
                >
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    {service.title[defaultLocale]}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.description[defaultLocale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded hover:bg-neutral-800 transition-colors"
            >
              {t.common.learnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            {t.home.capabilitiesTitle}
          </h2>
          <div className="flex flex-wrap gap-3">
            {capabilities[defaultLocale].map((capability, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full border border-neutral-200"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Arbeitsweise */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            {t.home.arbeitsweisetitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-neutral-200 rounded-lg p-6 bg-white">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {t.home.arbeitsweisetitle1}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.home.arbeitsweiseDesc1}
              </p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-6 bg-white">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {t.home.arbeitsweisetitle2}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.home.arbeitsweiseDesc2}
              </p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-6 bg-white">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {t.home.arbeitsweisetitle3}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.home.arbeitsweiseDesc3}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
