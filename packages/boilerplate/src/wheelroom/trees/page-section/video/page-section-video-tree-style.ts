import { smallParagraphStyle } from '../../../../element-styles/paragraph'
import { TopicTreeStyle } from '../../topic/topic-tree-style'
import { NcssProps } from '../../../elements/types'

export interface PageSectionVideoTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const videoTreeStyle: PageSectionVideoTreeStyle = {
  container: {},
  topic: {
    media: {
      video: {
        video: { mb: [0, 0] },
      },
    },
    wrapper: {
      w: 1,
    },
    content: {
      contentText: {
        abstract: { ...smallParagraphStyle, color: 'text' },
      },
      contentActions: {
        wrapper: {
          mx: 'auto',
        },
        link: {
          mx: 2,
          fontSize: [5, 6],
          lineHeight: [3, 4],
        },
      },
    },
  },
  wrapper: {
    bg: 'bg',
    py: [3, 6, 8],
  },
}
