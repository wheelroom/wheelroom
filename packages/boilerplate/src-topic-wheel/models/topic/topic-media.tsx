import React from 'react'
import {
  Box,
  Embed,
  EmbedModelProps,
  Image,
  MediaBreakpoint,
  MediaObject,
  Video,
  Wheel,
} from '../../../src-core'
import { TopicInfo } from '../../lib/get-topic-info'
import { TopicOptions } from '../../lib/get-topic-options'
import { TopicModelProps } from './model-props'
import { TopicModelNcssTree } from './model-ncss-tree'

export interface TopicMediaWheel extends Wheel {
  style: TopicModelNcssTree
}

export interface TopicMediaProps {
  /** Styling wheel */
  wheel: TopicMediaWheel
  /** All topic props */
  topic: TopicModelProps
  /** All embed props */
  embed: EmbedModelProps
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
    <Box wheel={{ ...props.wheel, style: props.wheel.style.media }}>
      <Media {...mediaProps} />
    </Box>
  )
}
