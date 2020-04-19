import React, { Fragment } from 'react'
import { PageProps } from '../../../../models/page'
import { Wheel } from '../../types'
import { NavHeaderListItemWheelStyle } from './presets/nav-header-list-item-preset'
import { NavHeaderListItemLink } from './nav-header-list-item-link'
import { Li } from '../../element/self'

interface NavHeaderListItemWheel extends Wheel {
  style: NavHeaderListItemWheelStyle
}

export interface NavHeaderListItemProps {
  pages: PageProps[]
  wheel: NavHeaderListItemWheel
}

export const NavHeaderListItem = (props: NavHeaderListItemProps) => {
  return (
    <Fragment>
      {props.pages.map((page: PageProps, index: number) => (
        <Li key={index} wheel={props.wheel}>
          <NavHeaderListItemLink
            page={page}
            wheel={{ ...props.wheel, style: props.wheel.style.link }}
          />
        </Li>
      ))}
    </Fragment>
  )
}
