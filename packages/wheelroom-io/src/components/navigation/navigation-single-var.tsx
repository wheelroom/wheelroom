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
import { GLink } from '../../views/core-elements/g-link'
import { Flex } from '../../views/core-elements/grid'

export const NavigationSingleVar = (props: NavigationProps) => {
  return (
    <Flex>
      <GLink to="/" aria-label="Wheelroom, Back to homepage">
        Wheelroom Logo
      </GLink>
      <Flex is={'nav'} ncss={{ label: 'Nav' }}>
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
      </Flex>
    </Flex>
  )
}
