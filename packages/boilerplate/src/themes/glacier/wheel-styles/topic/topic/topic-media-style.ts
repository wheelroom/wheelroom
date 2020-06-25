import { TopicMediaWheelStyle } from '../../../../../../src-topic-wheel/models/topic/topic-media'

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
    ncss: {
      label: 'topic-image',
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
  mediaBreakpoint: {
    picture: {
      ncss: {
        label: 'topic-media-breakpoint-picture',
      },
    },
    ncss: {
      label: 'topic-media-Breakpoint-img',
    },
  },
  video: {
    ncss: {
      label: 'topic-video',
    },
    description: {
      ncss: {
        label: 'topic-video-description',
      },
    },
  },
}
