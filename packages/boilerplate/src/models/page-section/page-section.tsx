/**
 * Component
 *
 * Component type: pageSection
 *
 */

import React from 'react'
import { ActionProps } from '../action'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { NavigationProps } from '../navigation'
import { PageSectionBlockVar } from './page-section-block-var'
import { PageSectionCardVar } from './page-section-card-var'
import { PageSectionFeaturedVar } from './page-section-featured-var'
import { PageSectionGalleryVar } from './page-section-gallery-var'
import { PageSectionHeadlineVar } from './page-section-headline-var'
import { PageSectionHeroVar } from './page-section-hero-var'
import { PageSectionImageVar } from './page-section-image-var'
import { PageSectionNavigationVar } from './page-section-navigation-var'
import { PageSectionQuoteVar } from './page-section-quote-var'
import { PageSectionShowcaseVar } from './page-section-showcase-var'
import { PageSectionTextVar } from './page-section-text-var'
import { PageSectionVideoVar } from './page-section-video-var'
import { PageSectionDividerVar } from './page-section-divider-var'
import { SectionProps } from '../../wheelroom/sections/section-props'
import { TextProps } from '../text'
import { TopicOptionString } from '../../wheelroom/lib/get-topic-options'
import { TopicProps } from '../topic'

const componentList = {
  ['block-wr']: PageSectionBlockVar,
  ['card-wr']: PageSectionCardVar,
  ['divider-wr']: PageSectionDividerVar,
  ['featured-wr']: PageSectionFeaturedVar,
  ['gallery-wr']: PageSectionGalleryVar,
  ['headline-wr']: PageSectionHeadlineVar,
  ['hero-wr']: PageSectionHeroVar,
  ['image-wr']: PageSectionImageVar,
  ['navigation-wr']: PageSectionNavigationVar,
  ['quote-wr']: PageSectionQuoteVar,
  ['showcase-wr']: PageSectionShowcaseVar,
  ['text-wr']: PageSectionTextVar,
  ['video-wr']: PageSectionVideoVar,
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
