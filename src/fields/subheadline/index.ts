import { AppearanceField } from '@/fields/appearance'
import { Field } from 'payload'

export const SubheadlineField = <T extends string>(
  uiPresets: { label: string; value: T }[],
): Field => ({
  name: 'subheadline',
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
