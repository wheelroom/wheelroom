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
import { wrapperNcssNode } from '../../../shared-ncss/grid-ncss'

export const topicSectionHeadlineNcssTree: TopicSectionModelNcssTree = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {},
    content: {
      ncss: {
        textAlign: 'center',
        mx: 'auto',
        p: 3,
        maxWidth: [1, '48em'],
        py: 5,
      },
      actions: {
        ncss: {
          mt: 3,
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
        ncss: {},
        abstract: {
          ncss: {
            fontSize: [7, 7, 8, 8],
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
        ncss: {},
        picture: {
          ncss: {},
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
