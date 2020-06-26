import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import {
  primaryButtonNcssNode,
  displayButtonNcssNode,
  secondaryButtonNcssNode,
} from '../../../element-styles/button-style'
import {
  iconButtonNcssNode,
  iconTopicNcssNode,
} from '../../shared-styles/icon-style'
import { embedNcssNode } from '../../shared-styles/embed-style'
import { wrapperNcssNode } from '../../shared-styles/grid-style'
import { deepMerge } from '../../../../../../src-core'

export const topicSectionQuoteNcssTree: TopicSectionModelNcssTree = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {},
    content: {
      ncss: {
        textAlign: 'center',
        p: 3,
        maxWidth: [1, '60em', '68em'],
        mx: 'auto',
      },
      actions: {
        ncss: {
          mt: 6,
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        abstract: {
          ncss: {
            order: '2',
            fontSize: [9, 9, 10],
            fontStyle: 'italic',
            lineHeight: 3,
            my: 0,
            p: 0,
          },
        },
        heading: {
          ncss: {
            order: '1',
          },
        },
        icon: {
          ncss: {
            ...iconTopicNcssNode.ncss,
            order: '0',
          },
        },
      },
    },
    media: {
      ncss: {
        p: 3,
      },
      embed: embedNcssNode,
      image: {
        ncss: {
          h: 1,
          objectFit: 'cover',
        },
        picture: {
          ncss: {
            overflow: 'hidden',
            h: '200px',
            w: '200px',
            borderRadius: '100px',
            mx: 'auto',
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
  wrapper: deepMerge([
    wrapperNcssNode,
    {
      ncss: {
        py: 6,
      },
    },
  ]),
}
