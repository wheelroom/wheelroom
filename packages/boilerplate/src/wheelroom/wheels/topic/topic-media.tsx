import React from 'react'
import { Image } from '../elements/image'
import { Box } from '../elements/grid'
import { TopicProps } from '../../../models/topic'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { Video } from '../elements/video'
import { Wheel } from '../types'

export interface TopicMediaProps {
  /** Styling wheel */
  wheel: Wheel
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
  return (
    <Box
      ncss={{
        ...props.wheel.style.ncss,
        order: props.reverse ? 0 : null,
      }}
      wheel={props.wheel}
    >
      {props.topicInfo.hasImage && (
        <Image
          includeFigcaption={false}
          description={props.topic.media?.description}
          media={props.topic.media}
          wheel={{ ...props.wheel, style: props.wheel.style.image }}
          title={props.topic.media?.title}
        />
      )}
      {props.topicInfo.hasVideo && (
        <Video
          includeTitle={false}
          includeDescription={false}
          description={props.topic.media?.description}
          media={props.topic.media}
          wheel={{ ...props.wheel, style: props.wheel.style.video }}
          title={props.topic.media?.title}
        />
      )}
    </Box>
  )
}
