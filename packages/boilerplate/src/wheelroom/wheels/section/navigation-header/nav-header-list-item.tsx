import { ActionProps } from '../../../../models/action/action'
import { Li } from '../../element/self'
import { NavHeaderAction } from './nav-header-action'
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
  if (!props.actions) {
    return null
  }
  return (
    <Fragment>
      {props.actions.map((action: ActionProps, index: number) => (
        <Li key={index} wheel={props.wheel}>
          <NavHeaderAction
            action={action}
            wheel={{ ...props.wheel, style: props.wheel.style.link }}
          />
        </Li>
      ))}
    </Fragment>
  )
}
