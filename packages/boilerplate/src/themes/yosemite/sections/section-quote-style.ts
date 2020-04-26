import { PageSectionQuoteWheelStyle } from '../../../wheelroom/wheels/section/unicorn/presets/page-section-quote-preset'
import { displayButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'

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
        link: displayButtonStyle,
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
            order: '0',
            mb: 2,
          },
        },
      },
    },
    media: {
      ncss: {},
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
