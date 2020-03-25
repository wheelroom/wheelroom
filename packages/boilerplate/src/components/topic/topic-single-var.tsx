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
import { TopicActions } from './topic-actions'
import { TopicContentWrapper } from './topic-content-wrapper'
import { Text } from '../text/text'
import { getTopicInfo } from '../../lib/get-topic-info'

export const TopicSingleVar = (props: TopicProps) => {
  const topicInfo = getTopicInfo(props)
  const pageSectionInfo = props.pageSectionInfo
  const topicOptions = pageSectionInfo.topicOptions

  const showImage = topicInfo.hasFluidImageObject && !topicOptions.hideImage
  const showText = pageSectionInfo.hasText && props.text
  const showAction = topicInfo.hasAction

  return (
    <TopicWrapper
      topic={props}
      topicInfo={topicInfo}
      pageSectionInfo={pageSectionInfo}
      topicWrapperStyle={props.topicWrapperStyle}
      fullTopicAsLink={props.fullTopicAsLink}
    >
      {showImage && (
        <TopicImage
          topic={props}
          topicInfo={topicInfo}
          pageSectionInfo={pageSectionInfo}
          imageProps={{ ...props.imageProps, fluidImageObject: props.image }}
          imageWrapperStyle={props.imageWrapperStyle}
          forceReverse={props.forceReverse}
        />
      )}
      <TopicContentWrapper
        topic={props}
        topicInfo={topicInfo}
        pageSectionInfo={pageSectionInfo}
        contentWrapperStyle={props.contentWrapperStyle}
        forceReverse={props.forceReverse}
      >
        <Fragment>
          <TopicHeader
            topic={props}
            topicInfo={topicInfo}
            pageSectionInfo={pageSectionInfo}
            headerWrapperStyle={props.headerWrapperStyle}
            headingStyle={props.headingStyle}
            paragraphStyle={props.paragraphStyle}
            useHeading={props.useHeading}
          />
          {showText && <Text {...props.text!} />}
          {showAction && (
            <TopicActions
              topic={props}
              topicInfo={topicInfo}
              pageSectionInfo={pageSectionInfo}
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
