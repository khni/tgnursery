import { colorsField } from '@/avuny/payload/fields/ColorField'
import { sizeField } from '@/avuny/payload/fields/Size'
import { Field } from 'payload'

export const AppearanceField: Field = {
  interfaceName: 'AppearanceField',
  name: 'appearance',
  type: 'group',
  fields: [sizeField, colorsField],
}
