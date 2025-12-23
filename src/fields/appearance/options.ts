// appearance.options.ts

export type StyleVariant = 'default' | 'muted' | 'hero'
export const STYLE_VARIANTS: { label: string; value: StyleVariant }[] = [
  { label: 'Default', value: 'default' },
  { label: 'Muted', value: 'muted' },
  { label: 'Hero', value: 'hero' },
]

export type StyleSize = 'sm' | 'md' | 'lg'
export const STYLE_SIZES: { label: string; value: StyleSize }[] = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
]

export type GradientOption = 'none' | 'primary' | 'hero'
export const GRADIENT_OPTIONS: { label: string; value: GradientOption }[] = [
  { label: 'None', value: 'none' },
  { label: 'Primary', value: 'primary' },
  { label: 'Hero', value: 'hero' },
]

export type UIPreset = 'gradient-card' | 'spotlight-card' | 'aurora-text' | 'text-generate-effect'
export const UI_PRESETS: { label: string; value: UIPreset }[] = [
  { label: 'Gradient Card', value: 'gradient-card' },
  { label: 'Spotlight Card', value: 'spotlight-card' },
  { label: 'Aurora Text', value: 'aurora-text' },
  { label: 'Text Generate', value: 'text-generate-effect' },
]

export type ColorScheme = 'primary' | 'secondary' | 'accent'
export const COLOR_SCHEMES: { label: string; value: ColorScheme }[] = [
  { label: 'Primary', value: 'primary' },
  { label: 'Secondary', value: 'secondary' },
  { label: 'Accent', value: 'accent' },
]
