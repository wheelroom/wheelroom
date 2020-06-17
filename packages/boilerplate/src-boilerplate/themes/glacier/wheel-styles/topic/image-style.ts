import { PageSectionWheelStyle } from '../../../../../wheelroom'
import { wrapperStyle } from '../element-styles/grid-style'
import { iconTopicStyle } from '../element-styles/icon-style'
import { embedStyle } from '../element-styles/embed-style'

export const pageSectionImageStyle: PageSectionWheelStyle = {
  container: {
    ncss: {
      flexDirection: ['column', 'row'],
    },
  },
  topic: {
    ncss: {},
    content: {
      ncss: {},
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
