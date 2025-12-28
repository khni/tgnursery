'use client'

import React from 'react'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import { motion } from 'motion/react'
import { AnimatedItems } from '@/components/AnimatedItems'
import { Separator } from '@/components/ui/separator'

type CardData = {
  title: string
  description: string
  imageUrl?: string
  features?: string[]
  primaryAction?: string
  secondaryAction?: string
}

interface ThreeDCardDemoProps {
  cards: CardData[]
}

export function ThreeDCard({ cards }: ThreeDCardDemoProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {card.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="min-h-16 text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {card.description}
              </CardItem>
              <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                <img
                  src={card.imageUrl}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={card.title}
                />
              </CardItem>
              <Separator className="my-4" />
              <AnimatedItems items={card.features} />

              {(card.primaryAction || card.secondaryAction) && (
                <div className="flex justify-between items-center mt-20">
                  {card.primaryAction && (
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      {card.primaryAction}
                    </CardItem>
                  )}
                  {card.secondaryAction && (
                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      {card.secondaryAction}
                    </CardItem>
                  )}
                </div>
              )}
            </CardBody>
          </CardContainer>
        </motion.div>
      ))}
    </div>
  )
}
