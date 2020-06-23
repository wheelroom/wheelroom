import React from 'react'
import {
  Wheel,
  Action,
  ActionProps,
  ActionWheelStyle,
  Li,
  NcssProps,
  Ul,
} from '../../../src-core'

export interface NavigationSegmentListWheelStyle {
  ncss: NcssProps
  item: {
    ncss: NcssProps
    action: ActionWheelStyle
  }
}

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
