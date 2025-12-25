import { colorsField } from '@/avuny/payload/fields/ColorField'
import { headlineVariantField } from '@/avuny/payload/fields/headline/HeadlineVariantField'
import { sizeField } from '@/avuny/payload/fields/Size'
import { localizedTextField } from '@/avuny/payload/fields/textField'
import { Field } from 'payload'

export const headlineField: Field = {
  name: 'headline',
  type: 'group',
  fields: [
    localizedTextField('text'),

    headlineVariantField,
    {
      name: 'appearance',
      type: 'group',
      fields: [sizeField, colorsField],
    },
  ],
}
