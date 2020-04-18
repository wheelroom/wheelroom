import { PageSectionBlockPreset } from '../../../wheelroom/wheels/page-section/unicorn/page-section-block-preset'
import { elementPresets } from '../element-presets'

export const pageSectionBlockStyle: PageSectionBlockPreset = {
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
