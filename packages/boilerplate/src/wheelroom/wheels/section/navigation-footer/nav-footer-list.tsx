import React from 'react'
import { NavFooterListItem } from './nav-footer-list-item'
import { NavFooterListPresetWheelStyle } from './presets/nav-footer-list-preset'
import { Ul } from '../../element/self'
import { Wheel } from '../../types'
import { NavigationSegmentProps } from '../../../../models/navigation-segment/navigation-segment'

interface NavFooterListWheel extends Wheel {
  style: NavFooterListPresetWheelStyle
}

export interface NavFooterListProps {
  navigationSegments: NavigationSegmentProps[]
  wheel: NavFooterListWheel
}

export const NavFooterList = (props: NavFooterListProps) => {
  return (
    <Ul wheel={props.wheel}>
      <NavFooterListItem
        actions={props.navigationSegments[0].actions || []}
        wheel={{ ...props.wheel, style: props.wheel.style.listItem }}
      />
    </Ul>
  )
}
