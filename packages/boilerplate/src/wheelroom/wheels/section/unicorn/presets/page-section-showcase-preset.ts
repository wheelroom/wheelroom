import { GridElementStyle } from '../../../element/resets/grid-reset'
import { TopicWheelStyle } from '../../../model/topic/presets/topic-preset'

export interface PageSectionShowcaseWheelStyle {
  container: GridElementStyle
  topic: TopicWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionShowcasePreset: PageSectionShowcaseWheelStyle = {
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
