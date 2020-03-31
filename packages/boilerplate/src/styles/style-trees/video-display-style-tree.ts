import { VideoDisplayStyleTree } from '../../core/displays/video-display'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../../core/styles/image'
import {
  commonVideoDescriptionStyle,
  commonVideoStyle,
} from '../../core/styles/video'
import { smallParagraphStyle } from '../../core/styles/paragraph'

export const videoDisplayStyleTree: VideoDisplayStyleTree = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
  container: {},
  topic: {
    wrapper: {
      w: 1,
    },
    media: {
      image: {
        img: commonImageImgStyle,
        picture: commonImagePictureStyle,
        figcaption: commonImageFigcaptionStyle,
      },
      video: {
        description: commonVideoDescriptionStyle,
        video: commonVideoStyle,
      },
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
