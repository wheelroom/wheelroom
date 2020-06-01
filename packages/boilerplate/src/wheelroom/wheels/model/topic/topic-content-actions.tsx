import React from 'react'
import { ActionProps } from '../../../../models/action'
import { Box } from '../../element/grid'
import { TopicProps } from '../../../../models/topic'
import { TopicInfo } from '../../../lib/get-topic-info'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { Action } from '../action/action'
import { Wheel } from '../../types'
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
  /** Page section info */
  pageSectionInfo: PageSectionInfo
}

export const TopicContentActions = (props: TopicContentActionsProps) => {
  if (!props.topicInfo.hasAction) {
    return null
  }
  const actions = props.topic.actions

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
