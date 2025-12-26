'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { bookTourSchema } from '@/avuny/features/forms/BookTour/Schema'

export async function bookTourAction(values: unknown) {
  const parsed = bookTourSchema.safeParse(values)

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  const payload = await getPayload({ config: configPromise })

  await payload.create({
    collection: 'contacts',
    data: {
      name: parsed.data.name,
      mobile: parsed.data.mobile,
      options: 'tour',
    },
  })

  return { success: true }
}
