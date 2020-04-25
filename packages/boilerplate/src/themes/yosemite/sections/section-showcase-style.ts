import { PageSectionShowcaseWheelStyle } from '../../../wheelroom/wheels/section/unicorn/presets/page-section-showcase-preset'
import { aLinkButtonStyle, displayButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'

export const sectionShowcaseStyle: PageSectionShowcaseWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {
      justifyContent: 'space-evenly',
    },
    content: {
      ncss: {
        maxWidth: ['35em', '35em', '40%'],
        w: 1,
      },
      actions: {
        ncss: {},
        link: displayButtonStyle,
      },
      text: {
        ncss: {},
        abstract: {
          ncss: {
            mb: 5,
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

export const sectionFeaturedListStyle = {
  container: {
    ncss: {
      maxWidth: ['35em', '54rem'],
      flexDirection: 'column',
    },
  },
  topic: {
    ncss: {
      label: 'topic-featured-list',
      alignItems: 'initial',
      flexDirection: ['column', 'row'],
    },
    content: {
      ncss: {
        maxWidth: 'auto',
        w: 1,
      },
      actions: {
        link: aLinkButtonStyle,
      },
      text: {
        abstract: {
          ncss: {
            mb: 3,
          },
        },
      },
    },
    media: {
      ncss: {
        maxWidth: '254px',
        w: 1,
      },
    },
  },
}
