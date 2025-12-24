import { Color } from '@/avuny/types'

export interface ColorOption {
  label: string
  value: Color
}

export const colorOptions: ColorOption[] = [
  { label: 'Foreground', value: 'foreground' },
  { label: 'Primary', value: 'primary' },
  { label: 'Secondary', value: 'secondary' },
  { label: 'Muted', value: 'muted' },
  { label: 'Accent', value: 'accent' },
  { label: 'Destructive', value: 'destructive' },
]
