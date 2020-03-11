/**
 * Component
 *
 * Component type: navigationGroup
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../sections/section-props'
import { NavigationGroupSingleVar } from './navigation-group-single-var'
import { NavigationProps } from '../navigation/navigation'

const componentList = {
  ['single']: NavigationGroupSingleVar,
}

export interface NavigationGroupProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  navigationGroup: NavigationProps[]
}

export const NavigationGroup = (props: NavigationGroupProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
