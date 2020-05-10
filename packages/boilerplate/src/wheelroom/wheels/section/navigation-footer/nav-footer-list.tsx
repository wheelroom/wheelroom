import React from 'react'
import { ActionProps } from '../../../../models/action/action'
import { NavFooterListItem } from './nav-footer-list-item'
import { NavFooterListPresetWheelStyle } from './presets/nav-footer-list-preset'
import { Ul } from '../../element/self'
import { Wheel } from '../../types'

interface NavFooterListWheel extends Wheel {
  style: NavFooterListPresetWheelStyle
}

export const NavFooterList = (props: {
  actions: ActionProps[]
  wheel: NavFooterListWheel
}) => {
  return (
    <Ul wheel={props.wheel}>
      <NavFooterListItem
        actions={props.actions}
        wheel={{ ...props.wheel, style: props.wheel.style.listItem }}
      />
    </Ul>
  )
}
