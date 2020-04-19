import React from 'react'
import { ActionProps } from '../../../../models/action'
import { Box } from '../../element/grid'
import { Any } from '../../element/any'
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
  /** Page section actions will override all topic actions */
  pageSectionActions?: ActionProps[]

  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
}

export const TopicContentActions = (props: TopicContentActionsProps) => {
  if (!props.topicInfo.hasAction && !props.pageSectionActions) {
    return null
  }
  const actions = props.pageSectionActions || props.topic.actions
  /** Support only one action for now */
  const action = actions[0]

  return (
    <Box is="div" wheel={props.wheel}>
      {props.fullTopicAsLink ? (
        <Any
          polyPreset={true}
          is="span"
          wheel={{ ...props.wheel, style: props.wheel.style.link }}
        >
          {action.heading}
        </Any>
      ) : (
        <Action
          {...action}
          wheel={{ ...props.wheel, style: props.wheel.style.link }}
        >
          {action.heading}
        </Action>
      )}
    </Box>
  )
}
