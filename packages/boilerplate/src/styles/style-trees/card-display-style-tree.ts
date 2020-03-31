import { CardDisplayStyleTree } from '../../core/displays/card-display'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../../core/styles/image'
import {
  commonVideoDescriptionStyle,
  commonVideoStyle,
} from '../../core/styles/video'

export const cardDisplayStyleTree: CardDisplayStyleTree = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
  container: {
    alignItems: ['center', 'initial'],
    flexDirection: ['column', 'row'],
    flexWrap: 'wrap',
    justifyContent: 'center',
    m: 'auto',
    px: [2, 5, 7],
    w: 1,
  },
  topic: {
    wrapper: {
      ...{
        bg: 'bg',
        color: 'cardsShadow',
        flex: '1',
        maxWidth: '280px',
        minWidth: '280px',
        m: 2,
      },
      ...(pageSectionInfo.topicOptions.hideAction
        ? {}
        : {
            border: '1px solid',
            borderColor: 'cardsBorder',
            borderRadius: 3,
            boxShadow: '0 0 16px',
            transition: 'transform .25s ease',
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.05)',
            },
          }),
    },
    media: {
      wrapper: {
        p: 3,
      },
      image: {
        img: { ...commonImageImgStyle, h: 1, objectFit: 'cover' },
        picture: {
          ...commonImagePictureStyle,
          display: 'block',
          h: '178px',
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
        flex: '1 1 auto',
      },
      contentText: {
        wrapper: {
          display: 'block',
          flex: '1 1 auto',
        },
      },
      contentActions: {
        wrapper: {
          flex: '0',
        },
      },
    },
  },
}
