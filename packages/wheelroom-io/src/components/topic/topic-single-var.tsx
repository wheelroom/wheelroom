/**
 * Component variation
 *
 * Component type: topic
 * Variation: Single
 *
 */

import React, { Fragment } from 'react'
import { TopicProps } from './topic'
import { TopicWrapper } from './topic-wrapper'
import { TopicImage } from './topic-image'
import { TopicHeader } from './topic-header'
import { TopicAction } from './topic-action'
import { TopicContentWrapper } from './topic-content-wrapper'
import { Text } from '../text'

export const TopicSingleVar = (props: TopicProps) => {
  const hasText = props.text && props.text.text && props.text.locale
  return (
    <TopicWrapper topicWrapperStyle={props.topicWrapperStyle}>
      <TopicImage
        imageProps={{ ...props.imageProps, image: props.image }}
        imageWrapperStyle={props.imageWrapperStyle}
      />
      <TopicContentWrapper contentWrapperStyle={props.contentWrapperStyle}>
        {hasText && <Text {...props.text!} />}
        {!hasText && (
          <Fragment>
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
          </Fragment>
        )}
      </TopicContentWrapper>
    </TopicWrapper>
  )
}
