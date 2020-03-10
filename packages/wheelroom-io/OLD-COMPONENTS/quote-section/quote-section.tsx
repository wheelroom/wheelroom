/**
 * Component
 *
 * Component type: quoteSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { FluidImage } from '../../views/image/image'
import { SectionProps } from '../../sections/section-props'
import { QuoteSectionSingleVar } from './quote-section-single-var'

const componentList = {
  ['single']: QuoteSectionSingleVar,
}

export interface QuoteSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  subHeading: string
  abstract: {
    abstract: string
  }
  image: FluidImage
}

export const QuoteSection = (props: QuoteSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
