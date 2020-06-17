import { GridElementStyle } from '../../elements/resets/grid-reset'
import { TopicWheelStyle } from '../topic/presets/topic-preset'

export interface PageSectionWheelStyle {
  container: GridElementStyle
  topic: TopicWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionWheelStyle: PageSectionWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {},
    content: {
      ncss: {},
      text: {
        ncss: {},
        heading: {
          ncss: {},
        },
        abstract: {
          ncss: {},
        },
        icon: {
          ncss: {},
        },
      },
      actions: {
        ncss: {},
        link: {
          ncss: {},
          icon: {
            ncss: {},
          },
        },
      },
    },
    media: {
      ncss: {},
      embed: {
        ncss: {},
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
      mediaBreakpoint: {
        picture: {
          ncss: {},
        },
        img: {
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
