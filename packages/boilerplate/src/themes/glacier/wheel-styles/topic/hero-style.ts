import { TopicSectionWheelStyle } from '../../../../../src-topic-wheel'
import {
  primaryButtonStyle,
  displayButtonStyle,
  secondaryButtonStyle,
} from '../../element-styles/button-style'
import { iconButtonStyle, iconTopicStyle } from '../shared-styles/icon-style'
import { embedStyle } from '../shared-styles/embed-style'

export const topicSectionHeroStyle: TopicSectionWheelStyle = {
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
        icon: iconTopicStyle,
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
      embed: embedStyle,
      image: {
        img: {
          ncss: {
            h: 1,
            objectFit: 'cover',
          },
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
        img: {
          ncss: {},
        },
      },
      video: {
        video: {
          ncss: {
            h: 1,
          },
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
