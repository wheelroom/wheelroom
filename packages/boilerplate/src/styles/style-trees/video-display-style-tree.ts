import { VideoDisplayStyleTree } from '../../core/page-section-views/video-display'
import { smallParagraphStyle } from '../core-elements/paragraph'

export const videoDisplayStyleTree: VideoDisplayStyleTree = {
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
