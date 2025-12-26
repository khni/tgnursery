'use client'

import { BackgroundWrapper } from '@/avuny/components/BackgroundWrapper'
import { renderHeroImage } from '@/avuny/components/RenderCardWithImage'
import { Headline } from '@/avuny/components/typography/headlines'
import { subHeadlineComponentMap } from '@/avuny/components/typography/subheadlines'
import { CtasRenderer } from '@/avuny/cta/CtasRerender'
import { DialogSwitcher } from '@/avuny/features/dialog/DialogSwitcher'
import { Color, HeadlineProps, HeadlineVariant, Size } from '@/avuny/types'
import { BackgroundEffect } from '@/avuny/types/BackgroundEffect'
import { CardEffect } from '@/avuny/types/CardEffect'
import { SubHeadlineVariant } from '@/avuny/types/SubHeadlineVariant'
import { Cta } from '@/payload-types'

// import { BookTourDialog } from '@/sections/Home/BookTour'

import { motion } from 'motion/react'

type HeroProps = {
  headline?: { text?: string; colors: Color[]; size: Size; variant: HeadlineVariant }
  subHeadline?: { text?: string; colors: Color[]; size: Size; variant: SubHeadlineVariant }

  heroImageEffect?: CardEffect
  heroImageUrl?: string
  backgroundEffect?: BackgroundEffect
  backgroundImageUrl?: string
  ctas: Cta
}

export default function HeroPrimary({
  backgroundEffect,
  headline,
  subHeadline,
  heroImageEffect,
  heroImageUrl,
  ctas,
}: HeroProps) {
  const SubHeadline = subHeadlineComponentMap[subHeadline?.variant || 'primary']
  return (
    <section id="hero">
      <BackgroundWrapper backgroundEffect={backgroundEffect}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-10">
          {/* -------- Text Section -------- */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Headline
              headline={{
                text: headline?.text || '',
                variant: headline?.variant,
                appearance: { colors: headline?.colors || [], size: headline?.size || 'default' },
              }}
            />

            <SubHeadline text={subHeadline?.text || ''} color={subHeadline?.colors[0]} />

            <div className="mt-4 flex justify-center items-center w-full gap-4">
              <CtasRenderer ctas={ctas} DialogSwitcher={DialogSwitcher} />
            </div>
          </motion.div>
          {/* -------- Image Section -------- */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {renderHeroImage({ cardEffect: heroImageEffect, imageUrl: heroImageUrl })}
          </motion.div>
        </div>
        {/* {content && (
          <div className="p-10">
            <p className="mt-3 text-muted-foreground font-semibold text-lg max-w-xl mx-auto text-center">
              <RichText className="mb-6" data={content} />
            </p>
          </div>
        )} */}
      </BackgroundWrapper>
    </section>
  )
}
