import {
  defaultSubHeadlineVariant,
  subheadlineVariantOptions,
} from '@/avuny/options/subheadlineVariantOption'
import type { Field } from 'payload'

export const subHeadlineVariantField: Field = {
  name: 'variant',
  type: 'select',
  options: subheadlineVariantOptions,
  defaultValue: defaultSubHeadlineVariant,
}
