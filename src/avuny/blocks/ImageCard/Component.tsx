import { getPayloadMediaUrl } from '@/avuny/utils'
import { LensCard } from '@/components/LensCard'
import { ThreeDCard } from '@/components/ThreeDCard'
import { ImageCardBlock } from '@/payload-types'

export const ImageCard = (props: ImageCardBlock) => {
  const { cards, name, ctas, headline, subheadline, variant } = props
  const _cards = cards.map((card) => ({
    title: card.title,
    description: card.description || '',
    imageUrl: getPayloadMediaUrl(card.image) || '',
  }))

  switch (variant) {
    case 'threeD':
      return <ThreeDCard cards={_cards} />

    case 'lens':
      return <LensCard cards={_cards} />
    default:
      return <LensCard cards={_cards} />
  }
}
