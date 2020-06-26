import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import { aLinkButtonNcssNode } from '../../../element-styles/button-style'
import { iconTopicNcssNode } from '../../shared-styles/icon-style'
import { embedNcssNode } from '../../shared-styles/embed-style'
import { wrapperNcssNode } from '../../shared-styles/grid-style'

export const topicSectionShowcaseNcssTree: TopicSectionModelNcssTree = {
  container: {
    ncss: {
      alignItems: ['center', 'baseline'],
      justifyContent: 'center',
      maxWidth: ['35em', '54rem'],
      flexDirection: 'column',
    },
  },
  topic: {
    ncss: {
      flexDirection: ['column', 'row'],
      py: 3,
    },
    content: {
      ncss: {
        flexDirection: 'column',
        p: 3,
      },
      actions: {
        ncss: {
          mt: 3,
        },
        link: {
          ...aLinkButtonNcssNode,
          icon: {
            ncss: {},
          },
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
        maxWidth: '254px',
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
