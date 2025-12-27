import { ContactOption } from '@/avuny/features/forms/BookTour/ContactType'

export const ContactOptionEmailSubjects: Record<ContactOption, string> = {
  tour: 'Tour Request - TG Nursery',
  'summer-camp': 'Summer Camp Inquiry - TG Nursery',
  'winter-camp': 'Winter Camp Inquiry - TG Nursery',
  'after-school': 'After School Program Inquiry - TG Nursery',
  'contact-us': 'General Inquiry - TG Nursery',
}

export const ContactOptionMap: Record<ContactOption, string> = {
  tour: 'Book Tour',
  'summer-camp': 'Summer Camp',
  'winter-camp': 'Winter Camp',
  'after-school': 'After School',
  'contact-us': 'Contact us',
}
