import React from 'react'
import { Wheel } from '../../types'
import { Ul } from '../../element/self'
import { NavHeaderListItem } from './nav-header-list-item'
import { NavHeaderListWheelStyle } from './presets/nav-header-list-preset'
import { NavigationSegmentProps } from '../../../../models/navigation-segment/navigation-segment'

interface NavHeaderListWheel extends Wheel {
  style: NavHeaderListWheelStyle
}

export interface NavHeaderListWheelProps {
  navigationSegments: NavigationSegmentProps[]
  wheel: NavHeaderListWheel
}

export const NavHeaderList = (props: NavHeaderListWheelProps) => {
  if (!props.navigationSegments) {
    return null
  }
  return (
    <Ul wheel={props.wheel}>
      <NavHeaderListItem
        actions={props.navigationSegments[0].actions || []}
        wheel={{ ...props.wheel, style: props.wheel.style.listItem }}
      />
    </Ul>
  )
}
