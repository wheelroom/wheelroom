/**
 * Component
 *
 * Component type: navigation
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { NavigationSingleVar } from './navigation-single-var'
import { NavigationSegmentProps } from '../navigation-segment'
import { ActionProps } from '../action'

const componentList = {
  ['single']: NavigationSingleVar,
}

export interface NavigationProps {
  /** Gatsby fetched data */
  // __typename: string
  // title: string
  segments: NavigationSegmentProps[]

  /** Local prop */
  action: ActionProps
}

export const Navigation = (props: NavigationProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
