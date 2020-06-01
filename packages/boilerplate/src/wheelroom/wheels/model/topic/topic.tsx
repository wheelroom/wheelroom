import React from 'react'
import { Action } from '../action/action'
import { BlockLevelElementName } from '../../element/types/element-names'
import { Box } from '../../element/grid'
import { getTopicInfo } from '../../../lib/get-topic-info'
import { ParserFunction } from '../../../parsers/types'
import { TopicBody } from './topic-body'
import { TopicProps } from '../../../../models/topic/topic'
import { TopicWheelStyle } from './presets/topic-preset'
import { Wheel } from '../../types'
import { TopicOptions } from '../../../lib/get-topic-options'

export interface TopicWheel extends Wheel {
  style: TopicWheelStyle
}

export interface TopicWheelProps {
  /** Styling wheel */
  wheel: TopicWheel
  /** The topic to render */
  topic?: TopicProps
  /** Topic render options */
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

export const Topic = (props: TopicWheelProps) => {
  if (!props.topic) {
    return null
  }
  const topicInfo = getTopicInfo(props.topic)
  const fullTopicAsLink =
    !props.topicOptions.hideAction &&
    topicInfo.hasAction &&
    props.fullTopicAsLink

  const action = props.topic.actions && props.topic.actions[0]
  let Element: any
  let elementProps
  if (fullTopicAsLink) {
    Element = Action
    elementProps = { ...action, icon: undefined }
  } else {
    Element = Box
    elementProps = { is: 'div' }
  }

  return (
    <Element {...elementProps} wheel={props.wheel}>
      <TopicBody {...props} />
    </Element>
  )
}
