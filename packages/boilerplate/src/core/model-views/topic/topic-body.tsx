import React, { Fragment } from 'react'
import { getTopicInfo } from '../../lib/get-topic-info'
import { TopicMedia } from './topic-media'
import { TopicProps } from '../../../models/topic'
import { TopicContent } from './topic-content'

export const TopicBody = (props: TopicProps) => {
  const topicInfo = getTopicInfo(props)
  const pageSectionInfo = props.pageSectionInfo
  const topicOptions = pageSectionInfo.topicOptions
  const styleTree = props.styleTree || {}

  const showMedia =
    (topicInfo.hasImage && !topicOptions.hideMedia) ||
    (topicInfo.hasVideo && !topicOptions.hideMedia)
  const reverse =
    props.forceReverse || props.pageSectionInfo.topicOptions.reverseOrder

  return (
    <Fragment>
      {showMedia && (
        <TopicMedia
          pageSectionInfo={pageSectionInfo}
          reverse={reverse}
          styleTree={styleTree.media}
          topic={props}
          topicInfo={topicInfo}
        />
      )}
      <TopicContent
        pageSectionActions={props.pageSectionActions}
        pageSectionInfo={pageSectionInfo}
        reverse={reverse}
        styleTree={styleTree.content}
        topic={props}
        topicInfo={topicInfo}
        useAbstractElement={props.useAbstractElement}
        useHeadingElement={props.useHeadingElement}
      ></TopicContent>
    </Fragment>
  )
}
