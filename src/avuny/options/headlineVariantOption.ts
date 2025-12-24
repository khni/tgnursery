import { HeadlineVariant } from '@/avuny/types'

export interface HeadlineVariantOption {
  label: string
  value: HeadlineVariant
}

export const headlineVariantOptions: HeadlineVariantOption[] = [
  { label: 'Default', value: 'default' },
  { label: 'Gradient', value: 'gradient' },
  { label: 'colourful', value: 'colourfulText' },
]

export const defaultHeadlineVariant: HeadlineVariant = 'default'
