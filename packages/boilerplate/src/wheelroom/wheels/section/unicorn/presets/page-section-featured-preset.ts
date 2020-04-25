import { GridElementStyle } from '../../../element/resets/grid-reset'
import { TopicWheelStyle } from '../../../model/topic/presets/topic-preset'

export interface PageSectionFeaturedWheelStyle {
  container: GridElementStyle
  topic: TopicWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionFeaturedPreset: PageSectionFeaturedWheelStyle = {
  container: {
    ncss: {
      flexDirection: 'column',
    },
  },
  topic: {
    ncss: {
      flexDirection: ['column', 'column', 'row'],
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
