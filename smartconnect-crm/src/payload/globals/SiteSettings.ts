import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'lightLogoUrl',
      type: 'text',
      label: 'Main Logo URL',
      defaultValue: 'https://i.postimg.cc/cHXm12qd/3D-Smart-Connect-LOGO.png',
    },
    {
      name: 'darkLogoUrl',
      type: 'text',
      label: 'Dark Logo URL',
      defaultValue: 'https://i.postimg.cc/cHXm12qd/3D-Smart-Connect-LOGO.png',
    },
  ],
}
