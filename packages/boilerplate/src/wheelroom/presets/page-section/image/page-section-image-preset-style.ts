import { NcssProps } from '../../../elements/types'
import { TopicPresetStyle } from '../../topic/topic-preset-style'

export interface PageSectionImagePresetStyle {
  container?: NcssProps
  topic?: TopicPresetStyle
  wrapper?: NcssProps
}

export const pageSectionImageTreeStyle: PageSectionImagePresetStyle = {
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
      label: 'wrapper',
      py: [3, 6, 8],
    },
  },
}
