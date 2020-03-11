/**
 * Component
 *
 * Component type: pageSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { FluidImage } from '../../views/image/image'
import { SectionProps } from '../../sections/section-props'
import { PageSectionExtraLargeVar } from './page-section-extra-large-var'
import { PageSectionLargeVar } from './page-section-large-var'
import { PageSectionMediumVar } from './page-section-medium-var'
import { PageSectionSmallVar } from './page-section-small-var'
import { PageSectionQuoteVar } from './page-section-quote-var'

const componentList = {
  ['extra-large']: PageSectionExtraLargeVar,
  ['large']: PageSectionLargeVar,
  ['medium']: PageSectionMediumVar,
  ['small']: PageSectionSmallVar,
  ['quote']: PageSectionQuoteVar,
}

export interface PageSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  variation: string
  topics: any
  text: any
  navigation: any
  actions: any
}

export const PageSection = (props: PageSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
