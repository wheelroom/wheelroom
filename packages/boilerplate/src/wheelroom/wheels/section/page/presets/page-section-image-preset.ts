import { GridElementStyle } from '../../../element/resets/grid-reset'
import { TopicWheelStyle } from '../../../model/topic/presets/topic-preset'

export interface PageSectionImageWheelStyle {
  container: GridElementStyle
  topic: TopicWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionImagePreset: PageSectionImageWheelStyle = {
  container: {
    ncss: {
      flexDirection: ['column', 'row'],
    },
  },
  topic: {
    ncss: {},
    content: {
      ncss: {
        p: 3,
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
      embed: {
        ncss: {
          display: 'block',
          h: '0px',
          pb: '56.25%',
          position: 'relative',
          iframe: {
            position: 'absolute',
          },
        },
      },
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
