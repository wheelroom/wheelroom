import { TopicPreset } from '../../topic/presets/topic-preset'
import deepmerge from 'deepmerge'
import { GridPreset } from '../../elements/grid-preset'

export interface PageSectionCardPreset {
  container: GridPreset
  topic: TopicPreset
  wrapper: GridPreset
}

const topicWrapperStyle = {
  bg: 'bg',
  color: 'silver',
  flex: '1',
  maxWidth: '280px',
  minWidth: '280px',
  m: 2,
}

export const pageSectionCardPreset: PageSectionCardPreset = {
  container: {
    ncss: {
      alignItems: ['center', 'initial'],
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  topic: {
    ncss: {},
    content: {
      ncss: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        px: 3,
      },
      text: {
        ncss: {
          display: 'block',
          flex: '1 1 auto',
        },
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
      ncss: {
        p: 3,
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
            display: 'block',
            h: '178px',
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

export const pageSectionCardShadowPreset: PageSectionCardPreset = deepmerge(
  pageSectionCardPreset,
  {
    topic: {
      ncss: {
        ...topicWrapperStyle,
        border: '1px solid',
        borderColor: 'cardsBorder',
        borderRadius: 3,
        boxShadow: '0 0 16px',
        transition: 'transform .25s ease',
        ':hover': {
          cursor: 'pointer',
          transform: 'scale(1.05)',
        },
      },
    },
  }
)
