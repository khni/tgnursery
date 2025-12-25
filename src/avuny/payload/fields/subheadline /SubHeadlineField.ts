import { colorsField } from '@/avuny/payload/fields/ColorField'
import { headlineVariantField } from '@/avuny/payload/fields/headline/HeadlineVariantField'
import { sizeField } from '@/avuny/payload/fields/Size'
import { subHeadlineVariantField } from '@/avuny/payload/fields/subheadline /SubHeadlineVariantField'
import { localizedTextField } from '@/avuny/payload/fields/textField'
import { Field } from 'payload'

export const subHeadlineField: Field = {
  interfaceName: 'SubHeadlineField',
  name: 'subHeadline',
  type: 'group',
  fields: [
    localizedTextField('text'),
    subHeadlineVariantField,
    {
      name: 'appearance',
      type: 'group',
      fields: [sizeField, colorsField],
    },
  ],
}
