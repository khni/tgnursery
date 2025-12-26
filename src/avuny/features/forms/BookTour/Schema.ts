import { z } from 'zod'

export const bookTourSchema = z.object({
  name: z.string().min(1, 'name is required').min(2, 'Full name must be at least 2 characters'),

  mobile: z
    .string()
    .min(1, 'Phone number is required')
    .min(8, 'Phone number must be at least 8 digits')
    .regex(/^\d+$/, 'Phone number must contain only digits'),
})
