import { PageSectionFeaturedWheelStyle } from '../../../wheelroom/wheels/section/unicorn/presets/page-section-featured-preset'
import {
  displayButtonStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
} from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'
import { iconButtonStyle, iconTopicStyle } from '../elements/icon-style'

export const sectionFeaturedStyle: PageSectionFeaturedWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {
      justifyContent: 'space-evenly',
      py: 3,
      alignItems: 'center',
      ':nth-of-type(even) > div:nth-of-type(1)': {
        order: ['0', '0', '1'],
      },
    },
    content: {
      ncss: {
        maxWidth: ['35em', '35em', '45%'],
        w: 1,
      },
      actions: {
        ncss: {
          mt: [4, 4, 5],
        },
        link: {
          ncss: {
            ...primaryButtonStyle.ncss,
            ...displayButtonStyle.ncss,
            ':nth-of-type(2)': {
              ...secondaryButtonStyle.ncss,
              ...displayButtonStyle.ncss,
            },
          },
          icon: iconButtonStyle,
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
      ncss: {
        maxWidth: ['35em', '35em', '45%'],
        w: 1,
      },
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

export const sectionFeaturedReverseStyle = {
  topic: {
    ncss: {
      label: 'topic-reverse',
      ':nth-of-type(even) > div:nth-of-type(1)': {
        order: ['0', '0', '-2'],
      },
    },
  },
}
