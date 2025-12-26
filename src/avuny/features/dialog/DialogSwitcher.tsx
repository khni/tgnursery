'use client'

import { Page } from '@/payload-types'
import { DialogId } from './DialogId'
import { BookTourDialog } from '@/avuny/features/forms/BookTour'

type Props = {
  label: string
  dialog: NonNullable<Page['hero']['ctas']>[number]['dialog']
}

export const DialogSwitcher = ({ label, dialog }: Props) => {
  switch (dialog) {
    case 'book-tour':
      return <BookTourDialog />

    case 'contact-form':
      return <button>{label} – Contact Form Dialog</button>

    default:
      return null
  }
}
