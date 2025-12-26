import { CollectionConfig } from 'payload'

import { admin } from '@/access/admin'
import { contactOptions } from '@/avuny/features/forms/BookTour/contactOptions'

export const Contacts: CollectionConfig = {
  slug: 'contacts',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'mobile', 'options', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: admin,
    delete: admin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'mobile',
      type: 'text',
      required: true,
    },
    {
      name: 'options',
      type: 'select',
      required: true,
      options: contactOptions,
    },
  ],
}
