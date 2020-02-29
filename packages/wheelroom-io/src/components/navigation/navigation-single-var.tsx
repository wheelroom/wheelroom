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
import { emotionCss } from '../../views/core-elements/emotion-css'

export const NavigationSingleVar = (props: NavigationProps) => {
  return (
    <ul
      css={emotionCss({
        ncss: {
          display: 'flex',
          flexDirection: 'row',
          listStyle: 'none',
          flexWrap: 'wrap',
          mb: 0,
          mt: 0,
          pl: 0,
          ...props.ncss,
        },
      })}
    >
      <NavLinks pages={props.pages} />
    </ul>
  )
}
