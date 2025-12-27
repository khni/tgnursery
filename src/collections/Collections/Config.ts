import { CollectionConfig } from 'payload'
import { admin } from '@/access/admin'
import { contactOptions } from '@/avuny/features/forms/BookTour/contactOptions'
import { resend } from '@/collections/resend'
import { error } from 'console'
import { ContactOption } from '@/avuny/features/forms/BookTour/ContactType'
import {
  ContactOptionEmailSubjects,
  ContactOptionMap,
} from '@/avuny/features/forms/BookTour/contactMap'

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
        const recieverEmail = process.env.RECEIVER_EMAIL
        if (!recieverEmail) {
          throw new Error('recieverEmail is not defiend')
        }
        const senderEmail = process.env.SENDER_EMAIL
        if (!senderEmail) {
          throw new Error('recieverEmail is not defiend')
        }
        const option = data.options as ContactOption

        const subject = ContactOptionEmailSubjects[option] ?? 'New Contact Inquiry - TG Nursery'
        const formName = ContactOptionMap[option]
        // Send email only on create
        if (operation === 'create') {
          try {
            await resend.emails.send({
              from: senderEmail,
              to: [recieverEmail],
              subject,
              html: `
           <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 8px;">
  <h2 style="color: #1a1a1a; font-size: 22px; margin-bottom: 20px;">${subject}</h2>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Name:</td>
      <td style="padding: 8px 0;">${data.name}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Email:</td>
      <td style="padding: 8px 0;">${data.email || 'Not provided'}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Mobile:</td>
      <td style="padding: 8px 0;">${data.mobile || 'Not provided'}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Inquiry Type:</td>
      <td style="padding: 8px 0;">${option}</td>
    </tr>
    ${
      data.message
        ? `
    <tr>
      <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
      <td style="padding: 8px 0;">${data.message}</td>
    </tr>`
        : ''
    }
  </table>

  <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
  <p style="font-size: 12px; color: #999; text-align: center;">
    This message was automatically generated from the ${formName} Form.
  </p>
</div>

          `,
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
