import { PageSectionQuotePreset } from '../../../wheelroom/wheels/page-section/unicorn/page-section-quote-preset'
import { elementAsPrimaryButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'

export const pageSectionQuoteStyle: PageSectionQuotePreset = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {},
    content: {
      ncss: {},
      actions: {
        ncss: {},
        link: {
          ncss: {
            ...elementAsPrimaryButtonStyle,
          },
        },
      },
      text: {
        ncss: {},
        abstract: {
          ncss: {},
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
      ...wrapperStyle,
    },
  },
}
