import React from 'react'
import { Action } from '../../model/action/action'
import { ActionProps } from '../../../../models/action'
import { NavHeaderListItemLinkWheelStyle } from './presets/nav-header-list-item-link-preset'
import { Wheel } from '../../types'

interface NavHeaderListItemLinkWheel extends Wheel {
  style: NavHeaderListItemLinkWheelStyle
}

export const NavHeaderListItemLink = (props: {
  action: ActionProps
  wheel: NavHeaderListItemLinkWheel
}) => <Action wheel={props.wheel} {...props.action} />
