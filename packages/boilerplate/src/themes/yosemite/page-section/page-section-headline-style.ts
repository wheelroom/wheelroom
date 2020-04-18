import { PageSectionHeadlinePreset } from '../../../wheelroom/wheels/page-section/unicorn/page-section-headline-preset'
import { elementPresets } from '../element-presets'

export const pageSectionHeadlineStyle: PageSectionHeadlinePreset = {
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
          ncss: {},
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
