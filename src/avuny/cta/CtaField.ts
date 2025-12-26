import { developer } from '@/access/developer'
import { dialogOptions } from '@/avuny/features/dialog/dialogOptions'

import type { Field } from 'payload'

export const ctaField: Field = {
  name: 'ctas',
  type: 'array',
  label: 'CTAs',
  minRows: 0,
  maxRows: 5, // optional safeguard
  interfaceName: 'Cta',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      localized: true,
    },

    {
      name: 'action',
      type: 'select',
      required: true,
      defaultValue: 'link',
      options: [
        { label: 'Link', value: 'link' },
        { label: 'Open Dialog', value: 'dialog' },
      ],
      admin: {
        hidden: !developer,
      },
    },

    {
      name: 'href',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData.action === 'link',
        hidden: !developer,
      },
    },

    {
      name: 'dialog',
      type: 'select',
      options: dialogOptions,
      admin: {
        condition: (_, siblingData) => siblingData.action === 'dialog',
        hidden: !developer,
      },
    },
  ],
}
