import { GridElementStyle } from '../../../elements/resets/grid-reset'
import { TopicWheelStyle } from '../../topic/presets/topic-preset'

export interface PageSectionVideoWheelStyle {
  container: GridElementStyle
  topic: TopicWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionVideoPreset: PageSectionVideoWheelStyle = {
  container: {
    ncss: {},
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
