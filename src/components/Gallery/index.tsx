'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Card } from '@/components/ui/card'

type GalleryImage = {
  id: string
  src: string
  alt?: string
  width?: number
  height?: number
}

type GalleryProps = {
  images: GalleryImage[]
}

export function Gallery({ images }: GalleryProps) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null)

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 ">
        {images.map((image) => (
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <Card
                onClick={() => setActiveImage(image)}
                className="group cursor-pointer overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt ?? ''}
                    width={500}
                    height={800}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Card>
            </DialogTrigger>

            <DialogContent className="max-w-5xl border-none w-full h-full bg-transparent p-0 shadow-none">
              <div className="relative aspect-video w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt ?? ''}
                  fill
                  className="object-contain bg-black"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  )
}
