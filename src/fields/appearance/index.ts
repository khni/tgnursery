import type { Field } from 'payload'
import { STYLE_VARIANTS, STYLE_SIZES, GRADIENT_OPTIONS, COLOR_SCHEMES } from './options'

export const AppearanceField = <T extends string>(
  uiPresets: { label: string; value: T }[],
): Field => ({
  name: 'appearance',
  type: 'group',
  fields: [
    {
      name: 'mode',
      type: 'radio',
      defaultValue: 'style',
      options: [
        { label: 'Standard Style', value: 'style' },
        { label: 'UI Preset', value: 'preset' },
        { label: 'Layout Text Flip', value: 'layoutTextFlip' },
      ],
    },
    {
      name: 'style',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData?.mode === 'style',
      },
      fields: [
        {
          name: 'variant',
          type: 'select',
          options: STYLE_VARIANTS,
          defaultValue: 'default',
        },
        {
          name: 'size',
          type: 'select',
          options: STYLE_SIZES,
          defaultValue: 'md',
        },
        {
          name: 'gradient',
          type: 'select',
          options: GRADIENT_OPTIONS,
          defaultValue: 'none',
        },
      ],
    },
    {
      name: 'uiPreset',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData?.mode === 'preset',
      },
      fields: [
        {
          name: 'preset',
          type: 'select',
          required: true,
          options: uiPresets,
        },
        {
          name: 'colorScheme',
          type: 'select',
          options: COLOR_SCHEMES,
          defaultValue: 'primary',
        },
      ],
    },
    {
      name: 'textFlip',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData?.mode === 'textFlip',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'words',
          type: 'text',
          required: true,
        },
        {
          name: 'colorScheme',
          type: 'select',
          options: COLOR_SCHEMES,
          defaultValue: 'primary',
        },
      ],
    },
  ],
})
