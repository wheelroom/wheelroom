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
      color: 'cardShadow',
      textDecoration: 'none',
    },
    content: {
      ncss: {
        color: 'sectionText',
      },
      actions: {
        ncss: {
          mt: 3,
        },
        link: primaryButtonStyle,
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
        icon: {
          ncss: {
            mb: 2,
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
  wrapper: wrapperStyle,
}

export const pageSectionCardShadowStyle = {
  topic: {
    ncss: {
      label: 'topic-card-shadow',
      transition: 'transform .25s ease 0s',
      transform: 'scale(1)',
      ':hover': {
        cursor: 'pointer',
        transform: 'scale(1.05)',
      },
    },
  },
}
