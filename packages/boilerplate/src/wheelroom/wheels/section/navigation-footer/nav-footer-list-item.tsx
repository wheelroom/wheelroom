import React, { Fragment } from 'react'
import { ActionProps } from '../../../../models/action/action'
import { Li } from '../../element/self'
import { NavFooterListItemLink } from './nav-footer-list-item-link'
import { NavFooterListItemPresetWheelStyle } from './presets/nav-footer-list-item-preset'
import { Wheel } from '../../types'

interface NavFooterListItemWheel extends Wheel {
  style: NavFooterListItemPresetWheelStyle
}

export interface NavFooterListItemProps {
  actions: ActionProps[]
  wheel: NavFooterListItemWheel
}

export const NavFooterListItem = (props: NavFooterListItemProps) => {
  const listItemlink = props.actions.map(
    (action: ActionProps, index: number) => (
      <Li key={index} wheel={props.wheel}>
        <NavFooterListItemLink
          action={action}
          wheel={{ ...props.wheel, style: props.wheel.style.link }}
        />
      </Li>
    )
  )
  return <Fragment>{listItemlink}</Fragment>
}
