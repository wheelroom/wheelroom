import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import {
  primaryButtonStyle,
  displayButtonStyle,
  secondaryButtonStyle,
} from '../../../element-styles/button-style'
import { iconButtonStyle, iconTopicNcss } from '../../shared-styles/icon-style'
import { embedNcss } from '../../shared-styles/embed-style'
import { wrapperNcss } from '../../shared-styles/grid-style'

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
            ...primaryButtonStyle.ncss,
            ...displayButtonStyle.ncss,
            ':nth-of-type(2)': {
              ...secondaryButtonStyle.ncss,
              ...displayButtonStyle.ncss,
            },
          },
          icon: iconButtonStyle,
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
        maxWidth: ['35em', '35em', '45%'],
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
