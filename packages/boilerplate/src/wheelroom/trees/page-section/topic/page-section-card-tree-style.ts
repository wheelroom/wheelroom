import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'
import deepmerge from 'deepmerge'

export interface PageSectionCardTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

const topicWrapperStyle = {
  bg: 'bg',
  color: 'cardsShadow',
  flex: '1',
  maxWidth: '280px',
  minWidth: '280px',
  m: 2,
}

export const pageSectionCardTreeStyle: PageSectionCardTreeStyle = {
  container: {
    alignItems: ['center', 'initial'],
    flexDirection: ['column', 'row'],
    flexWrap: 'wrap',
    justifyContent: 'center',
    m: 'auto',
    px: [2, 5, 7],
    w: 1,
  },
  topic: {
    ncss: {},
    content: {
      ncss: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
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
      },
      actions: {
        ncss: {
          flex: '0',
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
          ncss: {
            my: [0, 0],
          },
        },
        description: {
          ncss: {},
        },
      },
    },
  },
  wrapper: {
    bg: 'bg',
    py: [3, 6, 8],
  },
}

export const pageSectionCardTreeShadowStyle: PageSectionCardTreeStyle = deepmerge(
  pageSectionCardTreeStyle,
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
