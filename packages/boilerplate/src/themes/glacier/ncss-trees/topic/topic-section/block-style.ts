import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import {
  containerNcssNode,
  wrapperNcssNode,
} from '../../../shared-ncss/grid-ncss'
import { primaryButtonNcssNode } from '../../../element-ncss/button-ncss'
import { iconTopicNcssNode } from '../../../shared-ncss/icon-ncss'
import { embedNcssNode } from '../../../shared-ncss/embed-ncss'
import { deepMerge } from '../../../../../../src-core'

export const topicSectionBlockNcssTree: TopicSectionModelNcssTree = {
  container: deepMerge([
    containerNcssNode,
    {
      ncss: {
        alignItems: ['center', 'initial'],
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
      },
    },
  ]),
  topic: {
    ncss: {
      p: 3,
      w: [1, 1 / 2, 1 / 3],
      maxWidth: '35em',
    },
    content: {
      ncss: {
        p: 3,
      },
      actions: {
        ncss: {
          flex: '0',
          mt: 3,
        },
        link: {
          ...primaryButtonNcssNode,
          icon: {
            ncss: {},
          },
        },
      },
      text: {
        ncss: {
          flex: '1 1 auto',
        },
        abstract: {
          ncss: {
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
      ncss: {},
      embed: embedNcssNode,
      image: {
        ncss: {
          h: 1,
          objectFit: 'cover',
          position: 'absolute',
          w: 1,
        },
        picture: {
          ncss: {
            display: 'block',
            h: '0px',
            pb: '56.25%',
            position: 'relative',
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
