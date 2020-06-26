import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import { iconTopicNcss } from '../../shared-styles/icon-style'
import { embedNcss } from '../../shared-styles/embed-style'
import { wrapperNcss } from '../../shared-styles/grid-style'

export const topicSectionGalleryNcssTree: TopicSectionModelNcssTree = {
  container: {
    ncss: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
  },
  topic: {
    ncss: {
      w: 1 / 2,
    },
    content: {
      ncss: {
        p: 3,
      },
      actions: {
        ncss: {},
        link: {
          ncss: {},
          icon: {
            ncss: {},
          },
        },
      },
      text: {
        ncss: {},
        abstract: {
          ncss: {},
        },
        heading: {
          ncss: {},
        },
        icon: iconTopicNcss,
      },
    },
    media: {
      ncss: {},
      embed: embedNcss,
      image: {
        ncss: {},
        picture: {
          ncss: {
            p: 3,
          },
        },
        figcaption: {
          ncss: {},
        },
      },
      mediaBreakpoint: {
        picture: {
          ncss: {},
        },
        ncss: {},
      },
      video: {
        ncss: {},
        description: {
          ncss: {},
        },
      },
    },
  },
  wrapper: wrapperNcss,
}
