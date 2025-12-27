import { FormCard } from '@/avuny/components/CustomForm'
import { bookTourAction } from '@/avuny/features/forms/BookTour/actions/bookTourAction'
import { ContactOption } from '@/avuny/features/forms/BookTour/ContactType'
import { bookTourSchema } from '@/avuny/features/forms/BookTour/Schema'

export function BookTourForm({ option }: { option: ContactOption }) {
  return (
    <FormCard
      title="Book a Tour"
      description="Fill out the form to book your tour."
      schema={bookTourSchema}
      submitLabel="Book Tour"
      action={(values) => bookTourAction(values, option)} // ✅ server action reference
      fields={[
        { name: 'name', label: 'Full Name' },
        { name: 'mobile', label: 'Phone', type: 'tel' },
      ]}
    />
  )
}
