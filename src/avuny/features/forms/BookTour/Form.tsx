import { FormCard } from '@/avuny/components/CustomForm'
import { bookTourAction } from '@/avuny/features/forms/BookTour/actions/bookTourAction'
import { bookTourSchema } from '@/avuny/features/forms/BookTour/Schema'

export function BookTourForm() {
  return (
    <FormCard
      title="Book a Tour"
      description="Fill out the form to book your tour."
      schema={bookTourSchema}
      submitLabel="Book Tour"
      action={bookTourAction} // ✅ server action reference
      fields={[
        { name: 'name', label: 'Full Name' },
        { name: 'mobile', label: 'Phone', type: 'tel' },
      ]}
    />
  )
}
