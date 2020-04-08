import { smallParagraphStyle } from '../../../../element-styles/paragraph'
import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionImageTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionImageTreeStyle: PageSectionImageTreeStyle = {
  container: {
    flexDirection: ['column', 'row'],
  },
  topic: {
    content: {
      contentActions: {
        link: {
          fontSize: [3, 4],
          lineHeight: [3],
          mx: 2,
        },
        wrapper: {
          mx: 'auto',
        },
      },
      contentText: {
        abstract: { ...smallParagraphStyle, color: 'text' },
      },
    },
    media: {
      image: {
        picture: {
          display: 'block',
          px: 0,
          py: 3,
        },
      },
    },
    wrapper: {
      w: 1,
    },
  },
  wrapper: {
    bg: 'bg',
    py: [3, 6, 8],
  },
}
