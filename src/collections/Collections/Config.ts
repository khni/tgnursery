import { CollectionConfig } from 'payload'
import { admin } from '@/access/admin'
import { contactOptions } from '@/avuny/features/forms/BookTour/contactOptions'
import { resend } from '@/collections/resend'

export const Contacts: CollectionConfig = {
  slug: 'contacts',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'mobile', 'options', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: admin,
    delete: admin,
  },
  hooks: {
    beforeChange: [
      async ({ data, originalDoc, operation }) => {
        // Send email only on create
        if (operation === 'create') {
          try {
            await resend.emails.send({
              from: 'tgnursery@gmail.com',
              to: 'khaledeskandrany@gmail.com',
              subject: `New contact: ${data.options}`,
              html: `<p>New contact submitted by ${data.name} (${data.email || 'no email'})</p>
                     <p>Mobile: ${data.mobile}</p>
                     <p>Option: ${data.options}</p>`,
            })
          } catch (error) {
            console.error('Failed to send email:', error)
          }
        }
        return data // Important to return the data object
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'mobile',
      type: 'text',
      required: true,
    },
    {
      name: 'options',
      type: 'select',
      required: true,
      options: contactOptions,
    },
  ],
}
