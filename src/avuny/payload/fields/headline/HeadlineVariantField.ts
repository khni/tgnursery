import { developer } from '@/access/developer'
import {
  defaultHeadlineVariant,
  headlineVariantOptions,
} from '@/avuny/options/headlineVariantOption'

import type { Field } from 'payload'

export const headlineVariantField: Field = {
  name: 'variant',
  type: 'select',
  options: headlineVariantOptions,
  defaultValue: defaultHeadlineVariant,
  admin: {
    hidden: !developer,
  },
}
