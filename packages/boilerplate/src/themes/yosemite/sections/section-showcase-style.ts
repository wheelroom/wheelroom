import { PageSectionShowcaseWheelStyle } from '../../../wheelroom/models/page-section/presets/page-section-showcase-preset'
import { aLinkButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'
import { iconTopicStyle } from '../elements/icon-style'

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
        link: {
          ...aLinkButtonStyle,
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
      ncss: {
        maxWidth: '254px',
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
