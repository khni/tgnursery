import { DialogId } from './DialogId'

export interface DialogOption {
  label: string
  value: DialogId
}

export const dialogOptions: DialogOption[] = [
  { label: 'Book Tour', value: 'book-tour' },
  { label: 'Contact Form', value: 'contact-form' },
]
