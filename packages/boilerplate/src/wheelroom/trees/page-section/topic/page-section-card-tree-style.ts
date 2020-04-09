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
    },
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
