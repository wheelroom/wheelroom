import { TopicPreset } from '../../topic/presets/topic-preset'
import { GridPreset } from '../../elements/grid-preset'

export interface PageSectionFeaturedPreset {
  container: GridPreset
  topic: TopicPreset
  wrapper: GridPreset
}

export const pageSectionFeaturedPreset: PageSectionFeaturedPreset = {
  container: {
    ncss: {
      alignItems: ['center', 'baseline'],
      flexDirection: ['column', 'row'],
      justifyContent: 'center',
    },
  },
  topic: {
    ncss: {
      flexDirection: ['column', 'column', 'row'],
      justifyContent: 'space-evenly',
    },
    content: {
      ncss: {
        flexDirection: 'column',
        w: [1, 1, 1 / 2],
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
      ncss: {
        flexDirection: 'column',
        mb: [3, 3, 0],
        w: [1, 1, 1 / 2],
        p: 3,
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
