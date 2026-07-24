import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Admin Settings',
  },
  access: {
    read: () => true, // Publicly readable for Next.js frontend
  },
  fields: [
    {
      name: 'lightLogo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Main Logo (Full Color)',
      admin: {
        description: 'Displayed on light backgrounds / Light theme',
      },
    },
    {
      name: 'darkLogo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Knockout Logo (White / Inverted)',
      admin: {
        description: 'Displayed on dark, neon, and enterprise blue backgrounds',
      },
    },
  ],
}
