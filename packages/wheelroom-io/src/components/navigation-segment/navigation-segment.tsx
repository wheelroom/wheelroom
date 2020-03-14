/**
 * Component
 *
 * Component type: navigationSegment
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { FluidImage } from '../../views/core-elements/image'
import { NavigationSegmentSingleVar } from './navigation-segment-single-var'

const componentList = {
  ['single']: NavigationSegmentSingleVar,
}

export interface NavigationSegmentProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  pages: any
}

export const NavigationSegment = (props: NavigationSegmentProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
