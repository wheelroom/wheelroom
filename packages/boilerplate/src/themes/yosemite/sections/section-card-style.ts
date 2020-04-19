import { PageSectionCardWheelStyle } from '../../../wheelroom/wheels/section/unicorn/presets/page-section-card-preset'
import { primaryButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'

export const sectionCardStyle: PageSectionCardWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {
      borderRadius: 4,
      borderColor: 'cardBorder',
      boxShadow: '0 0 16px',
      textDecoration: 'none',
      color: 'cardShadow',
    },
    content: {
      ncss: {
        color: 'sectionText',
      },
      actions: {
        ncss: {},
        link: primaryButtonStyle,
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
          ncss: {
            mb: 3,
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
    ncss: {
      ...wrapperStyle,
    },
  },
}

export const pageSectionCardShadowStyle = {
  topic: {
    ncss: {
      transition: 'transform .25s ease 0s',
      transform: 'scale(1)',
      ':hover': {
        cursor: 'pointer',
        transform: 'scale(1.05)',
      },
    },
  },
}
