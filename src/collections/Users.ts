import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'roles', 'updatedAt'],
  },
  auth: {
    tokenExpiration: 28800, // 8 hours in seconds
    verify: false, // Set to true if email verification is required
    maxLoginAttempts: 5,
    lockTime: 600000, // Lock account for 10 minutes after 5 failed attempts
  },
  access: {
    // Only authenticated users can read users list
    read: ({ req: { user } }) => Boolean(user),
    // Only admins or self can update user profile
    update: ({ req: { user }, id }) => {
      if (!user) return false
      if ((user as any).roles?.includes('admin')) return true
      return user.id === id
    },
    // Only admins can create or delete users
    create: ({ req: { user } }) => Boolean((user as any)?.roles?.includes('admin')),
    delete: ({ req: { user } }) => Boolean((user as any)?.roles?.includes('admin')),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
      required: true,
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['editor'],
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
        {
          label: 'Viewer',
          value: 'viewer',
        },
      ],
      required: true,
      saveToJWT: true, // Includes user roles directly in the JWT payload
    },
  ],
}
