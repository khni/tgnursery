'use client'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ReactNode } from 'react'

interface BaseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  trigger: ReactNode
  children: ReactNode
  contentClassName?: string
}

export function BaseDialog({
  open,
  onOpenChange,
  trigger,
  children,
  contentClassName,
}: BaseDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={contentClassName}>{children}</DialogContent>
    </Dialog>
  )
}
