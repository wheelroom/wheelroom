import React from 'react'
import { Image } from '../elements/image'
import { Box } from '../elements/grid'
import { TopicProps } from '../../../models/topic'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { Video } from '../elements/video'
import { TopicMediaTreeStyle } from './topic-media-present'

export interface TopicMediaProps {
  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
  /** Reverse image and content */
  reverse?: boolean

  treeStyle?: TopicMediaTreeStyle
}

export const TopicMedia = (props: TopicMediaProps) => {
  const mediaStyle = props.treeStyle
  const ncssStyle = (mediaStyle && mediaStyle.ncss) || {}
  const mediaImageStyle = mediaStyle && mediaStyle.image
  const mediaVideoStyle = mediaStyle && mediaStyle.video

  ncssStyle.order = props.reverse ? 0 : null

  return (
    <Box ncss={ncssStyle}>
      {props.topicInfo.hasImage && (
        <Image
          description={props.topic.media?.description}
          media={props.topic.media}
          treeStyle={mediaImageStyle}
          title={props.topic.media?.title}
        />
      )}
      {props.topicInfo.hasVideo && (
        <Video
          includeTitle={false}
          includeDescription={false}
          description={props.topic.media?.description}
          media={props.topic.media}
          treeStyle={mediaVideoStyle}
          title={props.topic.media?.title}
        />
      )}
    </Box>
  )
}
