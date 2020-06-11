import { GridElementStyle } from '../../../elements/resets/grid-reset'
import { TopicWheelStyle } from '../../../wheels/model/topic/presets/topic-preset'

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
      ncss: {
        flexDirection: 'column',
        w: [1, 1, 1 / 2],
        p: 3,
      },
      embed: {
        ncss: {
          position: 'relative',
          h: '0px',
          pb: '56.25%',
          iframe: {
            position: 'absolute',
          },
        },
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
