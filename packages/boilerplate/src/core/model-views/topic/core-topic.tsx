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

export interface TopicStyleTree {
  /** Wrapper around the whole topic */
  wrapper?: NcssProps
  /** Wrapper around media */
  media?: TopicMediaStyleTree
  content?: TopicContentStyleTree
}

export interface TopicCoreProps {
  /** Options that change topic display behaviour */
  pageSectionInfo: PageSectionInfo
  /** Page section actions will override all topic actions */
  pageSectionActions?: ActionProps[]

  /** Defaults to h3 */
  useHeadingElement?: BlockLevelElementName | ParserFunction
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName | ParserFunction
  /** Full Topic is wrapped in a link and the inside link becomes a span */
  fullTopicAsLink?: boolean
  /** Reverse topicMedia and topicContent */
  forceReverse?: boolean

  styleTree?: TopicStyleTree
}

export const CoreTopic = (props: TopicProps) => {
  const styleTree = props.styleTree || {}
  const topicWrapperStyle = styleTree.wrapper || {}
  const topicInfo = getTopicInfo(props)
  const fullTopicAsLink = topicInfo.hasAction && props.fullTopicAsLink
  return fullTopicAsLink ? (
    <Action
      {...props.actions[0]}
      styleTree={{
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
