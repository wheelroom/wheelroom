import React from 'react'
import {
  Box,
  Embed,
  EmbedModel,
  Image,
  MediaBreakpoint,
  MediaGatsbyModel,
  Video,
  Wheel,
} from '../../../src-core'
import { TopicInfo } from '../../lib/get-topic-info'
import { TopicOptions } from '../../lib/get-topic-options'
import { TopicModel } from './model'
import { TopicNcssTree } from './ncss-tree'

export interface TopicMediaWheel extends Wheel {
  style: TopicNcssTree
}

export interface TopicMediaProps {
  /** Styling wheel */
  wheel: TopicMediaWheel
  /** All topic props */
  topic: TopicModel
  /** All embed props */
  embed: EmbedModel
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
    const media: MediaGatsbyModel = topic.media
    Media = Image
    mediaProps = {
      includeFigcaption: false,
      description: media.description,
      media: topic.media,
      wheel: { ...props.wheel, style: props.wheel.style.image },
      title: media.title,
    }
  } else if (topicInfo.hasVideo && topic.media) {
    const media: MediaGatsbyModel = topic.media
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
