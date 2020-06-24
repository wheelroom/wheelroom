import React from 'react'
import { TopicInfo } from '../../lib/get-topic-info'
import { TopicOptions } from '../../lib/get-topic-options'
import {
  BlockLevelElementName,
  Box,
  ParserFunction,
  Wheel,
  NcssProps,
} from '../../../src-core'
import {
  TopicContentActions,
  TopicContentActionsWheelStyle,
} from './topic-content-actions'
import {
  TopicContentText,
  TopicContentTextWheelStyle,
} from './topic-content-text'
import { TopicModelProps } from './model-types'

export interface TopicContentWheelStyle {
  /** Wrapper around all content including action */
  ncss: NcssProps
  text: TopicContentTextWheelStyle
  actions: TopicContentActionsWheelStyle
}

export interface TopicContentWheel extends Wheel {
  style: TopicContentWheelStyle
}

export interface TopicContentProps {
  /** Styling wheel */
  wheel: TopicContentWheel
  /** Topic props */
  topic: TopicModelProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Topic options */
  topicOptions: TopicOptions
  /** Defaults to h3 */
  useHeadingElement?: BlockLevelElementName
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName
  /** Defaults to h3 */
  useHeadingParser?: ParserFunction
  /** Defaults to p */
  useAbstractParser?: ParserFunction
  /** Full Topic is wrapped in a link and the inside link becomes a span */
  fullTopicAsLink?: boolean
  /** Accept max number of Actions, ignore all others */
  maxActions?: number
}

export const TopicContent = (props: TopicContentProps) => {
  const topicInfo = props.topicInfo
  const topicOptions = props.topicOptions
  const showAction = topicInfo.hasAction && !topicOptions.hideAction

  const isEmpty =
    (!topicInfo.hasIcon || topicOptions.hideIcon) &&
    (!topicInfo.hasHeading || topicOptions.hideHeading) &&
    (!topicInfo.hasAbstract || topicOptions.hideAbstract) &&
    (!topicInfo.hasAction || topicOptions.hideAction)

  if (isEmpty) {
    return null
  }

  return (
    <Box
      ncss={{
        order: topicOptions.reverseOrder ? -1 : null,
      }}
      wheel={props.wheel}
    >
      <TopicContentText
        topic={props.topic}
        topicInfo={topicInfo}
        topicOptions={props.topicOptions}
        useAbstractElement={props.useAbstractElement}
        useAbstractParser={props.useAbstractParser}
        useHeadingElement={props.useHeadingElement}
        useHeadingParser={props.useHeadingParser}
        wheel={{ ...props.wheel, style: props.wheel.style.text }}
      />
      {showAction && (
        <TopicContentActions
          fullTopicAsLink={props.fullTopicAsLink}
          maxActions={props.maxActions}
          topic={props.topic}
          topicInfo={topicInfo}
          topicOptions={props.topicOptions}
          wheel={{ ...props.wheel, style: props.wheel.style.actions }}
        />
      )}
    </Box>
  )
}
