import { FormCard } from '@/avuny/components/CustomForm'
import { bookTourAction } from '@/avuny/features/forms/BookTour/actions/bookTourAction'
import { ContactOption } from '@/avuny/features/forms/BookTour/ContactType'
import { bookTourSchema } from '@/avuny/features/forms/BookTour/Schema'

export function BookTourForm({
  option,
  title,
  description,
}: {
  option: ContactOption
  title: string
  description: string
}) {
  return (
    <FormCard
      title={title}
      description={description}
      schema={bookTourSchema}
      submitLabel="Submit"
      action={(values) => bookTourAction(values, option)} // ✅ server action reference
      fields={[
        { name: 'name', label: 'Full Name' },
        { name: 'mobile', label: 'Phone', type: 'tel' },
      ]}
    />
  )
}
