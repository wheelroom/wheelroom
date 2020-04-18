import { PageSectionBlockWheelStyle } from '../../../wheelroom/wheels/page-section/unicorn/presets/page-section-block-preset'
import { elementAsPrimaryButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'

export const pageSectionBlockStyle: PageSectionBlockWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {},
    content: {
      ncss: {},
      actions: {
        ncss: {},
        link: {
          ncss: {
            ...elementAsPrimaryButtonStyle,
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
        icon: {
          ncss: {
            mb: 3,
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
  wrapper: {
    ncss: {
      ...wrapperStyle,
    },
  },
}
