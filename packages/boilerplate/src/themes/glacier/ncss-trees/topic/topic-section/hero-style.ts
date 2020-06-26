import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import {
  primaryButtonNcssNode,
  displayButtonNcssNode,
  secondaryButtonNcssNode,
} from '../../../element-ncss/button-ncss'
import {
  iconButtonNcssNode,
  iconTopicNcssNode,
} from '../../../shared-ncss/icon-ncss'
import { embedNcssNode } from '../../../shared-ncss/embed-ncss'

export const topicSectionHeroNcssTree: TopicSectionModelNcssTree = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {
      position: 'relative',
      w: 1,
    },
    content: {
      ncss: {
        maxWidth: '80em',
        mx: 'auto',
        px: [4, 5, 6],
        py: [7, 8, 10, 12],
        w: 1,
      },
      actions: {
        ncss: {
          maxWidth: '30em',
          mt: 5,
        },
        link: {
          ncss: {
            ...primaryButtonNcssNode.ncss,
            ...displayButtonNcssNode.ncss,
            ':nth-of-type(2)': {
              ...secondaryButtonNcssNode.ncss,
              ...displayButtonNcssNode.ncss,
            },
          },
          icon: iconButtonNcssNode,
        },
      },
      text: {
        ncss: {
          maxWidth: '30em',
        },
        abstract: {
          ncss: {
            fontSize: [7, 7, 8, 8],
            mb: 0,
          },
        },
        heading: {
          ncss: {},
        },
        icon: iconTopicNcssNode,
      },
    },
    media: {
      ncss: {
        bottom: '0',
        left: '0',
        position: 'absolute',
        right: '0',
        top: '0',
        zIndex: -1,
        overflow: 'hidden',
      },
      embed: embedNcssNode,
      image: {
        ncss: {
          h: 1,
          objectFit: 'cover',
        },
        picture: {
          ncss: {
            h: 1,
            w: 1,
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
        ncss: {
          h: 1,
        },
        description: {
          ncss: {},
        },
      },
    },
  },
  wrapper: {
    ncss: {
      py: 0,
    },
  },
}
