import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true, // Publicly readable for frontend image assets
  },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['filename', 'alt', 'mimeType', 'updatedAt'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true, // Enables localized image alt tags across languages
    },
  ],
  upload: {
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 300,
        crop: 'center',
      },
      {
        name: 'card',
        width: 768,
        height: 432,
        crop: 'center',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        crop: 'center',
      },
    ],
    mimeTypes: ['image/png', 'image/jpeg', 'image/svg+xml', 'image/webp'],
  },
}
