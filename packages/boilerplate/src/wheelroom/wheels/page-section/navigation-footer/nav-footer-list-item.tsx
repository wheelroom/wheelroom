import React, { Fragment } from 'react'
import { Any } from '../../elements/any'
import { PageProps } from '../../../../models/page'
import { Wheel } from '../../types'
import { NavFooterListItemPreset } from './presets/nav-footer-list-item-preset'
import { NavFooterListItemLink } from './nav-footer-list-item-link'

interface NavFooterListItemWheel extends Wheel {
  style: NavFooterListItemPreset
}

export interface NavFooterListItemProps {
  pages: PageProps[]
  wheel: NavFooterListItemWheel
}

export const NavFooterListItem = (props: NavFooterListItemProps) => {
  const listItemlink = props.pages.map((pages: PageProps, index: number) => (
    <Any
      is={'li'}
      key={index}
      wheel={{ ...props.wheel, style: props.wheel.style.ncss }}
    >
      <NavFooterListItemLink
        {...pages}
        pages={props.pages}
        wheel={{ ...props.wheel, style: props.wheel.style.link }}
      />
    </Any>
  ))
  return <Fragment>{listItemlink}</Fragment>
}
