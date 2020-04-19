import React from 'react'
import { GLink } from '../../element/g-link'
import { PageProps } from '../../../../models/page'
import { NavFooterListItemLinkWheelStyle } from './presets/nav-footer-list-item-link-preset'
import { Wheel } from '../../types'

interface NavFooterListItemLinkWheel extends Wheel {
  style: NavFooterListItemLinkWheelStyle
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
