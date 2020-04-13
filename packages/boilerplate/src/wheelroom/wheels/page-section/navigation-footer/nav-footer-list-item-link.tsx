import React from 'react'
import { GLink } from '../../elements/g-link'
import { PageProps } from '../../../../models/page'
import { NavFooterListItemLinkPreset } from './presets/nav-footer-list-item-link-preset'
import { Wheel } from '../../types'

interface NavFooterListItemLinkWheel extends Wheel {
  style: NavFooterListItemLinkPreset
}

export const NavFooterListItemLink = (props: {
  pages: PageProps[]
  wheel: NavFooterListItemLinkWheel
}) => {
  return (
    <GLink
      wheel={{ ...props.wheel, style: props.wheel.style }}
      to={props.pages[0].path}
    >
      {props.pages[0].navigationHeading}
    </GLink>
  )
}
