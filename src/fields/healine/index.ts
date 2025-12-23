import { AppearanceField } from '@/fields/appearance'
import type { Field } from 'payload'

export const HeadlineField = <T extends string>(
  uiPresets: { label: string; value: T }[],
): Field => ({
  name: 'headline',
  type: 'group',
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    AppearanceField(uiPresets),
  ],
})
