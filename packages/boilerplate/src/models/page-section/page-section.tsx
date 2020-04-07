/**
 * Component
 *
 * Component type: pageSection
 *
 */

import React from 'react'
import { ActionProps } from '../action'
import { getVariation } from '../../core/lib/get-variation'
import { NavigationProps } from '../navigation'
import { PageSectionBlockVar } from './block/page-section-block-var'
import { PageSectionCardVar } from './card/page-section-card-var'
import { PageSectionFeaturedVar } from './featured/page-section-featured-var'
import { PageSectionGalleryVar } from './gallery/page-section-gallery-var'
import { PageSectionHeadlineVar } from './headline/page-section-headline-var'
import { PageSectionHeroVar } from './hero/page-section-hero-var'
import { PageSectionImageVar } from './image/page-section-image-var'
import { PageSectionNavigationVar } from './navigation/page-section-navigation-var'
import { PageSectionQuoteVar } from './quote/page-section-quote-var'
import { PageSectionTextVar } from './text/page-section-text-var'
import { PageSectionVideoVar } from './video/page-section-video-var'
import { PageSectionDividerVar } from './divider/page-section-divider-var'
import { SectionProps } from '../../core/section-views/section-props'
import { TextProps } from '../text'
import { TopicOptionString } from '../../core/lib/get-topic-options'
import { TopicProps } from '../topic'

const componentList = {
  ['block']: PageSectionBlockVar,
  ['card']: PageSectionCardVar,
  ['featured']: PageSectionFeaturedVar,
  ['gallery']: PageSectionGalleryVar,
  ['headline']: PageSectionHeadlineVar,
  ['hero']: PageSectionHeroVar,
  ['image']: PageSectionImageVar,
  ['navigation']: PageSectionNavigationVar,
  ['quote']: PageSectionQuoteVar,
  ['text']: PageSectionTextVar,
  ['video']: PageSectionVideoVar,
  ['divider']: PageSectionDividerVar,
}

export interface PageSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  actions: ActionProps[]
  navigation: NavigationProps
  text: TextProps
  title: string
  topicOptions: TopicOptionString[]
  topics: TopicProps[]
  variation: string
}

export const PageSection = (props: PageSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
