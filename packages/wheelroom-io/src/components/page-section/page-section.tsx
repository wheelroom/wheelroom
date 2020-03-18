/**
 * Component
 *
 * Component type: pageSection
 *
 */

import { ActionProps } from '../action/action'
import { getVariation } from '../../lib/get-variation'
import { NavigationProps } from '../navigation/navigation'
import { PageSectionCardsVar } from './page-section-cards-var'
import { PageSectionFeaturedListVar } from './page-section-featured-list-var'
import { PageSectionFeaturedVar } from './page-section-featured-var'
import { PageSectionHeadlineVar } from './page-section-headline-var'
import { PageSectionHeroVar } from './page-section-hero-var'
import { PageSectionImagesVar } from './page-section-images-var'
import { PageSectionNavigationVar } from './page-section-navigation-var'
import { SectionProps } from '../../sections/section-props'
import { TextProps } from '../text/text'
import { TopicProps } from '../topic/topic'
import React from 'react'

const componentList = {
  ['cards']: PageSectionCardsVar,
  ['featured list']: PageSectionFeaturedListVar,
  ['featured']: PageSectionFeaturedVar,
  ['headline']: PageSectionHeadlineVar,
  ['hero']: PageSectionHeroVar,
  ['images']: PageSectionImagesVar,
  ['navigation']: PageSectionNavigationVar,
}

export type TopicOption =
  | 'Hide icon'
  | 'Hide image'
  | 'Hide heading'
  | 'Hide abstract'
  | 'Hide action'
  | 'Reversed order'

export interface PageSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  actions: ActionProps[]
  navigation: NavigationProps
  text: TextProps
  title: string
  topicOptions: TopicOption[]
  topics: TopicProps[]
  variation: string
}

export const PageSection = (props: PageSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
