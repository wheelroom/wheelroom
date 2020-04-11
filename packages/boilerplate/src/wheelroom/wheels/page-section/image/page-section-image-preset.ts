import { NcssProps } from '../../elements/types'
import { TopicPreset } from '../../topic/topic-preset'

export interface PageSectionImagePreset {
  container?: NcssProps
  topic?: TopicPreset
  wrapper?: NcssProps
}

export const pageSectionImageTreeStyle: PageSectionImagePreset = {
  container: {
    ncss: {
      flexDirection: ['column', 'row'],
    },
  },
  topic: {
    ncss: {},
    content: {
      ncss: {},
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
      },
    },
    media: {
      ncss: {},
      image: {
        picture: {
          ncss: {},
        },
        img: {
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
      label: 'wrapper',
      py: 3,
    },
  },
}
