import { developer } from '@/access/developer'
import { ctaField } from '@/avuny/cta/CtaField'
import { headlineField } from '@/avuny/payload/fields/headline/HeadlineField'
import { subHeadlineField } from '@/avuny/payload/fields/subheadline /SubHeadlineField'
import { localizedTextAreaField, localizedTextField } from '@/avuny/payload/fields/textField'
import { Block } from 'payload'

export const ImageCard: Block = {
  slug: 'imageCard',
  interfaceName: 'ImageCardBlock',
  labels: {
    singular: 'Image Card Block',
    plural: 'Image Card Blocks',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        description: 'Internal name for this block',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,

      admin: {
        hidden: !developer,
        description: 'unique slug used for section id',
      },
    },
    {
      name: 'showInNav',
      type: 'checkbox',
      admin: {
        description: 'check it to be rendered in navbar',
        hidden: !developer,
      },
      defaultValue: false,
    },

    {
      name: 'variant',
      type: 'select',
      options: [
        {
          label: '3D',
          value: 'threeD',
        },
        {
          label: 'Lens',
          value: 'lens',
        },
        {
          label: 'Cover Image',
          value: 'cover',
        },
        {
          label: 'Responsive',
          value: 'responsive',
        },
      ],
      defaultValue: 'lens',
      admin: {
        hidden: !developer,
      },
    },
    localizedTextField('headline'),
    localizedTextAreaField('subheadline'),

    ctaField,
    {
      name: 'cards',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'features',
          type: 'array',
          fields: [localizedTextField('name')],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
