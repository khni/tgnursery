import { CardEffect } from '@/avuny/types/CardEffect'

export interface CardEffectOption {
  label: string
  value: CardEffect
}

export const cardEffectOptions: CardEffectOption[] = [
  { label: 'None', value: 'none' },
  { label: 'Comet Card', value: 'CometCard' },
  { label: 'Pixelated Canvas', value: 'pixelatedCanvas' },
]
