import React, { Fragment } from 'react'
import { PageProps } from '../../../../models/page'
import { Wheel } from '../../types'
import { NavHeaderListItemPreset } from './presets/nav-header-list-item-preset'
import { NavHeaderListItemLink } from './nav-header-list-item-link'
import { Li } from '../../elements/list'

interface NavHeaderListItemWheel extends Wheel {
  style: NavHeaderListItemPreset
}

export interface NavHeaderListItemProps {
  pages: PageProps[]
  wheel: NavHeaderListItemWheel
}

export const NavHeaderListItem = (props: NavHeaderListItemProps) => {
  return (
    <Fragment>
      {props.pages.map((page: PageProps, index: number) => (
        <Li
          key={index}
          wheel={{ ...props.wheel, style: props.wheel.style }}
        >
          <NavHeaderListItemLink
            page={page}
            wheel={{ ...props.wheel, style: props.wheel.style.link }}
          />
        </Li>
      ))}
    </Fragment>
  )
}
