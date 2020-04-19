import React, { Fragment } from 'react'
import { PageProps } from '../../../../models/page'
import { Wheel } from '../../types'
import { NavFooterListItemPresetWheelStyle } from './presets/nav-footer-list-item-preset'
import { NavFooterListItemLink } from './nav-footer-list-item-link'
import { Li } from '../../element/self'

interface NavFooterListItemWheel extends Wheel {
  style: NavFooterListItemPresetWheelStyle
}

export interface NavFooterListItemProps {
  pages: PageProps[]
  wheel: NavFooterListItemWheel
}

export const NavFooterListItem = (props: NavFooterListItemProps) => {
  const listItemlink = props.pages.map((page: PageProps, index: number) => (
    <Li key={index} wheel={props.wheel}>
      <NavFooterListItemLink
        page={page}
        wheel={{ ...props.wheel, style: props.wheel.style.link }}
      />
    </Li>
  ))
  return <Fragment>{listItemlink}</Fragment>
}
