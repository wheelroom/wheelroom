import React from 'react'
import { Action, ActionModel, Li, Ul, Wheel } from '@wheelroom/core'
import { NavigationSegmentNcssTree } from './ncss-tree'

interface NavigationSegmentWheel extends Wheel {
  style: NavigationSegmentNcssTree
}

interface NavigationSegmentListProps {
  actions: ActionModel[]
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
      {props.actions.map((action: ActionModel, index: number) => (
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
