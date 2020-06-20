import { TopicSectionWheelStyle } from '../../../../../src-topic-wheel'
import { containerStyle, wrapperStyle } from '../shared-styles/grid-style'
import { primaryButtonStyle } from '../../element-styles/button-style'
import { iconTopicStyle } from '../shared-styles/icon-style'

export const pageSectionBlockStyle: TopicSectionWheelStyle = {
  container: {
    ncss: {
      ...containerStyle,
      alignItems: ['center', 'initial'],
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
    },
  },
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
          ...primaryButtonStyle,
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
        icon: iconTopicStyle,
      },
    },
    media: {
      ncss: {},
      embed: {
        ncss: {
          position: 'relative',
          h: '0px',
          pb: '56.25%',
          iframe: {
            position: 'absolute',
          },
        },
      },
      image: {
        img: {
          ncss: {
            h: 1,
            objectFit: 'cover',
            position: 'absolute',
            w: 1,
          },
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
