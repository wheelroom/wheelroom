/**
 * Component variation
 *
 * Component type: navigation
 * Variation: Single
 *
 */

import React from 'react'
import { NavLinks } from './nav-links'
import { NavigationProps } from './navigation'

export const NavigationSingleVar = (props: NavigationProps) => {
  return <NavLinks routes={props.routes} />
}
