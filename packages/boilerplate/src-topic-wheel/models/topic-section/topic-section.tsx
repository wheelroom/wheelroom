/**
 * Component
 *
 * Component type: pageSection
 *
 */

import React from 'react'
import { getVariation } from '../../../src-core'
import { PageSectionBlockVar } from './topic-section-block-var'
import { PageSectionCardVar } from './topic-section-card-var'
import { PageSectionDividerVar } from './topic-section-divider-var'
import { PageSectionFeaturedVar } from './topic-section-featured-var'
import { PageSectionGalleryVar } from './topic-section-gallery-var'
import { PageSectionHeadlineVar } from './topic-section-headline-var'
import { PageSectionHeroVar } from './topic-section-hero-var'
import { PageSectionImageVar } from './topic-section-image-var'
import { TopicSectionProps } from './model-types'
import { PageSectionQuoteVar } from './topic-section-quote-var'
import { PageSectionShowcaseVar } from './topic-showcase-var'
import { PageSectionVideoVar } from './topic-video-var'

const componentList = {
  ['block']: PageSectionBlockVar,
  ['card']: PageSectionCardVar,
  ['divider']: PageSectionDividerVar,
  ['featured']: PageSectionFeaturedVar,
  ['gallery']: PageSectionGalleryVar,
  ['headline']: PageSectionHeadlineVar,
  ['hero']: PageSectionHeroVar,
  ['image']: PageSectionImageVar,
  ['quote']: PageSectionQuoteVar,
  ['showcase']: PageSectionShowcaseVar,
  ['video']: PageSectionVideoVar,
}

export const TopicSection = (props: TopicSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
