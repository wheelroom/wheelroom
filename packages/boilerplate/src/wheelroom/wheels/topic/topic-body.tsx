import React, { Fragment } from 'react'
import { getTopicInfo } from '../../lib/get-topic-info'
import { TopicMedia } from './topic-media'
import { TopicContent } from './topic-content'
import { TopicTreeProps } from './topic'

export const TopicBody = (props: TopicTreeProps) => {
  const topicInfo = getTopicInfo(props.topic!)
  const pageSectionInfo = props.pageSectionInfo
  const topicOptions = pageSectionInfo.topicOptions
  const treeStyle = props.treeStyle || {}
  // console.log('treeStyle.content', treeStyle.content)

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
          treeStyle={treeStyle.media}
          topic={props.topic!}
          topicInfo={topicInfo}
        />
      )}
      <TopicContent
        fullTopicAsLink={props.fullTopicAsLink}
        pageSectionActions={props.pageSectionActions}
        pageSectionInfo={pageSectionInfo}
        reverse={reverse}
        treeStyle={treeStyle.content}
        topic={props.topic!}
        topicInfo={topicInfo}
        useAbstractElement={props.useAbstractElement}
        useHeadingElement={props.useHeadingElement}
        useAbstractParser={props.useAbstractParser}
        useHeadingParser={props.useHeadingParser}
      />
    </Fragment>
  )
}