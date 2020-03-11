/**
 * Component
 *
 * Component type: navigationGroup
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { FluidImage } from '../../views/image/image'
import { SectionProps } from '../../sections/section-props'
import { NavigationGroupSingleVar } from './navigation-group-single-var'

const componentList = {
  ['single']: NavigationGroupSingleVar,
}

export interface NavigationGroupProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  navigationGroup: any
}

export const NavigationGroup = (props: NavigationGroupProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
