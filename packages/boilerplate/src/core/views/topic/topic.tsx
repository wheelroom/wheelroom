import { TopicProps } from '../../../components/topic'
import { getTopicInfo } from '../../lib/get-topic-info'
import { TopicWrapper } from './topic-wrapper'
import React, { Fragment } from 'react'
import { TopicMedia } from './topic-media'
import { TopicContentWrapper } from './topic-content-wrapper'
import { TopicHeader } from './topic-header'
import { TopicActions } from './topic-actions'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { ActionProps } from '../../../components/action'
import { ImageProps } from '../../primary-elements/image'
import { VideoProps } from '../../primary-elements/video'
import { BlockLevelElementName, NcssProps } from '../../primary-elements/types'

export interface TopicLocalProps {
  /** Options that change topic display behaviour */
  pageSectionInfo: PageSectionInfo
  /** Page section actions will override all topic actions */
  pageSectionActions?: ActionProps[]
  /** Override default media props */
  mediaProps?: ImageProps | VideoProps

  /** Defaults to h3 */
  useHeadingElement?: BlockLevelElementName
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName
  /** Full Topic is wrapped in a link and the inside link becomes a span */
  fullTopicAsLink?: boolean
  /** Reverse media and content */
  forceReverse?: boolean

  /** Override default wrapper styling */
  topicWrapperStyle?: NcssProps
  /** Override default content wrapper styling */
  contentWrapperStyle?: NcssProps
  /** Override default styling of the image wrapper */
  mediaWrapperStyle?: NcssProps
  /** Override default styling of the headerwrapper */
  headerWrapperStyle?: NcssProps
  /** Override default heading style */
  headingStyle?: NcssProps
  /** Override default paragraph style */
  paragraphStyle?: NcssProps
  /** Override default styling of the action wrapper */
  actionWrapperStyle?: NcssProps
  /** Override default button style */
  actionStyle?: NcssProps
}

export const Topic = (props: TopicProps) => {
  const topicInfo = getTopicInfo(props)
  const pageSectionInfo = props.pageSectionInfo
  const topicOptions = pageSectionInfo.topicOptions

  const showMedia =
    (topicInfo.hasImage && !topicOptions.hideMedia) ||
    (topicInfo.hasVideo && !topicOptions.hideMedia)
  const showAction = topicInfo.hasAction && !topicOptions.hideAction
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
            useAbstractElement={props.useAbstractElement}
            useHeadingElement={props.useHeadingElement}
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
