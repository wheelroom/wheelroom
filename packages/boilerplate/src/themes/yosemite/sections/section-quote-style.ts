import { PageSectionQuoteWheelStyle } from '../../../wheelroom/wheels/section/unicorn/presets/page-section-quote-preset'
import { primaryButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'

export const sectionQuoteStyle: PageSectionQuoteWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {},
    content: {
      ncss: {},
      actions: {
        ncss: {},
        link: primaryButtonStyle,
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
            fontSize: '6',
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
  wrapper: wrapperStyle,
}
