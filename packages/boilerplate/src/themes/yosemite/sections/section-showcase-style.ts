import { PageSectionShowcaseWheelStyle } from '../../../wheelroom/wheels/section/unicorn/presets/page-section-showcase-preset'
import { aLinkButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'

export const sectionShowcaseStyle: PageSectionShowcaseWheelStyle = {
  container: {
    ncss: {
      maxWidth: ['35em', '54rem'],
      flexDirection: 'column',
    },
  },
  topic: {
    ncss: {
      alignItems: 'initial',
      flexDirection: ['column', 'row'],
      py: 3,
    },
    content: {
      ncss: {},
      actions: {
        ncss: {
          mt: 3,
        },
        link: aLinkButtonStyle,
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
      ncss: {
        maxWidth: '254px',
        w: 1,
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
