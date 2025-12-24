import { SubHeadlineVariant } from '@/avuny/types/SubHeadlineVariant'

export interface SubHeadlineVariantOption {
  label: string
  value: SubHeadlineVariant
}

export const subheadlineVariantOptions: SubHeadlineVariantOption[] = [
  { label: 'Primary', value: 'primary' },
  { label: 'Secondary', value: 'secondary' },
]

export const defaultSubHeadlineVariant: SubHeadlineVariant = 'primary'
