import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  const { docs: services } = await payload.find({
    collection: 'services',
  })

  return (
    <div className="catalog-container max-w-7xl mx-auto px-6 py-10">
      {/* Hero Section Header (No longer using <header> tag) */}
      <section className="catalog-hero mb-12 border-b border-black pb-8">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-neutral-900 mb-3">
          Leistungskatalog
        </h1>
        <p className="text-neutral-600 font-medium max-w-2xl">
          Strukturierte Leistungsbausteine mit klarer Abgrenzung, dokumentierter Übergabe und
          compliance-orientierter Umsetzung.
        </p>
      </section>

      {/* Grid */}
      <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card border border-black p-6 rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Title & Tag */}
            <div className="service-card-header flex justify-between items-start gap-4 mb-4">
              <h2 className="text-xl font-bold text-neutral-900">{service.title}</h2>
              {service.categoryTag && (
                <span className="category-tag text-xs font-bold px-2.5 py-1 bg-neutral-100 border border-neutral-300 rounded">
                  {service.categoryTag}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="service-description text-sm text-neutral-600 mb-6">
              {service.description}
            </p>

            {/* Deliverables */}
            {service.deliverables && service.deliverables.length > 0 && (
              <div className="section-block mb-6">
                <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  ✓ Deliverables
                </h3>
                <ul className="space-y-1.5 text-xs text-neutral-700">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span>→</span>
                      <span>{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Abgrenzung */}
            {service.boundaries && service.boundaries.length > 0 && (
              <div className="boundary-block bg-neutral-50 border border-neutral-200 p-4 rounded">
                <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  ⊘ Abgrenzung
                </h3>
                <ul className="space-y-1.5 text-xs text-neutral-600">
                  {service.boundaries.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-neutral-400">×</span>
                      <span>{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
