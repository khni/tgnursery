import { defaultSize, sizeOptions } from '@/avuny/options/sizeOptions'

import { Field } from 'payload'

export const sizeField: Field = {
  interfaceName: ' SizeField',
  name: 'size',
  type: 'select',
  options: sizeOptions,
  defaultValue: defaultSize,
}
