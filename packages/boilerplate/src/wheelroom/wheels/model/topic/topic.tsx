import React from 'react'
import { Box } from '../../element/grid'
import { getTopicInfo } from '../../../lib/get-topic-info'
import { BlockLevelElementName } from '../../element/types/element-names'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { TopicBody } from './topic-body'
import { TopicProps } from '../../../../models/topic/topic'
import { ParserFunction } from '../../../parsers/types'
import { ActionProps } from '../../../../models/action/action'
import { Action } from '../action/action'
import { Wheel } from '../../types'
import { TopicWheelStyle } from './presets/topic-preset'
import { TopicOptions } from '../../../lib/get-topic-options'

export interface TopicWheel extends Wheel {
  style: TopicWheelStyle
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
  /** Force these topic options */
  overrideTopicOptions?: TopicOptions

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
}

export const Topic = (props: TopicWheelProps) => {
  if (!props.topic) {
    return null
  }
  const topicInfo = getTopicInfo(props.topic)
  const topicOptions = props.pageSectionInfo.topicOptions
  const fullTopicAsLink =
    !topicOptions.hideAction && topicInfo.hasAction && props.fullTopicAsLink

  let Element
  let elementProps = {}
  if (fullTopicAsLink) {
    Element = Action
    elementProps = props.topic.actions[0]
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
