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
        w: 1,
        py: [5, 7, 9, 11],
        px: 4,
        maxWidth: '1280px',
        mx: 'auto',
      },
      actions: {
        ncss: {
          maxWidth: [1, '480px'],
        },
        link: displayButtonStyle,
      },
      text: {
        ncss: {
          maxWidth: [1, '480px'],
        },
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
    ncss: {},
  },
}
