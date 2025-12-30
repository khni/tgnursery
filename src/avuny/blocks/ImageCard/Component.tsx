'use client'
import { CtasRenderer } from '@/avuny/cta/CtasRerender'
import { DialogSwitcher } from '@/avuny/features/dialog/DialogSwitcher'
import { getPayloadMediaUrl } from '@/avuny/utils'
import CoverCards from '@/components/CoverCard'
import { LensCard } from '@/components/LensCard'
import ResponsiveMediaCard from '@/components/ResponsiveMediaCard'
import { ThreeDCard } from '@/components/ThreeDCard'
import { ImageCardBlock } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { motion } from 'motion/react'
import { ReactNode } from 'react'

export const ImageCard = (props: ImageCardBlock) => {
  const { cards, name, ctas, headline, subheadline, variant } = props
  const _cards = cards.map((card) => ({
    title: card.title,
    description: card.description || '',
    imageUrl: getPayloadMediaUrl(card.image) || '',
    features: card.features?.map((feature) => feature.name!),
  }))
  const Ctas = (
    <div className="mt-4 flex justify-center items-center w-full gap-4">
      <CtasRenderer ctas={ctas} DialogSwitcher={DialogSwitcher} />
    </div>
  )

  const ImageCardWrapper = ({ children }: { children: ReactNode }) => (
    <div className="flex flex-col p-5">
      {headline && (
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent"
        >
          {headline}
        </motion.h2>
      )}
      <div className=" flex justify-center items-center w-full gap-4">
        <CtasRenderer ctas={ctas} DialogSwitcher={DialogSwitcher} />
      </div>
      <p
        className={cn(
          'mt-3 mb-6 text-muted-foreground font-semibold text-lg max-w-xl mx-auto text-center',
        )}
      >
        {subheadline}
      </p>
      {children}
    </div>
  )
  switch (variant) {
    case 'threeD':
      return <ThreeDCard cards={_cards} />

    case 'lens':
      return <LensCard cards={_cards} />
    case 'cover':
      return <CoverCards cards={_cards} />
    case 'responsive':
      return (
        <ImageCardWrapper>
          <ResponsiveMediaCard cards={_cards} />
        </ImageCardWrapper>
      )

    default:
      return (
        <ImageCardWrapper>
          <LensCard cards={_cards} />
        </ImageCardWrapper>
      )
  }
}
