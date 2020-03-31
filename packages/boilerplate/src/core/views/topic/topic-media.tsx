import React from 'react'
import { Image } from '../../elements/image'
import { Box } from '../../elements/grid'
import { TopicProps } from '../../../components/topic'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { Video } from '../../elements/video'
import { TopicMediaStyleTree } from './core-topic'

const defaultWrapperStyle = {
  label: 'topic-media',
  justifyContent: 'center',
}

export interface TopicMediaProps {
  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
  /** Reverse image and content */
  reverse?: boolean

  styleTree?: TopicMediaStyleTree
}

export const TopicMedia = (props: TopicMediaProps) => {
  const mediaStyle = props.styleTree
  const mediaWrapperStyle = (mediaStyle && mediaStyle.wrapper) || {}
  const mediaImageStyle = mediaStyle && mediaStyle.image
  const mediaVideoStyle = mediaStyle && mediaStyle.video
  return (
    <Box
      ncss={{
        ...defaultWrapperStyle,
        ...mediaWrapperStyle,
      }}
    >
      {props.topicInfo.hasImage && (
        <Image
          description={props.topic.media?.description}
          media={props.topic.media}
          styleTree={mediaImageStyle}
          title={props.topic.media?.title}
        />
      )}
      {props.topicInfo.hasVideo && (
        <Video
          description={props.topic.media?.description}
          media={props.topic.media}
          styleTree={mediaVideoStyle}
          title={props.topic.media?.title}
        />
      )}
    </Box>
  )
}
