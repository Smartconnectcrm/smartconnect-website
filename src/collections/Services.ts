// src/collections/Services.ts
import type { CollectionConfig, CollectionBeforeChangeHook } from 'payload'
import { translateText } from '../utilities/autoTranslate'

const autoTranslateHook: CollectionBeforeChangeHook = async ({ data }) => {
  if (!data?.title) return data

  const targetLocales = ['en', 'hu', 'fr', 'es', 'it', 'nl', 'pl']
  const arrayFields = ['deliverables', 'inputs', 'outputs', 'boundaries']

  for (const locale of targetLocales) {
    // 1. Translate Title if missing
    if (data.title && typeof data.title === 'object' && !data.title[locale]) {
      const germanTitle = data.title.de || data.title.en || ''
      if (germanTitle) {
        data.title[locale] = await translateText(germanTitle, locale)
      }
    }

    // 2. Translate Description if missing
    if (data.description && typeof data.description === 'object' && !data.description[locale]) {
      const germanDesc = data.description.de || data.description.en || ''
      if (germanDesc) {
        data.description[locale] = await translateText(germanDesc, locale)
      }
    }

    // 3. Translate Array Item Lists (Deliverables, Inputs, Outputs, Boundaries)
    for (const fieldKey of arrayFields) {
      if (data[fieldKey] && typeof data[fieldKey] === 'object') {
        const germanItems = data[fieldKey].de || data[fieldKey].en || []

        if (Array.isArray(germanItems) && germanItems.length > 0 && !data[fieldKey][locale]) {
          const translatedItems = await Promise.all(
            germanItems.map(async (itemObj: { item?: string }) => {
              if (!itemObj?.item) return itemObj
              const translatedText = await translateText(itemObj.item, locale)
              return { ...itemObj, item: translatedText }
            }),
          )
          data[fieldKey][locale] = translatedItems
        }
      }
    }
  }

  return data
}

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Publicly readable for the website
  },
  hooks: {
    beforeChange: [autoTranslateHook],
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
      localized: true,
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
      label: '⊘ Abgrenzung',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
  ],
}
