import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      name: 'lightLogo', // This is image_3d6c3b.jpg
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Main Logo (Full Color)',
      admin: {
        description: 'For use on light backgrounds (image_3d6c3b.jpg)',
      },
    },
    {
      name: 'darkLogo', // This is your logo_white.png
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Knockout Logo (White)',
      admin: {
        description: 'For use on dark backgrounds (your processed inverted file)',
      },
    },
  ],
}
