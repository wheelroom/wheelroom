import React from 'react'
import { Action } from '../../model/action/action'
import { ActionProps } from '../../../../models/action'
import { NavFooterListItemLinkWheelStyle } from './presets/nav-footer-list-item-link-preset'
import { Wheel } from '../../types'

interface NavFooterListItemLinkWheel extends Wheel {
  style: NavFooterListItemLinkWheelStyle
}

export const NavFooterListItemLink = (props: {
  action: ActionProps
  wheel: NavFooterListItemLinkWheel
}) => (
  <Action
    wheel={{ ...props.wheel, style: props.wheel.style }}
    {...props.action}
  />
)
