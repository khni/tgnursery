import { BackgroundEffect } from '@/avuny/types/BackgroundEffect'

export interface BackgroundEffectOption {
  label: string
  value: BackgroundEffect
}

export const backgroundEffectOptions: BackgroundEffectOption[] = [
  { label: 'None', value: 'none' },
  { label: 'Beams with Collision', value: 'beamsWithCollision' },
]
//export const defaultBackgroundEffect: BackgroundEffect = 'none'
