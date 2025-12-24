import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'
import { headlineField } from '@/avuny/payload/fields/headline/HeadlineField'
import { subHeadlineField } from '@/avuny/payload/fields/subheadline /SubHeadlineField'
import { cardEffectOptions } from '@/avuny/options/cardEffectOptions'
import { backgroundEffectOptions } from '@/avuny/options/backgroundEffectOptions'

export const hero: Field = {
  interfaceName: 'HeroField',
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label: 'Avuny',
          value: 'avuny',
        },
      ],
      required: true,
    },
    headlineField,
    subHeadlineField,
    {
      name: 'heroImageType',
      type: 'select',
      defaultValue: 'none',
      label: 'Hero Image Type',
      options: cardEffectOptions,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'BackgroundEffect',
      type: 'select',
      defaultValue: 'none',
      label: 'Background Effect',
      options: backgroundEffectOptions,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
