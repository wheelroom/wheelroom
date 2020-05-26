import React from 'react'
import { Image } from '../../element/image'
import { Box } from '../../element/grid'
import { TopicProps } from '../../../../models/topic'
import { TopicInfo } from '../../../lib/get-topic-info'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { Video } from '../../element/video'
import { Wheel } from '../../types'
import { TopicMediaWheelStyle } from './presets/topic-media-preset'
import { EmbedProps } from '../../../../models/embed'
import { Embed } from '../embed/embed'
import { MediaObject } from '../../element/types/media'

export interface TopicMediaWheel extends Wheel {
  style: TopicMediaWheelStyle
}

export interface TopicMediaProps {
  /** Styling wheel */
  wheel: TopicMediaWheel
  /** All topic props */
  topic: TopicProps
  /** All embed props */
  embed: EmbedProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
}

export const TopicMedia = (props: TopicMediaProps) => {
  const pageSectionInfo = props.pageSectionInfo
  const topicOptions = pageSectionInfo.topicOptions
  const topicInfo = props.topicInfo
  const topic = props.topic
  let Media: any = null
  let mediaProps = {}
  if (topicInfo.hasImage && topic.media) {
    const media: MediaObject = topic.media
    Media = Image
    mediaProps = {
      includeFigcaption: false,
      description: media.description,
      media: topic.media,
      wheel: { ...props.wheel, style: props.wheel.style.image },
      title: media.title,
    }
  } else if (topicInfo.hasVideo && topic.media) {
    const media: MediaObject = topic.media
    Media = Video
    mediaProps = {
      includeTitle: false,
      includeDescription: false,
      description: media.description,
      media: media,
      wheel: { ...props.wheel, style: props.wheel.style.video },
      title: media.title,
    }
  } else if (topicInfo.hasMediaEmbed && topic.mediaEmbed) {
    const embed = props.topic.mediaEmbed
    Media = Embed
    mediaProps = {
      code: embed?.code,
      title: embed?.title,
      type: embed?.type,
      wheel: { ...props.wheel, style: props.wheel.style.embed },
    }
  } else if (topicInfo.hasMediaBreakpoint && topic.mediaBreakpoint) {
    Media = <div>Media breakpoint not yet implemented</div>
    mediaProps = {}
  }

  return (
    <Box
      ncss={{
        order: topicOptions.reverseOrder ? 0 : null,
      }}
      wheel={props.wheel}
    >
      <Media {...mediaProps} />
    </Box>
  )
}
