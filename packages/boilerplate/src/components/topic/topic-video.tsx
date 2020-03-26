import React from 'react'
import { Video, VideoProps } from '../../core/elements/video'
import { Box } from '../../core/elements/grid'
import { NcssProps } from '../../core/elements/types'
import { TopicProps } from '.'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'

const defaultWrapperStyle = {
  label: 'topic-video',
  justifyContent: 'center',
}

const overrideVideoWrapperStyle = {
  label: 'topic-video-override',
  justifyContent: 'normal',
}

const defaultVideoProps = {}

export interface TopicVideoProps {
  /** The image to show */
  videoProps: VideoProps
  /** Override default styling of the wrapper */
  videoWrapperStyle?: NcssProps

  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
  /** Reverse image and content */
  reverse?: boolean
}

export const TopicVideo = (props: TopicVideoProps) => {
  const order = props.reverse ? -1 : -2

  const videoWrapperStyle = props.videoWrapperStyle || {}
  return (
    <Box
      ncss={{
        order,
        ...defaultWrapperStyle,
        ...videoWrapperStyle,
        ...(props.pageSectionInfo.hasText
          ? { ...overrideVideoWrapperStyle }
          : videoWrapperStyle),
      }}
    >
      <Video {...defaultVideoProps} {...props.videoProps} />
    </Box>
  )
}
