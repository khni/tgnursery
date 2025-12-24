import { ThemeColor } from '@/avuny/types'

export const gradientFromMap: Record<ThemeColor, string> = {
  foreground: 'from-foreground',
  primary: 'from-primary',
  secondary: 'from-secondary',
  muted: 'from-muted',
  accent: 'from-accent',
  destructive: 'from-destructive',
}

export const gradientToMap: Record<ThemeColor, string> = {
  foreground: 'to-foreground',
  primary: 'to-primary',
  secondary: 'to-secondary',
  muted: 'to-muted',
  accent: 'to-accent',
  destructive: 'to-destructive',
}

export const textColorMap: Record<ThemeColor, string> = {
  foreground: 'text-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary',
  muted: 'text-muted',
  accent: 'text-accent',
  destructive: 'text-destructive',
}
