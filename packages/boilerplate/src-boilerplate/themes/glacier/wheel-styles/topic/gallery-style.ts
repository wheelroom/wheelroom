import { TopicSectionWheelStyle } from '../../../../../src-topic-wheel'
import { iconTopicStyle } from '../shared-styles/icon-style'
import { embedStyle } from '../shared-styles/embed-style'
import { wrapperStyle } from '../shared-styles/grid-style'

export const pageSectionGalleryStyle: TopicSectionWheelStyle = {
  container: {
    ncss: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
  },
  topic: {
    ncss: {
      w: 1 / 2,
    },
    content: {
      ncss: {
        p: 3,
      },
      actions: {
        ncss: {},
        link: {
          ncss: {},
          icon: {
            ncss: {},
          },
        },
      },
      text: {
        ncss: {},
        abstract: {
          ncss: {},
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
          ncss: {
            p: 3,
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
