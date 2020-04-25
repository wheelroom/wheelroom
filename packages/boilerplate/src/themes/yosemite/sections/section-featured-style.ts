import { PageSectionFeaturedWheelStyle } from '../../../wheelroom/wheels/section/unicorn/presets/page-section-featured-preset'
import { displayButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'

export const sectionFeaturedStyle: PageSectionFeaturedWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {
      justifyContent: 'space-evenly',
      alignItems: 'center',
      ':nth-of-type(even) > div:nth-of-type(1)': {
        order: ['0', '0', '1'],
      },
    },
    content: {
      ncss: {
        maxWidth: ['35em', '35em', '40%'],
        w: 1,
      },
      actions: {
        ncss: {
          mt: [2, 2, 3],
          mb: 3,
        },
        link: displayButtonStyle,
      },
      text: {
        ncss: {},
        abstract: {
          ncss: {
            tableLayout: 'auto',
            lineHeight: 1.58,
            td: {
              pr: 3,
            },
            '> tr > td:nth-last-of-type': {
              pr: 0,
            },
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
        maxWidth: ['35em', '35em', '40%'],
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

export const sectionFeaturedReverseStyle = {
  topic: {
    ncss: {
      label: 'topic-reverse',
      '> div:nth-of-type(2)': {
        order: ['1', '1', '-1'],
      },
      ':nth-of-type(even) > div:nth-of-type(1)': {
        order: ['0', '0', '-2'],
      },
    },
  },
}
