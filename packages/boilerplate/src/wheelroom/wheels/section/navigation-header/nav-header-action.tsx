import React from 'react'
import { Action } from '../../model/action/action'
import { ActionProps } from '../../../../models/action/action'
import { NavHeaderActionWheelStyle } from './presets/nav-header-list-item-link-preset'
import { Wheel } from '../../types'

interface NavHeaderActionWheel extends Wheel {
  style: NavHeaderActionWheelStyle
}

export interface NavHeaderActionWheelProps {
  action: ActionProps
  wheel: NavHeaderActionWheel
}

export const NavHeaderAction = (props: NavHeaderActionWheelProps) => (
  <Action wheel={props.wheel} {...props.action} />
)
