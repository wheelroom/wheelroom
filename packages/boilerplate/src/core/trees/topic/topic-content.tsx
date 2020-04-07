import React from 'react'
import { Box } from '../../elements/grid'
import { TopicProps } from '../../../models/topic'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import {
  TopicContentText,
  TopicContentTextStyleTree,
} from './topic-content-text'
import {
  TopicContentActions,
  TopicActionsStyleTree,
} from './topic-content-actions'
import { BlockLevelElementName, NcssProps } from '../../elements/types'
import { ActionProps } from '../../../models/action/action'
import { ParserFunction } from '../../parsers/types'

export interface TopicContentStyleTree {
  /** Wrapper around all content including action */
  wrapper?: NcssProps
  contentText?: TopicContentTextStyleTree
  contentActions?: TopicActionsStyleTree
}

export interface TopicContentWrapperProps {
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

  /** Reverse image and content */
  reverse?: boolean
  /** Page section actions will override all topic actions */
  pageSectionActions?: ActionProps[]
  /** Full Topic is wrapped in a link and the inside link becomes a span */
  fullTopicAsLink?: boolean

  treeStyle?: TopicContentStyleTree
}

export const TopicContent = (props: TopicContentWrapperProps) => {
  const order = props.reverse ? -1 : null
  const topicInfo = props.topicInfo
  const pageSectionInfo = props.pageSectionInfo
  const topicOptions = pageSectionInfo.topicOptions
  const showAction = topicInfo.hasAction && !topicOptions.hideAction
  const treeStyle = props.treeStyle || {}
  const wrapperStyle = (treeStyle && treeStyle.wrapper) || {}

  return (
    <Box
      ncss={{
        justifyContent: 'center',
        label: 'topic-content',
        order,
        p: 3,
        ...wrapperStyle,
      }}
    >
      <TopicContentText
        pageSectionInfo={pageSectionInfo}
        treeStyle={treeStyle.contentText}
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
          treeStyle={treeStyle.contentActions}
          topic={props.topic}
          topicInfo={topicInfo}
        />
      )}
    </Box>
  )
}
