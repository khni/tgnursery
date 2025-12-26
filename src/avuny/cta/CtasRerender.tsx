'use client'

import { CtaRenderer } from '@/avuny/cta/CtaRerender'
import { Page } from '@/payload-types'
import Link from 'next/link'

import { JSX } from 'react'

type Props = {
  ctas: Page['hero']['ctas']
  DialogSwitcher: ({
    label,
    dialog,
  }: {
    label: string
    dialog: NonNullable<Page['hero']['ctas']>[number]['dialog']
  }) => JSX.Element | null
  className?: string
}
export const CtasRenderer = ({ ctas, className, DialogSwitcher }: Props) => {
  if (!ctas?.length) return null

  return (
    <div className="flex gap-4">
      {ctas.map((cta) => (
        <CtaRenderer
          key={cta.id ?? `${cta.label}-${cta.action}`}
          cta={cta}
          className={className}
          DialogSwitcher={DialogSwitcher}
        />
      ))}
    </div>
  )
}
