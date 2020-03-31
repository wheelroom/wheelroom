import React, { Fragment } from 'react'
import { getTopicInfo } from '../../lib/get-topic-info'
import { TopicMedia } from './topic-media'
import { TopicProps } from '../../../components/topic'
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
          topic={props}
          topicInfo={topicInfo}
          pageSectionInfo={pageSectionInfo}
          reverse={reverse}
          styleTree={styleTree.media}
        />
      )}
      <TopicContent
        topic={props}
        topicInfo={topicInfo}
        pageSectionInfo={pageSectionInfo}
        reverse={reverse}
        pageSectionActions={props.pageSectionActions}
        styleTree={styleTree.content}
        useAbstractElement={props.useAbstractElement}
        useHeadingElement={props.useHeadingElement}
      ></TopicContent>
    </Fragment>
  )
}
