import { TopicNcssTree } from '@wheelroom/wheel-topic'

export const topicNcssTree: TopicNcssTree = {
  ncssSwitch: {
    container: {
      label: 'topic',
      display: 'flex',
      flexDirection: 'column',
      w: 1,
    },
    containerAsLink: {
      label: 'topic-as-link',
      display: 'flex',
      flexDirection: 'column',
      w: 1,
    },
  },
  media: {
    ncss: {
      label: 'topic-media',
      display: 'flex',
      flexDirection: 'column',
      ':only-of-type': {},
    },
  },
  embed: {
    ncss: {
      label: 'topic-embed',
      iframe: {
        h: 1,
        w: 1,
      },
    },
  },
  image: {
    ncss: {
      label: 'topic-img',
    },
    picture: {
      ncss: {
        label: 'topic-picture',
      },
    },
    figcaption: {
      ncss: {
        label: 'topic-figcaption',
      },
    },
  },
  mediaBreakpoint: {
    ncss: {
      label: 'topic-media-breakpoint-img',
    },
    picture: {
      ncss: {
        label: 'topic-media-breakpoint-picture',
      },
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
  content: {
    ncss: {
      label: 'topic-content',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      ':only-of-type': {},
    },
  },
  text: {
    ncss: {
      label: 'topic-text',
      ':only-of-type': {},
    },
  },
  icon: {
    ncss: {
      label: 'topic-icon',
    },
  },
  heading: {
    ncss: {
      label: 'topic-heading',
    },
  },
  abstract: {
    ncss: {
      label: 'topic-abstract',
    },
  },
  actionGroup: {
    ncss: {
      label: 'topic-actions',
      mx: -1,
      ':only-of-type': {},
    },
  },
  action: {
    ncss: {
      label: 'topic-action',
      m: 1,
    },
    icon: {
      ncss: {
        label: 'topic-icon',
        w: '15px',
        h: '15px',
        my: 'auto',
        transform: 'translateX(4px)',
      },
    },
  },
}
