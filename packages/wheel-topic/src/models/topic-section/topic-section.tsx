/**
 * Component
 *
 * Component type: topicSection
 *
 */

import React from 'react'
import { getVariation } from '@wheelroom/core'
import { TopicSectionBlockVar } from './topic-section-block-var'
import { TopicSectionCardVar } from './topic-section-card-var'
import { TopicSectionDividerVar } from './topic-section-divider-var'
import { TopicSectionFeaturedVar } from './topic-section-featured-var'
import { TopicSectionGalleryVar } from './topic-section-gallery-var'
import { TopicSectionHeadlineVar } from './topic-section-headline-var'
import { TopicSectionHeroVar } from './topic-section-hero-var'
import { TopicSectionImageVar } from './topic-section-image-var'
import { TopicSectionModel } from './model'
import { TopicSectionQuoteVar } from './topic-section-quote-var'
import { TopicSectionShowcaseVar } from './topic-section-showcase-var'
import { TopicSectionVideoVar } from './topic-section-video-var'

const componentList = {
  block: TopicSectionBlockVar,
  card: TopicSectionCardVar,
  divider: TopicSectionDividerVar,
  featured: TopicSectionFeaturedVar,
  gallery: TopicSectionGalleryVar,
  headline: TopicSectionHeadlineVar,
  hero: TopicSectionHeroVar,
  image: TopicSectionImageVar,
  quote: TopicSectionQuoteVar,
  showcase: TopicSectionShowcaseVar,
  video: TopicSectionVideoVar,
}

export const TopicSection = (props: TopicSectionModel) => {
  const Variation = getVariation(props, componentList)
  return <Variation {...props} />
}
