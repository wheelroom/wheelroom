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
import { PageSectionBlogVar } from './page-section-blog-var'
import { PageSectionCardVar } from './page-section-card-var'
import { PageSectionDividerVar } from './page-section-divider-var'
import { PageSectionFeaturedVar } from './page-section-featured-var'
import { PageSectionGalleryVar } from './page-section-gallery-var'
import { PageSectionHeadlineVar } from './page-section-headline-var'
import { PageSectionHeroVar } from './page-section-hero-var'
import { PageSectionImageVar } from './page-section-image-var'
import { PageSectionNavigationVar } from './page-section-navigation-var'
import { PageSectionPriceTableVar } from './page-section-price-table-var'
import { PageSectionQuoteVar } from './page-section-quote-var'
import { PageSectionShowcaseVar } from './page-section-showcase-var'
import { PageSectionTextVar } from './page-section-text-var'
import { PageSectionVideoVar } from './page-section-video-var'
import { SectionProps } from '../../wheelroom/sections/section-props'
import { TextProps } from '../text'
import { TopicOptionString } from '../../wheelroom/lib/get-topic-options'
import { TopicProps } from '../topic'
import { TopicTableProps } from '../topic-table'

const componentList = {
  ['block-wr']: PageSectionBlockVar,
  ['blog-wr']: PageSectionBlogVar,
  ['card-wr']: PageSectionCardVar,
  ['divider-wr']: PageSectionDividerVar,
  ['featured-wr']: PageSectionFeaturedVar,
  ['gallery-wr']: PageSectionGalleryVar,
  ['headline-wr']: PageSectionHeadlineVar,
  ['hero-wr']: PageSectionHeroVar,
  ['image-wr']: PageSectionImageVar,
  ['navigation-wr']: PageSectionNavigationVar,
  ['price-table-wr']: PageSectionPriceTableVar,
  ['quote-wr']: PageSectionQuoteVar,
  ['showcase-wr']: PageSectionShowcaseVar,
  ['text-wr']: PageSectionTextVar,
  ['video-wr']: PageSectionVideoVar,
}

export interface PageSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  actions: ActionProps[]
  navigation: NavigationProps[]
  text: TextProps
  title: string
  topicOptions: TopicOptionString[]
  topics: TopicProps[]
  topicTables: TopicTableProps[]
  variation: string
  eventId: string
}

export const PageSection = (props: PageSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
