/**
 * Component
 *
 * Component type: navigationSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../sections/section-props'
import { NavigationSectionPageHeaderVar } from './navigation-section-page-header-var'
import { NavigationSectionPageFooterVar } from './navigation-section-page-footer-var'

const componentList = {
  ['Page header']: NavigationSectionPageHeaderVar,
  ['Page footer']: NavigationSectionPageFooterVar,
}

export interface NavigationSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  variation: string
  topic: any
  navigation: any
}

export const NavigationSection = (props: NavigationSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
