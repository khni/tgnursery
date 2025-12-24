import { CardEffect } from '@/avuny/types/CardEffect'
import { CometCard } from '@/components/ui/comet-card'
import { PixelatedCanvas } from '@/components/ui/pixelated-canvas'
import Image from 'next/image'
export const renderHeroImage = ({
  cardEffect,
  imageUrl,
}: {
  cardEffect?: CardEffect
  imageUrl?: string
}) => {
  if (!imageUrl) return null

  if (cardEffect === 'CometCard') {
    return (
      <CometCard>
        <Image
          width={800}
          height={600}
          src={imageUrl}
          alt="Hero image"
          className="w-80 rounded-2xl object-cover shadow-lg"
        />
      </CometCard>
    )
  }

  if (cardEffect === 'none') {
    return (
      <Image
        width={800}
        height={600}
        src={imageUrl}
        alt="Hero image"
        className="w-80 rounded-xl object-cover opacity-90"
      />
    )
  }
  if (cardEffect === 'pixelatedCanvas') {
    return (
      <div className="mx-auto mt-8 flex w-full items-center justify-center">
        <PixelatedCanvas
          src={imageUrl}
          width={800}
          height={600}
          cellSize={4}
          dotScale={0.9}
          shape="square"
          backgroundColor="#000000"
          dropoutStrength={0.1}
          interactive
          distortionStrength={0.1}
          distortionRadius={200}
          distortionMode="repel"
          followSpeed={0.2}
          jitterStrength={4}
          jitterSpeed={1}
          sampleAverage
          className="rounded-xl shadow-lg"
        />
      </div>
    )
  }

  return null
}
