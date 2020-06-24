import React from 'react'
import { Action, ActionModelProps, Li, Ul, Wheel } from '../../../src-core'
import { NavigationSegmentModelStyle } from './model-style-types'

interface NavigationSegmentWheel extends Wheel {
  style: NavigationSegmentModelStyle
}

interface NavigationSegmentListProps {
  actions: ActionModelProps[]
  hideActionHeading: boolean
  hideActionIcon: boolean
  wheel: NavigationSegmentWheel
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
