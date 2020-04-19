import React from 'react'
import { Box } from '../../element/grid'
import { TopicProps } from '../../../../models/topic'
import { TopicInfo } from '../../../lib/get-topic-info'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { TopicContentText } from './topic-content-text'
import { TopicContentActions } from './topic-content-actions'
import { BlockLevelElementName } from '../../element/types/element-names'
import { ActionProps } from '../../../../models/action/action'
import { ParserFunction } from '../../../parsers/types'
import { Wheel } from '../../types'
import { TopicContentWheelStyle } from './presets/topic-content-preset'

export interface TopicContentWheel extends Wheel {
  style: TopicContentWheelStyle
}

export interface TopicContentProps {
  /** Styling wheel */
  wheel: TopicContentWheel
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo

  /** Defaults to h3 */
  useHeadingElement?: BlockLevelElementName
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName
  /** Defaults to h3 */
  useHeadingParser?: ParserFunction
  /** Defaults to p */
  useAbstractParser?: ParserFunction

  /** Page section actions will override all topic actions */
  pageSectionActions?: ActionProps[]
  /** Full Topic is wrapped in a link and the inside link becomes a span */
  fullTopicAsLink?: boolean
}

export const TopicContent = (props: TopicContentProps) => {
  const topicInfo = props.topicInfo
  const pageSectionInfo = props.pageSectionInfo
  const topicOptions = pageSectionInfo.topicOptions
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
        pageSectionInfo={pageSectionInfo}
        wheel={{ ...props.wheel, style: props.wheel.style.text }}
        topic={props.topic}
        topicInfo={topicInfo}
        useAbstractElement={props.useAbstractElement}
        useHeadingElement={props.useHeadingElement}
        useAbstractParser={props.useAbstractParser}
        useHeadingParser={props.useHeadingParser}
      />
      {showAction && (
        <TopicContentActions
          fullTopicAsLink={props.fullTopicAsLink}
          pageSectionActions={props.pageSectionActions}
          pageSectionInfo={pageSectionInfo}
          wheel={{ ...props.wheel, style: props.wheel.style.actions }}
          topic={props.topic}
          topicInfo={topicInfo}
        />
      )}
    </Box>
  )
}
