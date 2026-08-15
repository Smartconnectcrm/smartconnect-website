import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'categoryTag', 'updatedAt'],
  },
  access: {
    read: () => true, // Allows public frontend fetching for Service Catalog cards
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true, // Localized title
    },
    {
      name: 'categoryTag',
      type: 'select',
      defaultValue: 'RunOperations',
      options: [
        { label: 'Run Operations', value: 'RunOperations' },
        { label: 'Change / Transformation', value: 'Change' },
        { label: 'Advisory & Consulting', value: 'Advisory' },
        { label: 'Security & Compliance', value: 'Security' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true, // Localized short description
    },
    {
      name: 'deliverables',
      label: '✓ Deliverables / Leistungsinhalte',
      type: 'array',
      localized: true, // Enables language-specific deliverables
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'inputs',
      label: '↓ Typische Inputs',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'outputs',
      label: '↑ Typische Outputs',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'boundaries',
      label: '⊘ Abgrenzung / Boundaries',
      type: 'array',
      localized: true, // Localized scope boundaries
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
  ],
}
