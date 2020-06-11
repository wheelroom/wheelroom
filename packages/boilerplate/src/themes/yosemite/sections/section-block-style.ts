import { PageSectionBlockWheelStyle } from '../../../wheelroom/models/page-section/presets/page-section-block-preset'
import { primaryButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'
import { iconTopicStyle } from '../elements/icon-style'

export const sectionBlockStyle: PageSectionBlockWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {
      maxWidth: '35em',
    },
    content: {
      ncss: {},
      actions: {
        ncss: {
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
      ncss: {},
      embed: {
        ncss: {},
      },
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
