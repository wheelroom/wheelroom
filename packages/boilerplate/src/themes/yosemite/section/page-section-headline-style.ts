import { PageSectionHeadlineWheelStyle } from '../../../wheelroom/wheels/section/unicorn/presets/page-section-headline-preset'
import { elementAsPrimaryButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'

export const pageSectionHeadlineStyle: PageSectionHeadlineWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {},
    content: {
      ncss: {
        py: 5,
      },
      actions: {
        ncss: {},
        link: {
          ncss: {
            ...elementAsPrimaryButtonStyle,
            fontSize: [6, 6, 7, 7],
          },
        },
      },
      text: {
        ncss: {},
        abstract: {
          ncss: {
            fontSize: [7, 7, 8, 8],
            mb: 5,
          },
        },
        heading: {
          ncss: {},
        },
        icon: {
          ncss: {},
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
