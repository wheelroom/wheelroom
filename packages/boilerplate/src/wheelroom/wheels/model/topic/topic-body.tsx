import React, { Fragment } from 'react'
import { getTopicInfo } from '../../../lib/get-topic-info'
import { TopicContent } from './topic-content'
import { TopicMedia } from './topic-media'
import { TopicWheelProps } from './topic'

export const TopicBody = (props: TopicWheelProps) => {
  const topicInfo = getTopicInfo(props.topic!)
  const topicOptions = props.topicOptions
  const showMedia = topicInfo.hasMedia && !topicOptions.hideMedia
  return (
    <Fragment>
      {showMedia && (
        <TopicMedia
          embed={props.topic!}
          topic={props.topic!}
          topicInfo={topicInfo}
          topicOptions={props.topicOptions}
          wheel={{ ...props.wheel, style: props.wheel.style.media }}
        />
      )}
      <TopicContent
        fullTopicAsLink={props.fullTopicAsLink}
        maxActions={props.maxActions}
        topic={props.topic!}
        topicInfo={topicInfo}
        topicOptions={props.topicOptions}
        useAbstractElement={props.useAbstractElement}
        useAbstractParser={props.useAbstractParser}
        useHeadingElement={props.useHeadingElement}
        useHeadingParser={props.useHeadingParser}
        wheel={{ ...props.wheel, style: props.wheel.style.content }}
      />
    </Fragment>
  )
}
