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
import { getTopicOptions } from '../page-section/get-topic-options'

export const TopicSingleVar = (props: TopicProps) => {
  const options = getTopicOptions(props.topicOptions)
  const hasText = !!(props.text && props.text.text && props.text.locale)
  const hasAction = !!(
    !options.hideAction &&
    Array.isArray(props.actions) &&
    props.actions.length > 0
  )
  const hasImage = !!props.image
  return (
    <TopicWrapper
      topicWrapperStyle={props.topicWrapperStyle}
      hasText={hasText}
      hasAction={hasAction}
      options={options}
      action={hasAction && props.actions[0]}
      fullTopicAsLink={props.fullTopicAsLink}
    >
      {!options.hideImage && hasImage && (
        <TopicImage
          imageProps={{ ...props.imageProps, image: props.image }}
          imageWrapperStyle={props.imageWrapperStyle}
          order={props.reverse || options.reverseOrder ? 2 : 1}
          hasText={hasText}
        />
      )}
      <TopicContentWrapper
        order={props.reverse || options.reverseOrder ? 1 : 2}
        contentWrapperStyle={props.contentWrapperStyle}
        options={options}
      >
        <Fragment>
          <TopicHeader
            topic={props}
            options={options}
            headerWrapperStyle={props.headerWrapperStyle}
            headingStyle={props.headingStyle}
            paragraphStyle={props.paragraphStyle}
            useHeading={props.useHeading}
          />
          {hasText && <Text {...props.text!} />}
          {hasAction && (
            <TopicAction
              action={props.actions[0]}
              actionWrapperStyle={props.actionWrapperStyle}
              actionStyle={props.actionStyle}
              fullTopicAsLink={props.fullTopicAsLink}
            />
          )}
        </Fragment>
      </TopicContentWrapper>
    </TopicWrapper>
  )
}
