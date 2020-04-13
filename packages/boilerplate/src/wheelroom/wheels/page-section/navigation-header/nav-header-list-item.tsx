import React, { Fragment } from 'react'
import { Any } from '../../elements/any'
import { PageProps } from '../../../../models/page'
import { Wheel } from '../../types'
import { NavHeaderListItemPreset } from './presets/nav-header-list-item-preset'
import { NavHeaderListItemLink } from './nav-header-list-item-link'

interface NavHeaderListItemWheel extends Wheel {
  style: NavHeaderListItemPreset
}

export interface NavHeaderListItemProps {
  pages: PageProps[]
  wheel: NavHeaderListItemWheel
}

export const NavHeaderListItem = (props: NavHeaderListItemProps) => {
  const listItemlink = props.pages.map((pages: PageProps, index: number ) => (
    <Any
      is={'li'}
      key={index}
      wheel={{ ...props.wheel, style: props.wheel.style.listItem.ncss }}
    >
      <NavHeaderListItemLink
        {...pages}
        pages={props.pages}
        wheel={{ ...props.wheel, style: props.wheel.style.link }}
      />
    </Any>
  ))
  return <Fragment>{listItemlink}</Fragment>
}
