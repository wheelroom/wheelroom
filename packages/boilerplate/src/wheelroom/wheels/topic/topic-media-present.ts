import { NcssProps } from '../elements/types'
import { ImageTreeStyle } from '../elements/image'
import { VideoTreeStyle } from '../elements/video'

export interface TopicMediaTreeStyle {
  /** Styling for this node */
  ncss?: NcssProps
  /** Image style */
  image?: ImageTreeStyle
  /** Video style */
  video?: VideoTreeStyle
}

export const topicMediaPresent: TopicMediaTreeStyle = {
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
