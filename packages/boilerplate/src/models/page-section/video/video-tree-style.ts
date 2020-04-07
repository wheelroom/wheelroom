import { PageSectionVideoTreeStyle } from '../../../core/trees/page-section/page-section-video-tree'
import { smallParagraphStyle } from '../../../element-styles/paragraph'

export const videoTreeStyle: PageSectionVideoTreeStyle = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
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
}
