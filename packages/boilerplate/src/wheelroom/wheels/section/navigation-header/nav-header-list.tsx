import React from 'react'
import { Wheel } from '../../types'
import { Ul } from '../../element/self'
import { NavHeaderListItem } from './nav-header-list-item'
import { NavHeaderListWheelStyle } from './presets/nav-header-list-preset'
import { ActionProps } from '../../../../models/action/action'

interface NavHeaderListWheel extends Wheel {
  style: NavHeaderListWheelStyle
}

export const NavHeaderList = (props: {
  actions: ActionProps[]
  wheel: NavHeaderListWheel
}) => {
  return (
    <Ul wheel={props.wheel}>
      <NavHeaderListItem
        actions={props.actions}
        wheel={{ ...props.wheel, style: props.wheel.style.listItem }}
      />
    </Ul>
  )
}
