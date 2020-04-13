import React from 'react'
import { Box } from '../elements/grid'
import { getTopicInfo } from '../../lib/get-topic-info'
import { BlockLevelElementName } from '../elements/types'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { TopicBody } from './topic-body'
import { TopicProps } from '../../../models/topic/topic'
import { ParserFunction } from '../../parsers/types'
import { ActionProps } from '../../../models/action/action'
import { Action } from '../action/action'
import { Wheel } from '../types'
import { TopicPreset } from './presets/topic-preset'

export interface TopicWheel extends Wheel {
  style: TopicPreset
}

export interface TopicWheelProps {
  /** Styling wheel */
  wheel: TopicWheel
  /** The topic to render */
  topic?: TopicProps
  /** Options that change topic display behaviour */
  pageSectionInfo: PageSectionInfo
  /** Page section actions will override all topic actions */
  pageSectionActions?: ActionProps[]

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
  /** Reverse topicMedia and topicContent */
  forceReverse?: boolean
}

export const Topic = (props: TopicWheelProps) => {
  if (!props.topic) {
    return null
  }
  const topicInfo = getTopicInfo(props.topic)
  const topicOptions = props.pageSectionInfo.topicOptions
  const fullTopicAsLink =
    !topicOptions.hideAction && topicInfo.hasAction && props.fullTopicAsLink
  return fullTopicAsLink ? (
    <Action {...props.topic.actions[0]} wheel={props.wheel}>
      <TopicBody {...props} />
    </Action>
  ) : (
    <Box is="div" ncss={props.wheel.style.ncss} wheel={props.wheel}>
      <TopicBody {...props} />
    </Box>
  )
}
