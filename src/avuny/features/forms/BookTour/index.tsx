'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { BaseDialog } from '@/avuny/components/BaseDialog'
import { AnimatedSwitch } from '@/avuny/components/AnimatedSwitch'
import { BookTourForm } from '@/avuny/features/forms/BookTour/Form'

export function BookTourDialog() {
  const [open, setOpen] = useState(false)

  return (
    <BaseDialog
      open={open}
      onOpenChange={setOpen}
      contentClassName="sm:max-w-[425px]"
      trigger={
        <Button className="bg-orange-300 hover:bg-sky-800 text-white rounded-full px-6 py-3">
          Book a Tour
        </Button>
      }
    >
      {/* <AnimatedSwitch show={true} first={<BookTourForm />} second={null} /> */}
      <BookTourForm />
    </BaseDialog>
  )
}
