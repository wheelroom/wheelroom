import { TopicMediaWheelStyle } from '../../../../../../src-topic-wheel/models/topic/presets/topic-media-preset'

export const topicMediaStyle: TopicMediaWheelStyle = {
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
