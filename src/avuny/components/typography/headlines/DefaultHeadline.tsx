import { cn } from '@/utilities/ui'

import { BaseHeadlineProps, ThemeColor } from '@/avuny/types'
import { getFontWeight, getSizeClass } from '@/avuny/components/typography/utils/sizeMap'
import { textColorMap } from '@/avuny/components/typography/utils/colorMap'

interface DefaultHeadlineProps extends BaseHeadlineProps {
  color?: ThemeColor
}

export function DefaultHeadline({
  text,
  color = 'foreground',
  size = 'default',
  className,
}: DefaultHeadlineProps) {
  const sizeClass = getSizeClass(size)
  const weightClass = getFontWeight(size)

  return (
    <h1 className={cn(sizeClass, weightClass, 'tracking-tight', textColorMap[color], className)}>
      {text}
    </h1>
  )
}
