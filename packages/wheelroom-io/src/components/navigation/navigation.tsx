/**
 * Component
 *
 * Component type: navigation
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { NavigationSingleVar } from './navigation-single-var'
import { NavigationGroupProps } from '../navigation-group/navigation-group'
import { ActionProps } from '../action/action'

const componentList = {
  ['single']: NavigationSingleVar,
}

export interface NavigationProps {
  action: ActionProps
  navigationGroup: NavigationGroupProps
}

export const Navigation = (props: NavigationProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
