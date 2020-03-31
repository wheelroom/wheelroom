import { FeaturedDisplayStyleTree } from '../../core/displays/featured-display'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../../core/styles/image'
import {
  commonVideoDescriptionStyle,
  commonVideoStyle,
} from '../../core/styles/video'
import { defaultHeading2Style } from '../../core/styles/heading'

export const featuredDisplayStyleTree: FeaturedDisplayStyleTree = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
  container: {
    justifyContent: 'center',
    flexDirection: ['column', 'row'],
    alignItems: ['center', 'baseline'],
  },
  topic: {
    wrapper: {
      flexDirection: ['column', 'column', 'row'],
      justifyContent: 'space-evenly',
    },
    media: {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        w: [1, 1, 1 / 2.5],
        mb: [3, 3, 0],
      },
      image: {
        img: commonImageImgStyle,
        picture: {
          ...commonImagePictureStyle,
          p: 3,
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
        flexDirection: 'column',
        w: [1, 1, 1 / 2.5],
      },
      contentText: {
        heading: defaultHeading2Style,
      },
      contentActions: {
        wrapper: {
          display: 'flex',
        },
      },
    },
  },
}
