'use client'
import { CtasRenderer } from '@/avuny/cta/CtasRerender'
import { DialogSwitcher } from '@/avuny/features/dialog/DialogSwitcher'
import { getPayloadMediaUrl } from '@/avuny/utils'
import { Gallery } from '@/components/Gallery'
import { MediaGalleryBlock } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { motion } from 'motion/react'

export const MediaGallery = ({
  variant,
  headline,
  subheadline,
  images,
  ctas,
}: MediaGalleryBlock) => {
  const _images = images?.map((img) => ({
    src: getPayloadMediaUrl(img.image) || '',
    alt: img.alt || '',
    id: img.id || '',
  }))
  if (!_images) {
    return
  }

  const GalleryComponent = () => {
    switch (variant) {
      case 'default':
        return <Gallery images={_images} />
    }
  }

  return (
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
          'mt-3 text-muted-foreground font-semibold text-lg max-w-xl mx-auto text-center',
        )}
      >
        {subheadline}
      </p>
      <GalleryComponent />
    </div>
  )
}
