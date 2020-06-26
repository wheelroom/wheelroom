import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import { iconTopicNcssNode } from '../../shared-styles/icon-style'
import { embedNcssNode } from '../../shared-styles/embed-style'
import { wrapperNcssNode } from '../../shared-styles/grid-style'

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
        icon: iconTopicNcssNode,
      },
    },
    media: {
      ncss: {},
      embed: embedNcssNode,
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
  wrapper: wrapperNcssNode,
}
