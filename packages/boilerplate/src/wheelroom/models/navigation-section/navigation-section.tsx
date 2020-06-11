/**
 * Component
 *
 * Component type: navigationSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { NavigationProps } from '../navigation/navigation'
import { NavigationSectionFooterVar } from './navigation-section-footer-var'
import { NavigationSectionHeaderVar } from './navigation-section-header-var'
import { SectionProps } from '../../../page-template/section-props'

const componentList = {
  ['header']: NavigationSectionHeaderVar,
  ['footer']: NavigationSectionFooterVar,
}

export interface NavigationSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  navigation?: NavigationProps[]
  eventId?: string
}

export const NavigationSection = (props: NavigationSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
