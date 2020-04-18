import React from 'react'
import { GLink } from '../../elements/g-link'
import { PageProps } from '../../../../models/page'
import { NavFooterListItemLinkPreset } from './presets/nav-footer-list-item-link-preset'
import { Wheel } from '../../types'

interface NavFooterListItemLinkWheel extends Wheel {
  style: NavFooterListItemLinkPreset
}

export const NavFooterListItemLink = (props: {
  page: PageProps
  wheel: NavFooterListItemLinkWheel
}) => {
  return (
    <GLink wheel={props.wheel} to={props.page.path}>
      {props.page.navigationHeading}
    </GLink>
  )
}
