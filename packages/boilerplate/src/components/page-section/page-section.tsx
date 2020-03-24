/**
 * Component
 *
 * Component type: pageSection
 *
 */

import { ActionProps } from '../action'
import { getVariation } from '../../lib/get-variation'
import { NavigationProps } from '../navigation'
import { PageSectionCardsVar } from './page-section-cards-var'
import { PageSectionFeaturedVar } from './page-section-featured-var'
import { PageSectionHeadlineVar } from './page-section-headline-var'
import { PageSectionHeroVar } from './page-section-hero-var'
import { PageSectionImagesVar } from './page-section-images-var'
import { PageSectionNavigationVar } from './page-section-navigation-var'
import { SectionProps } from '../../sections/section-props'
import { TextProps } from '../text'
import { TopicProps } from '../topic'
import React from 'react'
import { TopicOptionString } from '../../lib/get-topic-options'

const componentList = {
  ['cards']: PageSectionCardsVar,
  ['featured']: PageSectionFeaturedVar,
  ['headline']: PageSectionHeadlineVar,
  ['hero']: PageSectionHeroVar,
  ['images']: PageSectionImagesVar,
  ['navigation']: PageSectionNavigationVar,
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
