import { SubHeadlineProps } from '@/avuny/components/typography/subheadlines/types'
import { textColorMap } from '@/avuny/components/typography/utils/colorMap'

import { cn } from '@/utilities/ui'

export function SubHeadlinePrimary({ text, color = 'primary', className }: SubHeadlineProps) {
  return (
    <p
      className={cn(
        'mt-3 text-muted-foreground font-semibold text-lg max-w-xl mx-auto text-center',
        // textColorMap[color],
        className,
      )}
    >
      {text}
    </p>
  )
}
