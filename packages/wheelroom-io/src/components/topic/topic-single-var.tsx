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
  const hasText = props.text && props.text.text && props.text.locale
  return (
    <TopicWrapper topicWrapperStyle={props.topicWrapperStyle}>
      {!options.hideImage && (
        <TopicImage
          imageProps={{ ...props.imageProps, image: props.image }}
          imageWrapperStyle={props.imageWrapperStyle}
          order={options.reverseOrder ? 2 : 1}
        />
      )}
      <TopicContentWrapper
        order={options.reverseOrder ? 1 : 2}
        contentWrapperStyle={props.contentWrapperStyle}
        options={options}
      >
        {hasText && <Text {...props.text!} />}
        {!hasText && (
          <Fragment>
            <TopicHeader
              topic={props}
              options={options}
              headerWrapperStyle={props.headerWrapperStyle}
              headingStyle={props.headingStyle}
              paragraphStyle={props.paragraphStyle}
              useHeading={props.useHeading}
            />
            {!options.hideAction && (
              <TopicAction
                action={props.actions[0]}
                actionWrapperStyle={props.actionWrapperStyle}
                actionStyle={props.actionStyle}
              />
            )}
          </Fragment>
        )}
      </TopicContentWrapper>
    </TopicWrapper>
  )
}
