/**
 * Component
 *
 * Component type: pageSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../sections/section-props'
import { PageSectionFullVar } from './page-section-full-var'
import { PageSectionHalfVar } from './page-section-half-var'
import { PageSectionQuarterVar } from './page-section-quarter-var'
import { PageSectionUnitVar } from './page-section-unit-var'
import { ActionProps } from '../action'
import { NavigationProps } from '../navigation'
import { TopicProps } from '../topic'
import { TextProps } from '../text'

const componentList = {
  ['full']: PageSectionFullVar,
  ['half']: PageSectionHalfVar,
  ['quarter']: PageSectionQuarterVar,
  ['unit']: PageSectionUnitVar,
}

export interface PageSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  variation: string
  topics: TopicProps[]
  text: TextProps
  navigation: NavigationProps
  actions: ActionProps[]
}

export const PageSection = (props: PageSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
