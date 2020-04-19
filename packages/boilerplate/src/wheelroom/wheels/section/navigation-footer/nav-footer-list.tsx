import React from 'react'
import { Ul } from '../../element/self'
import { NavFooterListItem } from './nav-footer-list-item'
import { PageProps } from '../../../../models/page'
import { NavFooterListPresetWheelStyle } from './presets/nav-footer-list-preset'
import { Wheel } from '../../types'

interface NavFooterListWheel extends Wheel {
  style: NavFooterListPresetWheelStyle
}

export const NavFooterList = (props: {
  pages: PageProps[]
  wheel: NavFooterListWheel
}) => {
  return (
    <Ul wheel={props.wheel}>
      <NavFooterListItem
        pages={props.pages}
        wheel={{ ...props.wheel, style: props.wheel.style.listItem }}
      />
    </Ul>
  )
}
