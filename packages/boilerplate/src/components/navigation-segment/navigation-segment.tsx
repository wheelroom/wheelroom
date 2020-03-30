/**
 * Component
 *
 * Component type: navigationSegment
 *
 */

import React from 'react'
import { getVariation } from '../../core/lib/get-variation'
import { NavigationSegmentSingleVar } from './navigation-segment-single-var'
import { PageProps } from '../page/page'

const componentList = {
  ['single']: NavigationSegmentSingleVar,
}

export interface NavigationSegmentProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  pages: PageProps[]
}

export const NavigationSegment = (props: NavigationSegmentProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
