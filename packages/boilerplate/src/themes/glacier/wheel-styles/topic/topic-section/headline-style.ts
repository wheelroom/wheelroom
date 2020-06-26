import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import {
  primaryButtonStyle,
  displayButtonStyle,
  secondaryButtonStyle,
} from '../../../element-styles/button-style'
import { iconButtonStyle, iconTopicNcss } from '../../shared-styles/icon-style'
import { embedNcss } from '../../shared-styles/embed-style'
import { wrapperNcss } from '../../shared-styles/grid-style'

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
            fontSize: [7, 7, 8, 8],
          },
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
