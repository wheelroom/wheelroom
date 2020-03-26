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
import { TopicHeader } from './topic-header'
import { TopicActions } from './topic-actions'
import { TopicContentWrapper } from './topic-content-wrapper'
import { getTopicInfo } from '../../lib/get-topic-info'
import { TopicMedia } from './topic-media'

export const TopicSingleVar = (props: TopicProps) => {
  const topicInfo = getTopicInfo(props)
  const pageSectionInfo = props.pageSectionInfo
  const topicOptions = pageSectionInfo.topicOptions

  const showMedia =
    (topicInfo.hasImage && !topicOptions.hideMedia) ||
    (topicInfo.hasVideo && !topicOptions.hideMedia)
  const showAction = topicInfo.hasAction
  const reverse =
    props.forceReverse || props.pageSectionInfo.topicOptions.reverseOrder

  return (
    <TopicWrapper
      topic={props}
      topicInfo={topicInfo}
      pageSectionInfo={pageSectionInfo}
      topicWrapperStyle={props.topicWrapperStyle}
      fullTopicAsLink={props.fullTopicAsLink}
    >
      {showMedia && (
        <TopicMedia
          topic={props}
          topicInfo={topicInfo}
          pageSectionInfo={pageSectionInfo}
          mediaProps={{ ...props.mediaProps, media: props.media }}
          mediaWrapperStyle={props.mediaWrapperStyle}
          reverse={reverse}
        />
      )}
      <TopicContentWrapper
        topic={props}
        topicInfo={topicInfo}
        pageSectionInfo={pageSectionInfo}
        contentWrapperStyle={props.contentWrapperStyle}
        reverse={reverse}
      >
        <Fragment>
          <TopicHeader
            topic={props}
            topicInfo={topicInfo}
            pageSectionInfo={pageSectionInfo}
            headerWrapperStyle={props.headerWrapperStyle}
            headingStyle={props.headingStyle}
            paragraphStyle={props.paragraphStyle}
            useParagraph={props.useParagraph}
            useHeading={props.useHeading}
          />
          {showAction && (
            <TopicActions
              topic={props}
              topicInfo={topicInfo}
              pageSectionInfo={pageSectionInfo}
              pageSectionActions={props.pageSectionActions}
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
