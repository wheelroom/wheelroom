import { NcssProps } from '../../elements/types'
import { ImageTreeStyle } from '../../elements/image'
import { VideoTreeStyle } from '../../elements/video'

export interface TopicMediaTreeStyle {
  /** Styling for this node */
  ncss?: NcssProps
  /** Image style */
  image?: ImageTreeStyle
  /** Video style */
  video?: VideoTreeStyle
}

export const topicMediaStyle: TopicMediaTreeStyle = {
  ncss: {
    label: 'topic-media',
    display: 'flex',
  },
  image: {
    img: {
      ncss: {
        label: 'topic-img',
      },
    },
    picture: {
      ncss: {
        label: 'topic-picture',
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
