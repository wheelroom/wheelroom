import React from 'react'
import { Action, ActionProps } from '../../../models/action/action'
import { Box } from '../../elements/grid'
import { getTopicInfo } from '../../lib/get-topic-info'
import { NcssProps, BlockLevelElementName } from '../../elements/types'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { TopicBody } from './topic-body'
import { TopicProps } from '../../../models/topic/topic'
import { TopicMediaStyleTree } from './topic-media'
import { TopicContentStyleTree } from './topic-content'
import { ParserFunction } from '../../parsers/types'

export interface TopicTreeStyle {
  /** Wrapper around the whole topic */
  wrapper?: NcssProps
  /** Wrapper around media */
  media?: TopicMediaStyleTree
  content?: TopicContentStyleTree
}

export interface TopicTreeProps {
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

  treeStyle?: TopicTreeStyle
}

export const TopicTree = (props: TopicProps) => {
  const treeStyle = props.treeStyle || {}
  const topicWrapperStyle = treeStyle.wrapper || {}
  const topicInfo = getTopicInfo(props)
  const fullTopicAsLink = topicInfo.hasAction && props.fullTopicAsLink
  return fullTopicAsLink ? (
    <Action
      {...props.actions[0]}
      treeStyle={{
        display: 'flex',
        flexDirection: 'column',
        label: 'topic',
        textDecoration: 'none',
        ...topicWrapperStyle,
      }}
    >
      <TopicBody {...props} />
    </Action>
  ) : (
    <Box
      ncss={{
        display: 'flex',
        flexDirection: 'column',
        label: 'topic',
        ...topicWrapperStyle,
      }}
    >
      <TopicBody {...props} />
    </Box>
  )
}
