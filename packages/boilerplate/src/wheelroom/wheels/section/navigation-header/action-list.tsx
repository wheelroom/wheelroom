import { ActionProps } from '../../../../models/action/action'
import { NavHeaderListActionWheelStyle } from './presets/nav-header-list-action-preset'
import { Wheel } from '../../types'
import React, { Fragment } from 'react'
import { Action } from '../../model/action/action'

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
        <Action
          key={index}
          {...action}
          wheel={{ ...props.wheel, style: props.wheel.style.link }}
        />
      ))}
    </Fragment>
  )
}
