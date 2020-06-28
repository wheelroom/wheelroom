import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import {
  primaryButtonNcssNode,
  displayButtonNcssNode,
  secondaryButtonNcssNode,
} from '../../../element-ncss/button-ncss'
import { iconButtonNcssNode, iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { wrapperNcssNode } from '../../grid-ncss'

export const topicSectionFeaturedNcssTree: TopicSectionModelNcssTree = {
  container: {
    ncss: {
      flexDirection: 'column',
    },
  },
  topic: {
    ncss: {
      flexDirection: ['column', 'column', 'row'],
      justifyContent: 'space-evenly',
      py: 3,
      alignItems: 'center',
      ':nth-of-type(even) > div:nth-of-type(1)': {
        order: ['0', '0', '1'],
      },
    },
    content: {
      ncss: {
        flexDirection: 'column',
        p: 3,
        maxWidth: ['35em', '35em', '45%'],
        w: 1,
      },
      actions: {
        ncss: {
          mt: [4, 4, 5],
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
        flexDirection: 'column',
        p: 3,
        maxWidth: ['35em', '35em', '45%'],
        w: 1,
      },
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

export const pageSectionFeaturedReverseStyle = {
  topic: {
    ncss: {
      label: 'topic-reverse',
      ':nth-of-type(even) > div:nth-of-type(1)': {
        order: ['0', '0', '-2'],
      },
    },
  },
}
