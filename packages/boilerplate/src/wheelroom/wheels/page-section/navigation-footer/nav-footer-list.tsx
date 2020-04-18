import React from 'react'
import { Ul } from '../../elements/self'
import { NavFooterListItem } from './nav-footer-list-item'
import { PageProps } from '../../../../models/page'
import { NavFooterListPreset } from './presets/nav-footer-list-preset'
import { Wheel } from '../../types'

interface NavFooterListWheel extends Wheel {
  style: NavFooterListPreset
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
