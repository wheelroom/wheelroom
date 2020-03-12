/**
 * Component
 *
 * Component type: pageSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../sections/section-props'
import { PageSectionCardsVar } from './page-section-cards-var'
import { PageSectionFeaturedListVar } from './page-section-featured-list-var'
import { PageSectionFeaturedVar } from './page-section-featured-var'
import { PageSectionHeadlineVar } from './page-section-headline-var'
import { PageSectionHeroVar } from './page-section-hero-var'
import { PageSectionImagesVar } from './page-section-images-var'
import { ActionProps } from '../action/action'
import { NavigationProps } from '../navigation/navigation'
import { TextProps } from '../text/text'
import { TopicProps } from '../topic/topic'

const componentList = {
  ['cards']: PageSectionCardsVar,
  ['featured list']: PageSectionFeaturedListVar,
  ['featured']: PageSectionFeaturedVar,
  ['headline']: PageSectionHeadlineVar,
  ['hero']: PageSectionHeroVar,
  ['images']: PageSectionImagesVar,
}

export interface PageSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  actions: ActionProps[]
  navigation: NavigationProps
  text: TextProps
  title: string
  topicOptions: string[]
  topics: TopicProps[]
  variation: string
}

export const PageSection = (props: PageSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
