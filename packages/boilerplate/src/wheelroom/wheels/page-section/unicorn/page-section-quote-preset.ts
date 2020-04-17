import { GridReset } from '../../elements/grid-reset'
import { TopicPreset } from '../../topic/presets/topic-preset'

export interface PageSectionQuotePreset {
  container: GridReset
  topic: TopicPreset
  wrapper: GridReset
}

export const pageSectionQuotePreset: PageSectionQuotePreset = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {},
    content: {
      ncss: {
        textAlign: 'center',
        mx: 'auto',
        p: 3,
        maxWidth: [1, '960px', '1024px'],
      },
      actions: {
        ncss: {},
        link: {
          ncss: {},
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
    ncss: {},
  },
}
