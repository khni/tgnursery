// tailwindMapper.ts
import ColourfulText from '@/components/ui/colourful-text'
import type { StyleVariant, StyleSize, GradientOption, UIPreset, ColorScheme } from './options'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
const VARIANT_MAP: Record<StyleVariant, string> = {
  default: 'bg-white text-black',
  muted: 'bg-gray-100 text-gray-700',
  hero: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
}

const SIZE_MAP: Record<StyleSize, string> = {
  sm: 'text-sm py-1 px-2',
  md: 'text-base py-2 px-4',
  lg: 'text-lg py-3 px-6',
}

const GRADIENT_MAP: Record<GradientOption, string> = {
  none: '',
  primary: 'bg-gradient-to-r from-blue-500 to-blue-700',
  hero: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
}

const COLOR_SCHEME_MAP: Record<ColorScheme, string> = {
  primary: 'text-blue-600',
  secondary: 'text-gray-600',
  accent: 'text-pink-500',
}

// Map UI_PRESETS to either Tailwind string or component
const UI_PRESET_MAP: Record<
  UIPreset,
  { className?: string; Component?: React.FC<{ words: string }> }
> = {
  'gradient-card': { className: 'shadow-lg rounded-lg p-4' },
  'spotlight-card': { className: 'shadow-xl rounded-xl p-6' },
  'aurora-text': { Component: ColourfulText },
  'text-generate-effect': { Component: TextGenerateEffect }, // add custom effect
}

// Mapper component
export function TailwindMapper({
  text,
  variant,
  size,
  gradient,
  preset,
  colorScheme,
}: {
  text: string
  variant?: StyleVariant
  size?: StyleSize
  gradient?: GradientOption
  preset?: UIPreset
  colorScheme?: ColorScheme
}) {
  const presetMapping = preset ? UI_PRESET_MAP[preset] : null

  // If preset maps to a component, render it
  if (presetMapping?.Component) {
    const PresetComponent = presetMapping.Component
    return <PresetComponent words={text} />
  }

  // Otherwise, render a normal span with combined Tailwind classes
  const classes = [
    variant ? VARIANT_MAP[variant] : '',
    size ? SIZE_MAP[size] : '',
    gradient ? GRADIENT_MAP[gradient] : '',
    presetMapping?.className || '',
    colorScheme ? COLOR_SCHEME_MAP[colorScheme] : '',
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={classes}>{text}</span>
}
