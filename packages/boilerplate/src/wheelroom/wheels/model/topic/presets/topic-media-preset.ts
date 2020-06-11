import { NcssProps } from '../../../../types/wheel'
import { ImageElementStyle } from '../../../../elements/image'
import { VideoElementStyle } from '../../../../elements/video'
import { EmbedStyle } from '../../../../models/embed/embed'
import { MediaBreakpointStyle } from '../../media-breakpoint/media-breakpoint'

export interface TopicMediaWheelStyle {
  /** Styling for this node */
  ncss: NcssProps
  /** Video style */
  embed: EmbedStyle
  /** Image style */
  image: ImageElementStyle
  /** Media Breakpoint Style */
  mediaBreakpoint: MediaBreakpointStyle
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
  mediaBreakpoint: {
    picture: {
      ncss: {
        label: 'topic-mb-picture',
      },
    },
    img: {
      ncss: {
        label: 'topic-mb-img',
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
