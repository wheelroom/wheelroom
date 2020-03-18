/**
 * Component variation
 *
 * Component type: topic
 * Variation: Single
 *
 */

import React from 'react'
import { TopicProps } from './topic'
import { TopicWrapper } from './topic-wrapper'
import { TopicImage } from './topic-image'
import { TopicHeader } from './topic-header'
import { TopicAction } from './topic-action'
import { TopicContentWrapper } from './topic-content-wrapper'

export const TopicSingleVar = (props: TopicProps) => {
  return (
    <TopicWrapper topicWrapperStyle={props.topicWrapperStyle}>
      <TopicImage
        imageProps={{ ...props.imageProps, image: props.image }}
        imageWrapperStyle={props.imageWrapperStyle}
      />
      <TopicContentWrapper contentWrapperStyle={props.contentWrapperStyle}>
        <TopicHeader
          topic={props}
          headerWrapperStyle={props.headerWrapperStyle}
          headingStyle={props.headingStyle}
          paragraphStyle={props.paragraphStyle}
        />
        <TopicAction
          action={props.actions[0]}
          actionWrapperStyle={props.actionWrapperStyle}
          buttonStyle={props.buttonStyle}
        />
      </TopicContentWrapper>
    </TopicWrapper>
  )
}
