import { Color } from '@/avuny/types'
import { Size } from '@/avuny/types'

export type HeadlineVariant = 'default' | 'gradient' | 'colourfulText'

export interface HeadlineAppearance {
  size: Size
  colors: Color[]
}

export interface HeadlineData {
  variant?: HeadlineVariant
  appearance?: HeadlineAppearance
  text: string
}

// Props for the Headline component
export interface HeadlineProps {
  headline: HeadlineData
  className?: string
}

// Props for the individual headline components
export interface BaseHeadlineProps {
  text: string
  className?: string
  size?: Size
}
