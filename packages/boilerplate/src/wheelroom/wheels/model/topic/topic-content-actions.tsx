import React from 'react'
import { Action } from '../action/action'
import { ActionProps } from '../../../../models/action/action'
import { Box } from '../../element/grid'
import { TopicContentActionsWheelStyle } from './presets/topic-content-actions-preset'
import { TopicInfo } from '../../../lib/get-topic-info'
import { TopicOptions } from '../../../lib/get-topic-options'
import { TopicProps } from '../../../../models/topic/topic'
import { Wheel } from '../../types'

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
        .map((action: ActionProps, index: number) => (
          <Action
            key={index}
            url={!props.fullTopicAsLink && action.url}
            page={!props.fullTopicAsLink && action.page}
            wheel={{ ...props.wheel, style: props.wheel.style.link }}
            {...action}
          />
        ))}
    </Box>
  )
}
