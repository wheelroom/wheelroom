import React from 'react'
import { GLink } from '../../elements/g-link'
import { PageProps } from '../../../../models/page'
import { NavHeaderListItemLinkPreset } from './presets/nav-header-list-item-link-preset'
import { Wheel } from '../../types'

interface NavHeaderListItemLinkWheel extends Wheel {
  style: NavHeaderListItemLinkPreset
}

export const NavHeaderListItemLink = (props: {
  pages: PageProps[]
  wheel: NavHeaderListItemLinkWheel
}) => {
  return (
    <GLink
      wheel={{ ...props.wheel, style: props.wheel.style.ncss }}
      to={props.pages[0].path}
    >
      {props.pages[0].navigationHeading}
    </GLink>
  )
}
