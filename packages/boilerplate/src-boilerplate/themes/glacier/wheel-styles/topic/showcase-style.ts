import { TopicSectionWheelStyle } from '../../../../../src-topic-wheel'
import { aLinkButtonStyle } from '../../element-styles/button-style'
import { iconTopicStyle } from '../shared-styles/icon-style'
import { embedStyle } from '../shared-styles/embed-style'
import { wrapperStyle } from '../shared-styles/grid-style'

export const topicSectionShowcaseStyle: TopicSectionWheelStyle = {
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
        icon: iconTopicStyle,
      },
    },
    media: {
      ncss: {
        flexDirection: 'column',
        p: 3,
        maxWidth: '254px',
        w: 1,
      },
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
