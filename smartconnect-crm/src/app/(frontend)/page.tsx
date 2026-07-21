import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  const { docs: services } = await payload.find({
    collection: 'services',
  })

  return (
    <div className="catalog-container">
      {/* Header */}
      <header className="catalog-header">
        <h1>Leistungskatalog</h1>
        <p>
          Strukturierte Leistungsbausteine mit klarer Abgrenzung, dokumentierter Übergabe und
          compliance-orientierter Umsetzung.
        </p>
      </header>

      {/* Grid */}
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            {/* Title & Tag */}
            <div className="service-card-header">
              <h2>{service.title}</h2>
              <span className="category-tag">{service.categoryTag}</span>
            </div>

            {/* Description */}
            <p className="service-description">{service.description}</p>

            {/* Deliverables */}
            {service.deliverables && service.deliverables.length > 0 && (
              <div className="section-block">
                <h3>✓ Deliverables</h3>
                <ul>
                  {service.deliverables.map((item, idx) => (
                    <li key={idx}>→ {item.item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Abgrenzung */}
            {service.boundaries && service.boundaries.length > 0 && (
              <div className="boundary-block">
                <h3>⊘ Abgrenzung</h3>
                <ul>
                  {service.boundaries.map((item, idx) => (
                    <li key={idx}>× {item.item}</li>
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
