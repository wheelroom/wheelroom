import { ImageDisplayStyleTree } from '../../core/displays/image-display'
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

export const imageDisplayStyleTree: ImageDisplayStyleTree = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
  container: {
    flexDirection: ['column', 'row'],
  },
  topic: {
    wrapper: {
      w: 1,
    },
    media: {
      image: {
        img: commonImageImgStyle,
        picture: {
          ...commonImagePictureStyle,
          display: 'block',
          px: 0,
          py: 3,
        },
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
          fontSize: [3, 4],
          lineHeight: [3],
        },
      },
    },
  },
}
