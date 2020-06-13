import React from 'react'
import { Action } from '../action/action'
import { ActionProps } from '../action/model-types'
import { Li, Ul } from '../../elements/self'
import { Wheel } from '../../types/wheel'
import { NavigationSegmentListWheelStyle } from './presets/navigation-segment-list-preset'

interface NavigationSegmentListWheel extends Wheel {
  style: NavigationSegmentListWheelStyle
}

export interface NavigationSegmentListProps {
  actions: ActionProps[]
  hideActionHeading: boolean
  hideActionIcon: boolean
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
            hideIcon={props.hideActionIcon}
            wheel={{ ...props.wheel, style: props.wheel.style.item.action }}
          />
        </Li>
      ))}
    </Ul>
  )
}
