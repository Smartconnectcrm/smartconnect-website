import { getPayload } from 'payload'
import config from './src/payload.config'

const seedServices = async () => {
  const payload = await getPayload({ config })

  console.log('🌱 Seeding Service Catalog...')

  const defaultServices = [
    {
      title: 'Enterprise CRM Integration & Customization',
      shortDescription:
        'Tailored CRM solutions for enterprise and public sector requirements with EVB-IT compliance.',
      boundaries: [
        { item: 'ISO 27001 compliant deployment' },
        { item: 'EVB-IT contract terms integration' },
        { item: 'Documented handovers and training' },
      ],
      _status: 'published',
    },
    {
      title: 'Cloud Infrastructure & GDPR Hosting',
      shortDescription: 'EU-hosted sovereign cloud deployment with strict data privacy compliance.',
      boundaries: [
        { item: 'GDPR / DSGVO compliant data processing' },
        { item: 'Sovereignty-first EU data center hosting' },
        { item: 'Automated backup & failover architectures' },
      ],
      _status: 'published',
    },
    {
      title: 'Public Sector Bid & RFP Automation',
      shortDescription:
        'Automated AI-driven screening and evaluation of public sector tender opportunities.',
      boundaries: [
        { item: 'Real-time UVgO/VgV feed ingestion' },
        { item: 'Local AI screening (Ollama + Gemini)' },
        { item: 'Automated qualification scoring' },
      ],
      _status: 'published',
    },
  ]

  for (const service of defaultServices) {
    try {
      const created = await payload.create({
        collection: 'services',
        data: service as any,
      })
      console.log(`✅ Created service: ${created.title}`)
    } catch (err) {
      console.error(`⚠️ Could not create service "${service.title}":`, err)
    }
  }

  console.log('🎉 Seeding complete!')
  process.exit(0)
}

seedServices()
