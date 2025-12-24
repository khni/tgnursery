'use client'

import { DefaultHeadline } from '@/avuny/components/typography/headlines/DefaultHeadline'
import { GradientHeadline } from '@/avuny/components/typography/headlines/GradientHeadline'
import { HeadlineProps, ThemeColor } from '@/avuny/types'
import ColourfulText from '@/components/ui/colourful-text'

export function Headline({ headline, className = '' }: HeadlineProps) {
  const { variant, appearance, text } = headline
  const size = appearance?.size || 'default'
  const colors = appearance?.colors || []

  // Helper function to get color values

  // Render based on variant
  switch (variant) {
    case 'default': {
      return <DefaultHeadline text={text} color={colors[0]} size={size} className={className} />
    }

    case 'gradient': {
      return (
        <GradientHeadline
          text={text}
          from={colors[0]}
          to={colors[1]}
          size={size}
          className={className}
        />
      )
    }
    case 'colourfulText': {
      return (
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center relative z-2 font-sans">
          <ColourfulText words={text} />
        </h1>
      )
    }

    default:
      // Fallback to default if variant is unknown
      return <DefaultHeadline text={text} className={className} />
  }
}
