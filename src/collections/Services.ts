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
      required: true,
      localized: true, // <--- Enabled multi-language support
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
      // Category tag stays fixed across languages (or set localized: true if you want tag labels translated)
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true, // <--- Enabled multi-language support
    },
    {
      name: 'deliverables',
      label: '✓ Deliverables',
      type: 'array',
      localized: true, // <--- Enabled multi-language support
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
      localized: true, // <--- Enabled multi-language support
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
      localized: true, // <--- Enabled multi-language support
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'boundaries',
      label: '⊘ Abgrenzung',
      type: 'array',
      localized: true, // <--- Enabled multi-language support
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
  ],
}
