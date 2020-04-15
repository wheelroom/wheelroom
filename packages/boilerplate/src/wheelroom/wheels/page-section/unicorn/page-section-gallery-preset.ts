import { TopicPreset } from '../../topic/presets/topic-preset'
import { GridPreset } from '../../elements/grid-preset'

export interface PageSectionGalleryPreset {
  container: GridPreset
  topic: TopicPreset
  wrapper: GridPreset
}

export const pageSectionGalleryPreset: PageSectionGalleryPreset = {
  container: {
    ncss: {
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
      alignItems: 'center',
    },
  },
  topic: {
    ncss: {
      w: [1, 1 / 2],
    },
    content: {
      ncss: {
        p: 3,
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
          ncss: {
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
    ncss: {},
  },
}
