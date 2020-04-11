import { NcssProps } from '../../elements/types'
import { TopicPreset } from '../../topic/topic-preset'

export interface PageSectionHeroPreset {
  container?: NcssProps
  topic?: TopicPreset
  wrapper?: NcssProps
}

export const pageSectionHeroTreeStyle: PageSectionHeroPreset = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {
      position: 'relative',
      w: 1,
    },
    content: {
      ncss: {},
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
      },
    },
    media: {
      ncss: {
        bottom: '0',
        left: '0',
        position: 'absolute',
        right: '0',
        top: '0',
        zIndex: -1,
      },
      image: {
        img: {
          ncss: {
            h: 1,
            objectFit: 'cover',
          },
        },
        picture: {
          ncss: {
            h: 'auto',
            w: 1,
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
    ncss: {
      label: 'wrapper',
      py: 3,
    },
  },
}
