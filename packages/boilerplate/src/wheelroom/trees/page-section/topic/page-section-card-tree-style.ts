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
    content: {
      contentActions: {
        wrapper: {
          flex: '0',
        },
      },
      contentText: {
        wrapper: {
          display: 'block',
          flex: '1 1 auto',
        },
      },
      wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
      },
    },
    media: {
      image: {
        img: {
          h: 1,
          objectFit: 'cover',
        },
        picture: {
          display: 'block',
          h: '178px',
        },
      },
      wrapper: {
        p: 3,
      },
    },
    wrapper: topicWrapperStyle,
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
      wrapper: {
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
