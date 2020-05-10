import { ActionProps } from '../../../../models/action/action'
import { Li } from '../../element/self'
import { NavHeaderListItemLink } from './nav-header-list-item-link'
import { NavHeaderListItemWheelStyle } from './presets/nav-header-list-item-preset'
import { Wheel } from '../../types'
import React, { Fragment } from 'react'

interface NavHeaderListItemWheel extends Wheel {
  style: NavHeaderListItemWheelStyle
}

export interface NavHeaderListItemProps {
  actions: ActionProps[]
  wheel: NavHeaderListItemWheel
}

export const NavHeaderListItem = (props: NavHeaderListItemProps) => {
  return (
    <Fragment>
      {props.actions.map((action: ActionProps, index: number) => (
        <Li key={index} wheel={props.wheel}>
          <NavHeaderListItemLink
            action={action}
            wheel={{ ...props.wheel, style: props.wheel.style.link }}
          />
        </Li>
      ))}
    </Fragment>
  )
}
