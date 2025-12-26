'use client'

import Link from 'next/link'

import { Page } from '@/payload-types'
import { JSX } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utilities/ui'

type Props = {
  cta: NonNullable<Page['hero']['ctas']>[number]
  DialogSwitcher: ({
    label,
    dialog,
  }: {
    label: string
    dialog: NonNullable<Page['hero']['ctas']>[number]['dialog']
  }) => JSX.Element | null
  className?: string
}

export const CtaRenderer = ({ cta, className, DialogSwitcher }: Props) => {
  // LINK CTA
  if (cta.action === 'link') {
    if (!cta.href) return null

    return (
      <Link
        href={cta.href}
        className={cn(
          buttonVariants(),
          'bg-sky-400 hover:bg-orange-300 hover:text-sky-500 cursor-pointer text-white px-6 py-3 rounded-full text-lg shadow-lg transition-colors duration-300',
        )}
      >
        {cta.label}
      </Link>
    )
  }

  // DIALOG CTA
  if (cta.action === 'dialog') {
    if (!cta.dialog) return null

    return <DialogSwitcher label={cta.label} dialog={cta.dialog} />
  }

  return null
}
