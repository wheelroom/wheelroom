import { PageSectionQuoteWheelStyle } from '../../../wheelroom/wheels/section/page/presets/page-section-quote-preset'
import {
  displayButtonStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
} from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'
import { iconButtonStyle, iconTopicStyle } from '../elements/icon-style'

export const sectionQuoteStyle: PageSectionQuoteWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {},
    content: {
      ncss: {
        maxWidth: [1, '60em', '68em'],
        mx: 'auto',
      },
      actions: {
        ncss: {
          mt: 6,
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
        ncss: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        abstract: {
          ncss: {
            order: '2',
            fontSize: [9, 9, 10],
            fontStyle: 'italic',
            lineHeight: 3,
            my: 0,
            p: 0,
          },
        },
        heading: {
          ncss: {
            order: '1',
          },
        },
        icon: {
          ncss: {
            ...iconTopicStyle.ncss,
            order: '0',
          },
        },
      },
    },
    media: {
      ncss: {},
      embed: {
        ncss: {},
      },
      image: {
        img: {
          ncss: {
            h: 1,
            objectFit: 'cover',
          },
        },
        picture: {
          ncss: {
            overflow: 'hidden',
            h: '200px',
            w: '200px',
            borderRadius: '100px',
            mx: 'auto',
          },
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
  wrapper: {
    ncss: {
      ...wrapperStyle.ncss,
      py: 6,
    },
  },
}
