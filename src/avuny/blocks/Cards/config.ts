import { slugField, type Block } from 'payload'
import { CARD_COLORS, SPARKLE_COLORS, CARD_EMOJIS, CARD_VARIANTS, CARD_ALIGNMENTS } from './options'
import { localizedTextAreaField, localizedTextField } from '@/avuny/payload/fields/textField'
import { developer } from '@/access/developer'

export const ColourfulCards: Block = {
  slug: 'colourfulCards',

  labels: {
    singular: 'Cards Section',
    plural: 'Cards Sections',
  },
  fields: [
    localizedTextField('name'),
    slugField(),
    localizedTextField('headline'),
    {
      name: 'showInNav',
      type: 'checkbox',
      admin: {
        description: 'check it to be rendered in navbar',
        hidden: !developer,
      },
      defaultValue: false,
    },

    {
      name: 'subheadline',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'center',
      options: CARD_ALIGNMENTS,
      admin: {
        hidden: !developer,
      },
    },
    {
      name: 'cards',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        localizedTextField('title', true),
        localizedTextAreaField('description', true),
        {
          name: 'emoji',
          type: 'select',
          required: true,
          options: CARD_EMOJIS,
        },
        {
          name: 'color',
          type: 'select',
          required: true,
          options: CARD_COLORS,
        },
        {
          name: 'sparkleColor',
          type: 'select',
          required: true,
          options: SPARKLE_COLORS,
        },
        {
          name: 'variant',
          type: 'select',
          defaultValue: 'default',
          options: CARD_VARIANTS,
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
}
