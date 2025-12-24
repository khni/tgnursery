import { SubHeadlineVariant } from '@/avuny/types/SubHeadlineVariant'
import { SubHeadlinePrimary } from './SubHeadlinePrimary'
import { SubHeadlineProps } from '@/avuny/components/typography/subheadlines/types'
import { SubHeadlineSecondary } from '@/avuny/components/typography/subheadlines/SubHeadlineSecondery'

export const subHeadlineComponentMap: Record<
  SubHeadlineVariant,
  React.ComponentType<SubHeadlineProps>
> = {
  primary: SubHeadlinePrimary,
  secondary: SubHeadlineSecondary,
}
