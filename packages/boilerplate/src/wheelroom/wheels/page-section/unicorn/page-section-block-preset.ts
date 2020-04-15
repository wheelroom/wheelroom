import { TopicPreset } from '../../topic/presets/topic-preset'
import { GridPreset } from '../../elements/grid-preset'

export interface PageSectionBlockPreset {
  container: GridPreset
  topic: TopicPreset
  wrapper: GridPreset
}

export const pageSectionBlockPreset: PageSectionBlockPreset = {
  container: {
    ncss: {
      alignItems: ['center', 'initial'],
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
    },
  },
  topic: {
    ncss: {
      p: 3,
      w: [1, 1 / 2, 1 / 3],
    },
    content: {
      ncss: {
        p: 3,
      },
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
        ncss: {
          flex: '0',
        },
        link: {
          ncss: {},
        },
      },
    },
    media: {
      ncss: {},
      image: {
        img: {
          ncss: {
            h: 1,
            objectFit: 'cover',
            position: 'absolute',
            w: 1,
          },
        },
        picture: {
          ncss: {
            display: 'block',
            h: '0px',
            pb: '65.25%',
            position: 'relative',
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
    ncss: {},
  },
}
