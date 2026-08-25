// src/collections/Leads.ts
import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'company', 'serviceInterest', 'createdAt'],
  },
  access: {
    create: () => true, // Allow public POST requests from lead engine
    read: ({ req: { user } }) => Boolean(user), // Restrict reading to authenticated admins
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'serviceInterest',
      type: 'text',
    },
    {
      name: 'notes',
      type: 'textarea',
    },
    {
      name: 'submittedAt',
      type: 'date',
    },
  ],
}
