/**
 * Component
 *
 * Component type: navigation
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { NavigationSingleVar } from './navigation-single-var'

const componentList = {
  ['single']: NavigationSingleVar,
}

export interface NavigationProps {
  /** Gatsby fetched data */
  routes: any
}

export const Navigation = (props: NavigationProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
