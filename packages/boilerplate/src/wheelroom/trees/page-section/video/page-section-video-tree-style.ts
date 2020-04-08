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
    content: {
      contentActions: {
        link: {
          fontSize: [5, 6],
          lineHeight: [3, 4],
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
      video: {
        video: {
          mb: [0, 0],
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
