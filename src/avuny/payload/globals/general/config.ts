import { editor } from '@/access/editor'
import type { GlobalConfig } from 'payload'

export const SiteGeneral: GlobalConfig = {
  slug: 'site-general',
  label: 'General Information and Settings',
  access: {
    read: () => true,
    update: editor,
  },
  fields: [
    {
      name: 'primaryContact',
      label: 'Primary Contact',
      type: 'group',
      fields: [
        {
          name: 'emails',
          type: 'array',
          fields: [{ name: 'email', type: 'email', required: true }],
        },
        {
          name: 'phones',
          type: 'array',
          fields: [{ name: 'phone', type: 'text', required: true }],
        },
        {
          name: 'addresses',
          type: 'array',
          fields: [{ name: 'address', type: 'textarea', required: true }],
        },
        {
          name: 'socials',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
            {
              name: 'type',
              type: 'select',
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'Twitter', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'YouTube', value: 'youtube' },
              ],
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'branding',
      label: 'Branding',
      type: 'group',
      fields: [{ name: 'logo', type: 'upload', relationTo: 'media' }],
    },
    {
      name: 'footer',
      label: 'Footer Settings',
      type: 'group',
      fields: [
        {
          name: 'headline',
          type: 'text',
          required: true,
        },
        {
          name: 'subheadline',
          type: 'text',
          required: true,
        },
        {
          name: 'companyName',
          type: 'text',
          required: true,
        },
        {
          name: 'creditType',
          type: 'select',
          required: true,
          defaultValue: 'developed',
          options: [
            { label: 'Developed by', value: 'developed' },
            { label: 'Designed & Developed by', value: 'designed-developed' },
          ],
        },
        {
          name: 'developerName',
          type: 'text',
          required: true,
        },
        {
          name: 'developerUrl',
          type: 'text',
          admin: {
            placeholder: 'https://avuny.com',
          },
        },
      ],
    },
  ],
}
