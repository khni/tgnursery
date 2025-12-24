import { ThemeColor } from '@/avuny/components/types'

type HeadlineProps = {
  text: string
  color?: ThemeColor
}

export function DefaultHeadline({ text, color = 'foreground' }: HeadlineProps) {
  return (
    <h1
      className={`
        text-4xl md:text-6xl font-extrabold tracking-tight
        text-${color}
      `}
    >
      {text}
    </h1>
  )
}
