import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
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
      localized: true,
    },
    {
      name: 'deliverables',
      label: '✓ Deliverables',
      type: 'array',
      fields: [{ name: 'item', type: 'text', localized: true }],
    },
    {
      name: 'inputs',
      label: '↓ Typische Inputs',
      type: 'array',
      fields: [{ name: 'item', type: 'text', localized: true }],
    },
    {
      name: 'outputs',
      label: '↑ Typische Outputs',
      type: 'array',
      fields: [{ name: 'item', type: 'text', localized: true }],
    },
    {
      name: 'boundaries',
      label: '⊘ Abgrenzung',
      type: 'array',
      fields: [{ name: 'item', type: 'text', localized: true }],
    },
  ],
}
