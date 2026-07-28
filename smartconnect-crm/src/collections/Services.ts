import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Publicly readable for the website
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true, // e.g. "Systemintegration & Schnittstellen"
      localized: true, // <-- Enables translation for Title
    },
    {
      name: 'categoryTag',
      type: 'select',
      defaultValue: 'RunOperations',
      // We usually leave tags unlocalized so they act as universal filters,
      // but you can add localized: true here if you want to translate the tags too!
      options: [
        { label: 'RunOperations', value: 'RunOperations' },
        { label: 'Change', value: 'Change' },
        { label: 'Advisory', value: 'Advisory' },
        { label: 'Security', value: 'Security' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true, // <-- Enables translation for Description
    },
    {
      name: 'deliverables',
      label: '✓ Deliverables',
      type: 'array',
      localized: true, // <-- Enables translation for Deliverables array
      fields: [{ name: 'item', type: 'text' }],
    },
    {
      name: 'inputs',
      label: '↓ Typische Inputs',
      type: 'array',
      localized: true, // <-- Enables translation for Inputs array
      fields: [{ name: 'item', type: 'text' }],
    },
    {
      name: 'outputs',
      label: '↑ Typische Outputs',
      type: 'array',
      localized: true, // <-- Enables translation for Outputs array
      fields: [{ name: 'item', type: 'text' }],
    },
    {
      name: 'boundaries',
      label: '⊘ Abgrenzung',
      type: 'array',
      localized: true, // <-- Enables translation for Boundaries array
      fields: [{ name: 'item', type: 'text' }],
    },
  ],
}
