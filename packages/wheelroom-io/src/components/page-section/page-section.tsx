/**
 * Component
 *
 * Component type: pageSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../sections/section-props'
import { PageSectionLargeVar } from './page-section-large-var'
import { PageSectionSmallVar } from './page-section-small-var'

const componentList = {
  ['Large']: PageSectionLargeVar,
  ['Small']: PageSectionSmallVar,
}

export interface PageSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  variation: string
  topics: any
  text: any
}

export const PageSection = (props: PageSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
