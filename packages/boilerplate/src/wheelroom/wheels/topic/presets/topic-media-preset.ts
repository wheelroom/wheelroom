import { NcssProps } from '../../types'
import { ImageReset } from '../../elements/image'
import { VideoReset } from '../../elements/video'

export interface TopicMediaPreset {
  /** Styling for this node */
  ncss: NcssProps
  /** Image style */
  image: ImageReset
  /** Video style */
  video: VideoReset
}

export const topicMediaPreset: TopicMediaPreset = {
  ncss: {
    label: 'topic-media',
    display: 'flex',
    flexDirection: 'column',
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
