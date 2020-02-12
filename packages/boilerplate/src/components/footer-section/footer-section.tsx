/**
 * Component
 *
 * Component type: footerSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { FluidImage } from '../../views/image/image'
import { SectionProps } from '../../sections/section-props'
import { FooterSectionSingleVar } from './footer-section-single-var'

const componentList = {
  ['single']: FooterSectionSingleVar,
}

export interface FooterSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  backgroundColor: string
  navigation: any
}

export const FooterSection = (props: FooterSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
