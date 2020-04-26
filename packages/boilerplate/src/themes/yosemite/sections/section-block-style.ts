import { PageSectionBlockWheelStyle } from '../../../wheelroom/wheels/section/unicorn/presets/page-section-block-preset'
import { primaryButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'

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
        link: primaryButtonStyle,
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
        icon: {
          ncss: {
            mb: 2,
          },
        },
      },
    },
    media: {
      ncss: {},
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
