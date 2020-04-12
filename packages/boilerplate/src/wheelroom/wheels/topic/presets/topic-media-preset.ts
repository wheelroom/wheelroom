import { NcssProps } from '../../types'
import { ImagePreset } from '../../elements/image'
import { VideoPreset } from '../../elements/video'

export interface TopicMediaTreeStyle {
  /** Styling for this node */
  ncss?: NcssProps
  /** Image style */
  image?: ImagePreset
  /** Video style */
  video?: VideoPreset
}

export const topicMediaPreset: TopicMediaTreeStyle = {
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
