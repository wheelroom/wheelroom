import { TopicSectionWheelStyle } from '../../../../../../src-topic-wheel'
import {
  primaryButtonStyle,
  displayButtonStyle,
  secondaryButtonStyle,
} from '../../../element-styles/button-style'
import { iconButtonStyle, iconTopicStyle } from '../../shared-styles/icon-style'
import { embedStyle } from '../../shared-styles/embed-style'
import { wrapperStyle } from '../../shared-styles/grid-style'

export const topicSectionHeadlineStyle: TopicSectionWheelStyle = {
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
        icon: iconTopicStyle,
      },
    },
    media: {
      ncss: {},
      embed: embedStyle,
      image: {
        img: {
          ncss: {},
        },
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
        img: {
          ncss: {},
        },
      },
      video: {
        video: {
          ncss: {},
        },
        description: {
          ncss: {},
        },
      },
    },
  },
  wrapper: wrapperStyle,
}
