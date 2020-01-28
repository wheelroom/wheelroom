/**
 * Component variation
 *
 * Component type: navigation
 * Variation: Single
 *
 */

import React from 'react'
import { Flex } from '../../views/core-elements/grid'
import { NavLinks } from './nav-links'
import { NavigationProps } from './navigation'

export const NavigationSingleVar = (props: NavigationProps) => {
  return (
    <Flex ncss={{ bg: 'black' }}>
      <NavLinks routes={props.routes} />
    </Flex>
  )
}
