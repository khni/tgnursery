'use client'
import { AnimatedItems } from '@/components/AnimatedItems'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { motion } from 'motion/react'
import Image from 'next/image'
type CardData = {
  title: string
  description: string
  imageUrl?: string
  features?: string[]
  primaryAction?: string
  secondaryAction?: string
}

interface ResponsiveMediaCardProps {
  cards: CardData[]
}

export default function ResponsiveMediaCard({ cards }: ResponsiveMediaCardProps) {
  return (
    <div className="px-8 space-y-24">
      {cards.map((card, index) => (
        <div key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col md:flex-row items-center justify-center bg-card rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto"
          >
            {/* Image Section */}
            {card.imageUrl && (
              <motion.div
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            {/* Text Section */}
            <div className="p-8 md:p-10 text-center md:text-left space-y-6 w-full md:w-1/2">
              <TextGenerateEffect words={card.title} />

              <motion.p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {card.description}
              </motion.p>

              {/* Optional Features */}
              {card.features?.length && <AnimatedItems items={card.features} />}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
