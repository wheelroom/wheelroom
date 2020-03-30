import { StyleTree } from '../core/style-tree/types'
import { defaultParagraphStyle } from '../core/styles/paragraph'
import { commonALinkStyle } from '../core/styles/a-link'
import { commonHeadingStyle } from '../core/styles/heading'
import {
  commonVideoStyle,
  commonVideoDescriptionStyle,
} from '../core/styles/video'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../core/styles/image'

export const styleTree: StyleTree = {
  wrapper: {
    label: 'text',
    mx: 'auto',
    maxWidth: '640px',
    flexDirection: 'column',
    textAlign: 'left',
  },
  marksBold: {
    label: 'strong',
    fontWeight: 7,
  },
  marksCode: {
    pre: {
      label: 'pre',
      fontSize: 3,
      bg: 'skyblue',
      py: 2,
      px: 3,
      wordBreak: 'break-all',
      wordWrap: 'break-word',
    },
    code: {
      label: 'code',
    },
  },
  blocksQuote: {
    textAlign: 'center',
    ':before': {
      fontFamily: 'text',
      color: 'metal',
      fontSize: 8,
      content: '"”"',
    },
  },
  blocksUlList: defaultParagraphStyle,
  blocksOlList: defaultParagraphStyle,
  blocksLiList: defaultParagraphStyle,
  inlinesHyperlink: { ...commonALinkStyle, wordBreak: 'break-all' },
  entryHyperlink: { ...commonALinkStyle, wordBreak: 'break-all' },
  blocksHeading1: { ...commonHeadingStyle, fontSize: [8, 9, 10, 11] },
  blocksHeading2: { ...commonHeadingStyle, fontSize: [7, 8, 9, 10], mt: 3 },
  blocksHeading3: { ...commonHeadingStyle, fontSize: [5, 6, 7, 8], mt: 3 },
  blocksHeading4: { ...commonHeadingStyle, fontSize: [3, 4, 5, 6], mt: 3 },
  blocksHeading5: { ...commonHeadingStyle, fontSize: [3, 4, 5, 6], mt: 3 },
  blocksHeading6: { ...commonHeadingStyle, fontSize: [3, 4, 5, 6], mt: 3 },
  blocksHr: {
    label: 'hr',
    overflow: 'hidden',
    borderTop: '1px solid transparent',
    borderColor: 'text',
    w: 1,
    my: 3,
  },
  video: {
    description: commonVideoDescriptionStyle,
    video: { ...commonVideoStyle, my: [4, 5] },
  },
  image: {
    img: { ...commonImageImgStyle, my: [4, 5] },
    picture: commonImagePictureStyle,
    figcaption: { ...commonImageFigcaptionStyle, mt: 0, mb: [4, 5] },
  },
}
