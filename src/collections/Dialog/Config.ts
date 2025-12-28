// collections/Dialog.ts
import { developer } from '@/access/developer'
import { dialogOptions } from '@/avuny/features/dialog/dialogOptions'
import { localizedTextField } from '@/avuny/payload/fields/textField'
import { CollectionConfig } from 'payload'

export const Dialogs: CollectionConfig = {
  slug: 'dialogs',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: developer,
    update: developer,
    delete: developer,
  },
  fields: [
    {
      name: 'dialogId',
      type: 'select',
      options: dialogOptions,
      admin: {
        hidden: !developer,
      },
    },
    localizedTextField('title'),
    localizedTextField('description'),
  ],
}
