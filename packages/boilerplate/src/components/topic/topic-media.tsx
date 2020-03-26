import React from 'react'
import { Image, ImageProps } from '../../core/elements/image'
import { Box } from '../../core/elements/grid'
import { NcssProps } from '../../core/elements/types'
import { TopicProps } from '.'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { VideoProps, Video } from '../../core/elements/video'

const defaultWrapperStyle = {
  label: 'topic-image',
  justifyContent: 'center',
}

export interface TopicMediaProps {
  /** The image to show */
  mediaProps: ImageProps | VideoProps
  /** Override default styling of the wrapper */
  mediaWrapperStyle?: NcssProps

  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
  /** Reverse image and content */
  reverse?: boolean
}

export const TopicMedia = (props: TopicMediaProps) => {
  const mediaWrapperStyle = props.mediaWrapperStyle || {}
  return (
    <Box
      ncss={{
        ...defaultWrapperStyle,
        ...mediaWrapperStyle,
      }}
    >
      {props.topicInfo.hasImage && <Image {...props.mediaProps} />}
      {props.topicInfo.hasVideo && <Video {...props.mediaProps} />}
    </Box>
  )
}
