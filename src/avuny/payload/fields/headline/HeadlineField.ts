import { colorsField } from '@/avuny/payload/fields/ColorField'
import { headlineVariantField } from '@/avuny/payload/fields/headline/HeadlineVariantField'
import { sizeField } from '@/avuny/payload/fields/Size'
import { Field } from 'payload'

export const headlineField: Field = {
  name: 'headline',
  type: 'group',
  fields: [
    { type: 'text', name: 'text' },

    headlineVariantField,
    {
      name: 'appearance',
      type: 'group',
      fields: [sizeField, colorsField],
    },
  ],
}
