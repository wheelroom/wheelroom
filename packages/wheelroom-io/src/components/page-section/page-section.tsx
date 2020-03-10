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
import { PageSectionGrootVar } from './page-section-groot-var'
import { PageSectionKleinVar } from './page-section-klein-var'

const componentList = {
  ['Groot']: PageSectionGrootVar,
  ['Klein']: PageSectionKleinVar,
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
