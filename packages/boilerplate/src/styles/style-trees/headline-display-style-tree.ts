import { HeadlineDisplayStyleTree } from '../../core/displays/headline-display'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../../core/styles/image'
import {
  commonVideoDescriptionStyle,
  commonVideoStyle,
} from '../../core/styles/video'
import { defaultHeading1Style } from '../../core/styles/heading'
import { paragraphHeroStyle } from '../../core/styles/paragraph'

export const headlineDisplayStyleTree: HeadlineDisplayStyleTree = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
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
      wrapper: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
      },
      contentText: {
        heading: defaultHeading1Style,
        abstract: { ...paragraphHeroStyle, color: 'text' },
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
