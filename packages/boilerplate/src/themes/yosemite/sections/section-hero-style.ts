import { PageSectionHeroWheelStyle } from '../../../wheelroom/wheels/section/unicorn/presets/page-section-hero-preset'
import { displayButtonStyle } from '../elements/button-style'

export const sectionHeroStyle: PageSectionHeroWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {},
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
        link: displayButtonStyle,
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
  wrapper: {
    ncss: {},
  },
}
