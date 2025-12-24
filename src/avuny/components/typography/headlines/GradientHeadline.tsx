import { gradientFromMap, gradientToMap } from '@/avuny/components/typography/utils/colorMap'
import { getFontWeight, getSizeClass } from '@/avuny/components/typography/utils/sizeMap'
import { BaseHeadlineProps, ThemeColor } from '@/avuny/types'
import { cn } from '@/utilities/ui'

interface GradientHeadlineProps extends BaseHeadlineProps {
  from?: ThemeColor
  to?: ThemeColor
}

export function GradientHeadline({
  text,
  from = 'primary',
  to = 'secondary',
  size = 'default',
  className = '',
}: GradientHeadlineProps) {
  const sizeClass = getSizeClass(size)
  const weightClass = getFontWeight(size)

  return (
    <h1
      className={cn(
        sizeClass,
        weightClass,
        'tracking-tight bg-gradient-to-r   bg-clip-text text-transparent',
        gradientFromMap[from],
        gradientToMap[to],
        className,
      )}
    >
      {text}
    </h1>
  )
}
