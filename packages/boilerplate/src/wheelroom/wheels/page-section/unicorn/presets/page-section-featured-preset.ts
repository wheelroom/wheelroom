import { GridElementStyle } from '../../../elements/resets/grid-reset'
import { TopicWheelStyle } from '../../../topic/presets/topic-preset'

export interface PageSectionFeaturedWheelStyle {
  container: GridElementStyle
  topic: TopicWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionFeaturedPreset: PageSectionFeaturedWheelStyle = {
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
      alignItems: 'center',
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
