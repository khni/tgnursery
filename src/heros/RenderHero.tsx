import React from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'
import HeroPrimary from '@/avuny/components/heros/HeroPrimary'
import { getPayloadMediaUrl } from '@/avuny/utils'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null
  if (type === 'avuny') {
    console.log(props.subHeadline?.text, 'subHeadline')
    return (
      <HeroPrimary
        headline={{
          text: props.headline?.text || '',
          colors: props.headline?.appearance?.colors?.map((color) => color.color) || [],
          size: props.headline?.appearance?.size || 'default',
          variant: props.headline?.variant || 'default',
        }}
        subHeadline={{
          text: props.subHeadline?.text || '',
          colors: props.subHeadline?.appearance?.colors?.map((color) => color.color) || [],
          size: props.subHeadline?.appearance?.size || 'default',
          variant: props.subHeadline?.variant || 'primary',
        }}
        backgroundEffect={props.BackgroundEffect || 'none'}
        backgroundImageUrl={getPayloadMediaUrl(props.backgroundImage) || ''}
        heroImageUrl={getPayloadMediaUrl(props.backgroundImage) || ''}
        heroImageEffect={props.heroImageType || 'none'}
        ctas={props.ctas || []}
      />
    )
  }

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
