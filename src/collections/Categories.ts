import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from 'payload'
import { developer } from '@/access/developer'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: developer,
    delete: developer,
    read: developer,
    update: developer,
  },
  admin: {
    useAsTitle: 'title',
    hidden: !developer,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField({
      position: undefined,
    }),
  ],
}
