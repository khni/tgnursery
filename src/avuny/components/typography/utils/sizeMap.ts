import { Size } from '@/avuny/types'

export const getSizeClass = (size?: Size): string => {
  const sizeMap: Record<Size, string> = {
    default: 'text-4xl md:text-6xl',
    small: 'text-2xl md:text-4xl',
    large: 'text-5xl md:text-7xl',
    xlarge: 'text-6xl md:text-8xl',
  }

  return sizeMap[size || 'default']
}

export const getFontWeight = (size?: Size): string => {
  const weightMap: Record<Size, string> = {
    default: 'font-extrabold',
    small: 'font-bold',
    large: 'font-black',
    xlarge: 'font-black',
  }

  return weightMap[size || 'default']
}
