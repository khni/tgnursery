import { Size } from '@/avuny/types'

export interface SizeOption {
  label: string
  value: Size
}

export const sizeOptions: SizeOption[] = [
  { label: 'Default', value: 'default' },
  { label: 'Small', value: 'small' },
  { label: 'Large', value: 'large' },
  { label: 'XLarge', value: 'xlarge' },
]

export const defaultSize: Size = 'default'
