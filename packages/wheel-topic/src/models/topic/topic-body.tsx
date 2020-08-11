import React, { Fragment } from 'react'
import { getTopicInfo } from '../../lib/get-topic-info'
import { TopicContent } from './topic-content'
import { TopicMedia } from './topic-media'
import { TopicProps } from './topic'

export const TopicBody = (props: TopicProps) => {
  const topicInfo = getTopicInfo(props.topic!)
  const topicOptions = props.topicOptions
  const showMedia = topicInfo.hasMedia && !topicOptions.hideMedia
  const media = (
    <TopicMedia
      data={props.data}
      embed={props.topic!}
      topic={props.topic!}
      topicInfo={topicInfo}
      topicOptions={props.topicOptions}
      wheel={props.wheel}
    />
  )

  const content = (
    <TopicContent
      data={props.data}
      fullTopicAsLink={props.fullTopicAsLink}
      maxActions={props.maxActions}
      topic={props.topic!}
      topicInfo={topicInfo}
      topicOptions={props.topicOptions}
      useAbstractElement={props.useAbstractElement}
      useAbstractParser={props.useAbstractParser}
      useHeadingElement={props.useHeadingElement}
      useHeadingParser={props.useHeadingParser}
      wheel={props.wheel}
    />
  )

  if (topicOptions.reverseOrder) {
    return (
      <Fragment>
        {content}
        {showMedia && media}
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        {showMedia && media}
        {content}
      </Fragment>
    )
  }
}
