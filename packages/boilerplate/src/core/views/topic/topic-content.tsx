import React from 'react'
import { Box } from '../../primary-elements/grid'
import { TopicProps } from '../../../components/topic'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { TopicContentStyleTree } from './core-topic'
import { TopicContentText } from './topic-content-text'
import { TopicContentActions } from './topic-content-actions'
import { BlockLevelElementName } from '../../primary-elements/types'
import { ActionProps } from '../../../components/action/action'

/** This style needs cleaning up, only default values here */
const defaultWrapperStyle = {
  label: 'topic-content',
  justifyContent: 'center',
  p: 3,
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
