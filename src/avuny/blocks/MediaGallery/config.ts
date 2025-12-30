import { ctaField } from '@/avuny/cta/CtaField'
import type { Block } from 'payload'

export const MediaGallery: Block = {
  slug: 'mediaGallery',
  interfaceName: 'MediaGalleryBlock',
  labels: {
    singular: 'Media Gallery',
    plural: 'Media Galleries',
  },

  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: false,
      localized: true,
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subheadline',
      localized: true,
      required: false,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        description: 'unique slug used for section id',
      },
    },
    {
      name: 'variant',
      type: 'select',
      options: [
        {
          label: ' Default',
          value: 'default',
        },
      ],
    },
    ctaField,
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // your Media collection
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt text',
          required: false,
          localized: true,
        },
      ],
    },
  ],
}
