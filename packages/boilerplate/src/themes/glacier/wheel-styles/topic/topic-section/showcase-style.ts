import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import { aLinkButtonStyle } from '../../../element-styles/button-style'
import { iconTopicNcss } from '../../shared-styles/icon-style'
import { embedNcss } from '../../shared-styles/embed-style'
import { wrapperNcss } from '../../shared-styles/grid-style'

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
          ...aLinkButtonStyle,
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
        icon: iconTopicNcss,
      },
    },
    media: {
      ncss: {
        flexDirection: 'column',
        p: 3,
        maxWidth: '254px',
        w: 1,
      },
      embed: embedNcss,
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
  wrapper: wrapperNcss,
}
