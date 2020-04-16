import React from 'react'
import { Wheel } from '../../types'
import { Ul } from '../../elements/list'
import { NavHeaderListItem } from './nav-header-list-item'
import { PageProps } from '../../../../models/page'
import { NavHeaderListPreset } from './presets/nav-header-list-preset'

interface NavHeaderListWheel extends Wheel {
  style: NavHeaderListPreset
}

export const NavHeaderList = (props: {
  pages: PageProps[]
  wheel: NavHeaderListWheel
}) => {
  return (
    <Ul wheel={{ ...props.wheel, style: props.wheel.style }}>
      <NavHeaderListItem
        pages={props.pages}
        wheel={{ ...props.wheel, style: props.wheel.style.listItem }}
      />
    </Ul>
  )
}
