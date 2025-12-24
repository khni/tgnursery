import { colorOptions } from '@/avuny/options/colorsOptions'
import { Field } from 'payload'

export const colorField: Field = {
  name: 'color',
  type: 'select',
  options: colorOptions,
  required: true,
}

export const colorsField: Field = {
  interfaceName: 'ColorsField',
  name: 'colors',
  type: 'array',
  fields: [colorField],
}
