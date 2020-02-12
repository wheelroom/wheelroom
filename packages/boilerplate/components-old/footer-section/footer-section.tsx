/**
 * Component
 *
 * Component type: footerSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../sections/section-props'
import { FooterSectionSingleVar } from './footer-section-single-var'

const componentList = {
  ['single']: FooterSectionSingleVar,
}

export interface FooterSectionProps extends SectionProps {
  /** Gatsby fetched data */
  backgroundColor: string
  footerNavigation: any
  __typename: string
  title: string
}

export const FooterSection = (props: FooterSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
