import React from 'react'
import { TopicInfo } from '../../lib/get-topic-info'
import { TopicOptions } from '../../lib/get-topic-options'
import {
  Box,
  Embed,
  EmbedProps,
  Image,
  MediaBreakpoint,
  MediaObject,
  Video,
  Wheel,
} from '../../../src-core'
import { TopicProps } from './model-types'
import { TopicMediaWheelStyle } from './presets/topic-media-style'

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
  /** Topic options */
  topicOptions: TopicOptions
}

export const TopicMedia = (props: TopicMediaProps) => {
  const topicOptions = props.topicOptions
  const topicInfo = props.topicInfo
  const topic = props.topic
  let Media: any = null
  let mediaProps = {}
  if (topicInfo.hasMediaBreakpoint && topic.mediaBreakpoint) {
    Media = MediaBreakpoint
    const media = topic.mediaBreakpoint
    mediaProps = {
      small: media?.small,
      medium: media?.medium,
      large: media?.large,
      extraLarge: media.extraLarge,
      wheel: { ...props.wheel, style: props.wheel.style.mediaBreakpoint },
    }
  } else if (topicInfo.hasImage && topic.media) {
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
      type: embed?.type,
      wheel: { ...props.wheel, style: props.wheel.style.embed },
    }
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
