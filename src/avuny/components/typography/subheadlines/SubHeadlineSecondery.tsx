import { SubHeadlineProps } from '@/avuny/components/typography/subheadlines/types'
import { textColorMap } from '@/avuny/components/typography/utils/colorMap'

import { cn } from '@/utilities/ui'

export function SubHeadlineSecondary({ text, color = 'muted', className }: SubHeadlineProps) {
  return (
    <p
      className={cn(
        'mt-2 text-base max-w-lg mx-auto text-center leading-relaxed',
        textColorMap[color],
        className,
      )}
    >
      {text}
    </p>
  )
}
