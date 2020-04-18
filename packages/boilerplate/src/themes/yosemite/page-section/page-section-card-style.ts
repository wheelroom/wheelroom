import { PageSectionCardPreset } from '../../../wheelroom/wheels/page-section/unicorn/page-section-card-preset'
import { elementPresets } from '../element-presets'

export const pageSectionCardStyle: PageSectionCardPreset = {
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
      transition: 'transform .25s ease 0s',
      transform: 'scale(1)',
      ':hover': {
        cursor: 'pointer',
        transform: 'scale(1.05)',
      },
    },
    content: {
      ncss: {
        color: 'sectionText',
      },
      actions: {
        ncss: {},
        link: {
          ncss: {
            ...elementPresets.button.ncss,
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
      bg: 'sectionBg',
      color: 'sectionText',
    },
  },
}
