import { ContactOption } from '@/avuny/features/forms/BookTour/ContactType'

export interface ContactOptionItem {
  label: string
  value: ContactOption
}

export const contactOptions: ContactOptionItem[] = [
  { label: 'Tour', value: 'tour' },
  { label: 'Summer Camp', value: 'summer-camp' },
  { label: 'Winter Camp', value: 'winter-camp' },
  { label: 'After School', value: 'after-school' },
  { label: 'Contact Us', value: 'contact-us' },
]
