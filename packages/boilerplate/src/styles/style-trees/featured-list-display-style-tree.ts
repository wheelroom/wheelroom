import { FeaturedListDisplayStyleTree } from '../../core/displays/featured-list-display'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../../core/styles/image'
import {
  commonVideoDescriptionStyle,
  commonVideoStyle,
} from '../../core/styles/video'

export const featuredListDisplayStyleTree: FeaturedListDisplayStyleTree = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
  container: {
    flexDirection: topicOptions.hideMedia ? ['column', 'row'] : ['column'],
  },
  topic: {
    wrapper: {
      flexDirection: topicOptions.hideMedia
        ? ['column', 'row']
        : ['column', 'row'],
      w: topicOptions.hideMedia ? [1, 1 / 2, 1 / 3] : 1,
    },
    media: {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'normal',
        w: [1 / 3, 1 / 4, 1 / 4],
        p: 3,
      },
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
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        w: [1, 2 / 3, 3 / 4],
        p: 3,
      },
      contentActions: {
        wrapper: {
          display: 'flex',
        },
      },
    },
  },
}
