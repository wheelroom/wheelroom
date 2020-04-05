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
  /** Reverse image and content */
  reverse?: boolean
  /** Defaults to h3 */
  useHeadingElement?: BlockLevelElementName | JSX.Element
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName | JSX.Element
  /** Page section actions will override all topic actions */
  pageSectionActions?: ActionProps[]

  styleTree?: TopicContentStyleTree
}

export const TopicContent = (props: TopicContentWrapperProps) => {
  const order = props.reverse ? -1 : null
  const topicInfo = props.topicInfo
  const pageSectionInfo = props.pageSectionInfo
  const topicOptions = pageSectionInfo.topicOptions
  const showAction = topicInfo.hasAction && !topicOptions.hideAction
  const styleTree = props.styleTree || {}
  const wrapperStyle = (styleTree && styleTree.wrapper) || {}

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
        styleTree={styleTree.contentText}
        topic={props.topic}
        topicInfo={topicInfo}
        useAbstractElement={props.useAbstractElement}
        useHeadingElement={props.useHeadingElement}
      />
      {showAction && (
        <TopicContentActions
          pageSectionActions={props.pageSectionActions}
          pageSectionInfo={pageSectionInfo}
          styleTree={styleTree.contentActions}
          topic={props.topic}
          topicInfo={topicInfo}
        />
      )}
    </Box>
  )
}
