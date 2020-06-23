import React from 'react'
import { Wheel, Action, ActionModelProps, Li, Ul } from '../../../src-core'
import { NavigationSegmentListStyle } from './model-style-types'

interface NavigationSegmentListWheel extends Wheel {
  style: NavigationSegmentListStyle
}

export interface NavigationSegmentListProps {
  actions: ActionModelProps[]
  hideActionHeading: boolean
  hideActionIcon: boolean
  wheel: NavigationSegmentListWheel
}

export const NavigationSegmentList = (props: NavigationSegmentListProps) => {
  if (!props.actions) {
    return null
  }
  return (
    <Ul wheel={{ ...props.wheel, style: props.wheel.style.list }}>
      {props.actions.map((action: ActionModelProps, index: number) => (
        <Li
          key={index}
          wheel={{ ...props.wheel, style: props.wheel.style.item }}
        >
          <Action
            {...action}
            hideHeading={props.hideActionHeading}
            hideIcon={props.hideActionIcon}
            wheel={{ ...props.wheel, style: props.wheel.style.action }}
          />
        </Li>
      ))}
    </Ul>
  )
}
