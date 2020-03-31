import React from 'react'
import { Image } from '../../primary-elements/image'
import { Box } from '../../primary-elements/grid'
import { TopicProps } from '../../../components/topic'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { Video } from '../../primary-elements/video'
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
      {props.topicInfo.hasImage && <Image styleTree={mediaImageStyle} />}
      {props.topicInfo.hasVideo && <Video styleTree={mediaVideoStyle} />}
    </Box>
  )
}
