import React from 'react'
import { Action } from '../action/action'
import { ActionProps } from '../../../../models/action/action'
import { Li, Ul } from '../../element/self'
import { NavigationSegmentListWheelStyle } from './presets/navigation-segment-list-preset'
import { Wheel } from '../../types'

interface NavigationSegmentListWheel extends Wheel {
  style: NavigationSegmentListWheelStyle
}

export interface NavigationSegmentListProps {
  actions: ActionProps[]
  hideActionHeading: boolean
  wheel: NavigationSegmentListWheel
}

export const NavigationSegmentList = (props: NavigationSegmentListProps) => {
  if (!props.actions) {
    return null
  }
  return (
    <Ul wheel={{ ...props.wheel, style: props.wheel.style }}>
      {props.actions.map((action: ActionProps, index: number) => (
        <Li
          key={index}
          wheel={{ ...props.wheel, style: props.wheel.style.item }}
        >
          <Action
            {...action}
            hideHeading={props.hideActionHeading}
            wheel={{ ...props.wheel, style: props.wheel.style.item.action }}
          />
        </Li>
      ))}
    </Ul>
  )
}
