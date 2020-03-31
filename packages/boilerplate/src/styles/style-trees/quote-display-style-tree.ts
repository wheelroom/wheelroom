import { QuoteDisplayStyleTree } from '../../core/displays/quote-display'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../../core/styles/image'
import {
  commonVideoDescriptionStyle,
  commonVideoStyle,
} from '../../core/styles/video'

export const quoteDisplayStyleTree: QuoteDisplayStyleTree = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topic: {
    wrapper: { alignItems: 'center' },
    media: {
      wrapper: {
        p: 3,
      },
      image: {
        img: {
          ...commonImageImgStyle,
          w: 1,
          h: 1,
          objectFit: 'cover',
          position: 'absolute',
        },
        picture: {
          ...commonImagePictureStyle,
          display: 'block',
          overflow: 'hidden',
          position: 'relative',
          h: '178px',
          w: '178px',
          mx: 'auto',
          borderRadius: '50%',
        },
        figcaption: commonImageFigcaptionStyle,
      },
      video: {
        description: commonVideoDescriptionStyle,
        video: commonVideoStyle,
      },
    },
    content: {
      wrapper: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
      },
      contentText: {
        wrapper: { textAlign: 'center' },
        heading: { order: 1, my: 3, ':before': { content: '"— "' } },
        abstract: {
          label: 'blockquote',
          mx: [0, 5],
          my: [5],
          fontSize: [7, 8, 9],
          fontStyle: 'italic',
        },
      },
      contentActions: {
        wrapper: {
          mx: 'auto',
        },
      },
    },
  },
}
