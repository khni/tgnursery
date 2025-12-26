'use client'

import * as React from 'react'
import { ZodTypeAny } from 'zod'
import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { useForm, type FieldValues, type Path } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

/* ---------------------------------- types --------------------------------- */

export interface FormField {
  name: string
  label: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
}

type ServerActionResult =
  | { success: true }
  | { success: false; errors?: Record<string, string[]>; message?: string }

interface FormCardProps<TSchema extends ZodTypeAny, TValues extends FieldValues> {
  title: string
  description?: string
  fields: FormField[]
  schema: TSchema
  submitLabel?: string
  cancelLabel?: string
  action: (values: TValues) => Promise<ServerActionResult>
}

/* -------------------------------- component ------------------------------- */

export function FormCard<TSchema extends ZodTypeAny, TValues extends FieldValues>({
  title,
  description,
  fields,
  schema,
  submitLabel = 'Submit',
  cancelLabel,
  action,
}: FormCardProps<TSchema, TValues>) {
  const [isPending, startTransition] = useTransition()
  const [formError, setFormError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful },
  } = useForm<TValues>({
    resolver: zodResolver(schema as any),
  })

  function onSubmit(values: TValues) {
    setFormError(null)

    startTransition(async () => {
      const result = await action(values)

      if (!result.success) {
        if (result.errors) {
          Object.entries(result.errors).forEach(([key, messages]) => {
            setError(key as Path<TValues>, {
              message: messages.join(', '),
            })
          })
        }

        if (result.message) {
          setFormError(result.message)
        }
      }
    })
  }

  if (isSubmitSuccessful) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-12 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircle2 className="h-14 w-14 text-green-500 mb-4" />
        <h3 className="text-lg font-semibold">Submitted successfully</h3>
        <p className="text-muted-foreground mt-1">We’ll contact you shortly.</p>
      </motion.div>
    )
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>

        <CardContent className="grid gap-4">
          {formError && <p className="text-sm text-destructive">{formError}</p>}

          {fields.map((field) => {
            const name = field.name as Path<TValues>

            return (
              <div key={field.name} className="grid gap-2">
                <Label htmlFor={field.name}>{field.label}</Label>

                <Input
                  id={field.name}
                  type={field.type ?? 'text'}
                  placeholder={field.placeholder}
                  {...register(name)}
                />

                {errors[name]?.message && (
                  <p className="text-sm text-destructive">{String(errors[name]?.message)}</p>
                )}
              </div>
            )
          })}
        </CardContent>

        <CardFooter className="flex justify-end gap-2">
          {cancelLabel && (
            <Button type="button" variant="outline">
              {cancelLabel}
            </Button>
          )}

          <Button type="submit" disabled={isPending}>
            {isPending ? 'Submitting...' : submitLabel}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
