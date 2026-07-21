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
    },
    {
      name: 'categoryTag',
      type: 'select',
      defaultValue: 'RunOperations',
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
    },
    {
      name: 'deliverables',
      label: '✓ Deliverables',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
    },
    {
      name: 'inputs',
      label: '↓ Typische Inputs',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
    },
    {
      name: 'outputs',
      label: '↑ Typische Outputs',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
    },
    {
      name: 'boundaries',
      label: '⊘ Abgrenzung',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
    },
  ],
}
