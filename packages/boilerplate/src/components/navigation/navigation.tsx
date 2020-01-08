/**
 * Component
 *
 * Component type: navigation
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../sections/section-props'
import { NavigationSingleVar } from './navigation-single-var'

const componentList = {
  ['single']: NavigationSingleVar,
}

export interface NavigationProps extends SectionProps {
  /** Gatsby fetched data */
  routes: any
  __typename: string
  title: string
}

export const Navigation = (props: NavigationProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
