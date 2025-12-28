'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Card as UiCard, CardHeader, CardTitle, CardContent } from '../ui/card'
import { AnimatedItems } from '@/components/AnimatedItems'
import { features } from 'process'
import { Separator } from '@/components/ui/separator'

export type CoverCard = {
  title: string
  description: string
  imageUrl?: string
  features?: string[]
}

type CoverCardsProps = {
  cards: CoverCard[]
}

export default function CoverCards({ cards }: CoverCardsProps) {
  return (
    <div className="flex justify-center p-4">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          whileHover={{ scale: 1.03 }}
        >
          <UiCard className="h-full overflow-hidden rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-sky-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Cover image */}
            {card.imageUrl && (
              <div className="relative h-52 w-full">
                <Image src={card.imageUrl} alt={card.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <h3 className="text-xl font-bold drop-shadow">{card.title}</h3>
                </div>
              </div>
            )}

            <CardHeader>
              {!card.imageUrl && (
                <CardTitle className="text-xl text-sky-600 dark:text-sky-400">
                  {card.title}
                </CardTitle>
              )}
            </CardHeader>

            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">{card.description}</p>
              <Separator className="my-3" />
              {/* Features */}
              <AnimatedItems items={card.features} />
            </CardContent>
          </UiCard>
        </motion.div>
      ))}
    </div>
  )
}
