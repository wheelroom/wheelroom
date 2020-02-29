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
import { List } from '../../views/core-elements/list'
import { Any } from '../../views/core-elements/any'

export const NavigationSingleVar = (props: NavigationProps) => {
  return (
    <Any is={'nav'} ncss={{ label: 'Nav' }}>
      <List
        ncss={{
          label: 'NavItems',
          display: 'flex',
          flexDirection: 'row',
          listStyle: 'none',
          flexWrap: 'wrap',
          mb: 0,
          mt: 0,
          pl: 0,
        }}
      >
        <NavLinks pages={props.pages} />
      </List>
    </Any>
  )
}
