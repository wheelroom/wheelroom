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

/** This style needs cleaning up, only default values here */
const defaultWrapperStyle = {
  label: 'topic-content',
  justifyContent: 'center',
  p: 3,
}

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
  useHeadingElement?: BlockLevelElementName
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName
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
        order,
        ...defaultWrapperStyle,
        ...wrapperStyle,
      }}
    >
      <TopicContentText
        topic={props.topic}
        topicInfo={topicInfo}
        pageSectionInfo={pageSectionInfo}
        useAbstractElement={props.useAbstractElement}
        useHeadingElement={props.useHeadingElement}
        styleTree={styleTree.contentText}
      />
      {showAction && (
        <TopicContentActions
          topic={props.topic}
          topicInfo={topicInfo}
          pageSectionInfo={pageSectionInfo}
          pageSectionActions={props.pageSectionActions}
          styleTree={styleTree.contentActions}
        />
      )}
    </Box>
  )
}
