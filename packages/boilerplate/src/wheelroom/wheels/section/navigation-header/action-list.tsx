import { ActionProps } from '../../../../models/action/action'
import { NavHeaderAction } from './nav-header-action'
import { NavHeaderListActionWheelStyle } from './presets/nav-header-list-action-preset'
import { Wheel } from '../../types'
import React, { Fragment } from 'react'

interface NavHeaderListActionWheel extends Wheel {
  style: NavHeaderListActionWheelStyle
}

export interface NavHeaderListActionProps {
  actions: ActionProps[]
  wheel: NavHeaderListActionWheel
}

export const ActionList = (props: NavHeaderListActionProps) => {
  if (!props.actions) {
    return null
  }
  return (
    <Fragment>
      {props.actions.map((action: ActionProps, index: number) => (
        <NavHeaderAction
          key={index}
          action={action}
          wheel={{ ...props.wheel, style: props.wheel.style.link }}
        />
      ))}
    </Fragment>
  )
}
