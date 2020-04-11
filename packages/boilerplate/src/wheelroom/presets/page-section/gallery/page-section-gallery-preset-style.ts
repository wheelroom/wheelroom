import { NcssProps } from '../../../elements/types'
import { TopicPresetStyle } from '../../topic/topic-preset-style'

export interface PageSectionGalleryPresetStyle {
  container: NcssProps
  topic?: TopicPresetStyle
  wrapper: NcssProps
}

export const pageSectionGalleryTreeStyle: PageSectionGalleryPresetStyle = {
  container: {
    ncss: {
      alignItems: 'center',
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
      justifyContent: 'center',
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
          ncss: {
            w: [1, 1 / 2],
            p: 3,
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
      label: 'wrapper',
      py: [3, 6, 8],
    },
  },
}
