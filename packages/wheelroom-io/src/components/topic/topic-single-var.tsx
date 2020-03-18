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
import { Text } from '../text'

export const TopicSingleVar = (props: TopicProps) => {
  return (
    <TopicWrapper topicWrapperStyle={props.topicWrapperStyle}>
      <TopicImage
        imageProps={{ ...props.imageProps, image: props.image }}
        imageWrapperStyle={props.imageWrapperStyle}
      />
      <TopicContentWrapper contentWrapperStyle={props.contentWrapperStyle}>
        {props.text?.text && <Text {...props.text} />}
        <TopicHeader
          topic={props}
          headerWrapperStyle={props.headerWrapperStyle}
          headingStyle={props.headingStyle}
          paragraphStyle={props.paragraphStyle}
          useHeading={props.useHeading}
        />
        <TopicAction
          action={props.actions[0]}
          actionWrapperStyle={props.actionWrapperStyle}
          actionStyle={props.actionStyle}
        />
      </TopicContentWrapper>
    </TopicWrapper>
  )
}
