import { NcssProps } from '../../../types'
import { ImageElementStyle } from '../../../element/image'
import { VideoElementStyle } from '../../../element/video'
import { EmbedStyle } from '../../embed/embed'

export interface TopicMediaWheelStyle {
  /** Styling for this node */
  ncss: NcssProps
  /** Video style */
  embed: EmbedStyle
  /** Image style */
  image: ImageElementStyle
  /** Video style */
  video: VideoElementStyle
}

export const topicMediaPreset: TopicMediaWheelStyle = {
  ncss: {
    label: 'topic-media',
    display: 'flex',
    flexDirection: 'column',
  },
  embed: {
    ncss: {
      label: 'topic-media-embed',
      iframe: {
        h: 1,
        w: 1,
      },
    },
  },
  image: {
    picture: {
      ncss: {
        label: 'topic-picture',
      },
    },
    img: {
      ncss: {
        label: 'topic-img',
      },
    },
    figcaption: {
      ncss: {
        label: 'topic-caption',
      },
    },
  },
  video: {
    video: {
      ncss: {
        label: 'topic-video',
      },
    },
    description: {
      ncss: {
        label: 'topic-description',
      },
    },
  },
}
