/**
 * Component
 *
 * Component type: navigation
 *
 */

import React from 'react'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { NavigationFooterVar } from './navigation-footer-var'
import { NavigationHeaderVar } from './navigation-header-var'
import { NavigationSegmentProps } from '../navigation-segment/navigation-segment'
import { SectionProps } from '../../wheelroom/sections/section-props'

export interface NavigationProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  segments?: NavigationSegmentProps[]
}

const componentList = {
  ['footer']: NavigationFooterVar,
  ['header']: NavigationHeaderVar,
}

export const Navigation = (props: NavigationProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
