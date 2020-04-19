import React from 'react'
import { Wheel } from '../../types'
import { Ul } from '../../element/self'
import { NavHeaderListItem } from './nav-header-list-item'
import { PageProps } from '../../../../models/page'
import { NavHeaderListWheelStyle } from './presets/nav-header-list-preset'

interface NavHeaderListWheel extends Wheel {
  style: NavHeaderListWheelStyle
}

export const NavHeaderList = (props: {
  pages: PageProps[]
  wheel: NavHeaderListWheel
}) => {
  return (
    <Ul wheel={props.wheel}>
      <NavHeaderListItem
        pages={props.pages}
        wheel={{ ...props.wheel, style: props.wheel.style.listItem }}
      />
    </Ul>
  )
}
