import React from 'react'
import { Action } from '../action/action'
import { ActionProps } from '../action/model-types'
import { Box } from '../../elements/grid'
import { TopicInfo } from '../../lib/get-topic-info'
import { TopicOptions } from '../../lib/get-topic-options'
import { Wheel } from '../../lib/get-wheel'
import { TopicProps } from './model-types'
import { TopicContentActionsWheelStyle } from './presets/topic-content-actions-preset'

export interface TopicContentActionsWheel extends Wheel {
  style: TopicContentActionsWheelStyle
}

export interface TopicContentActionsProps {
  /** Styling wheel */
  wheel: TopicContentActionsWheel
  /** Full Topic is wrapped in a link and the inside link becomes a span */
  fullTopicAsLink?: boolean
  /** Accept max number of Actions, ignore all others */
  maxActions?: number
  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Topic options */
  topicOptions: TopicOptions
}

export const TopicContentActions = (props: TopicContentActionsProps) => {
  const actions = props.topic.actions

  if (!actions) {
    return null
  }

  return (
    <Box is="div" wheel={props.wheel}>
      {actions
        .slice(0, props.maxActions)
        .map((action: ActionProps, index: number) => {
          const modifiedAction = { ...action }

          // If the full topic is a link, the button inside the topic must be span
          modifiedAction.url = props.fullTopicAsLink ? undefined : action.url
          modifiedAction.page = props.fullTopicAsLink ? undefined : action.page

          return (
            <Action
              key={index}
              wheel={{ ...props.wheel, style: props.wheel.style.link }}
              {...modifiedAction}
            />
          )
        })}
    </Box>
  )
}
