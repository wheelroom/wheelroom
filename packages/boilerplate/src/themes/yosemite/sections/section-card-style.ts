import { PageSectionCardWheelStyle } from '../../../wheelroom/wheels/section/page/presets/page-section-card-preset'
import { primaryButtonStyle } from '../elements/button-style'
import { wrapperStyle } from '../elements/grid-style'
import { iconTopicStyle } from '../elements/icon-style'

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
        link: {
          ...primaryButtonStyle,
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
      ncss: {},
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

export const sectionCardShadowStyle = {
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
