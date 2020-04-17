import React from 'react'
import { GLink } from '../../elements/g-link'
import { PageProps } from '../../../../models/page'
import { NavHeaderListItemLinkPreset } from './presets/nav-header-list-item-link-preset'
import { Wheel } from '../../types'

interface NavHeaderListItemLinkWheel extends Wheel {
  style: NavHeaderListItemLinkPreset
}

export const NavHeaderListItemLink = (props: {
  page: PageProps
  wheel: NavHeaderListItemLinkWheel
}) => {
  return (
    <GLink
      wheel={props.wheel}
      to={props.page.path}
    >
      {props.page.navigationHeading}
    </GLink>
  )
}
