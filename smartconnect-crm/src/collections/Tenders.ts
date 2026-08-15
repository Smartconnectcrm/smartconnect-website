import type { CollectionConfig } from 'payload'

export const Tenders: CollectionConfig = {
  slug: 'tenders',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'organization', 'budget', 'ai_score', 'status'],
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'organization', type: 'text' },
    { name: 'source_url', type: 'text' },
    { name: 'budget', type: 'number' },
    { name: 'ai_score', type: 'number' },
    { name: 'ai_justification', type: 'textarea', localized: true },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'Scraped',
      options: [
        { label: 'Scraped', value: 'Scraped' },
        { label: 'Under Review', value: 'Under Review' },
        { label: 'Go', value: 'Go' },
        { label: 'No-Go', value: 'No-Go' },
        { label: 'Submitted', value: 'Submitted' },
      ],
    },
  ],
}
