import { GridElementStyle } from '../../../elements/resets/grid-reset'
import { TopicWheelStyle } from '../../../topic/presets/topic-preset'

export interface PageSectionHeadlineWheelStyle {
  container: GridElementStyle
  topic: TopicWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionHeadlinePreset: PageSectionHeadlineWheelStyle = {
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
        maxWidth: [1, '768px'],
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
