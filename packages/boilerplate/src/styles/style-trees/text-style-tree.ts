import { defaultParagraphStyle } from '../core-elements/paragraph'
import { defaultALinkStyle } from '../core-elements/a-link'
import { defaultVideoStyle } from '../core-elements/video'
import { TextStyleTree } from '../../core/model-views/text/core-text'

export const textStyleTree: TextStyleTree = {
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
  inlinesHyperlink: { ...defaultALinkStyle, wordBreak: 'break-all' },
  entryHyperlink: { ...defaultALinkStyle, wordBreak: 'break-all' },
  blocksHeading1: { fontSize: [8, 9, 10, 11] },
  blocksHeading2: { fontSize: [7, 8, 9, 10], mt: 3 },
  blocksHeading3: { fontSize: [5, 6, 7, 8], mt: 3 },
  blocksHeading4: { fontSize: [3, 4, 5, 6], mt: 3 },
  blocksHeading5: { fontSize: [3, 4, 5, 6], mt: 3 },
  blocksHeading6: { fontSize: [3, 4, 5, 6], mt: 3 },
  blocksHr: {
    label: 'hr',
    overflow: 'hidden',
    borderTop: '1px solid transparent',
    borderColor: 'text',
    w: 1,
    my: 3,
  },
  video: {
    video: { ...defaultVideoStyle, my: [4, 5] },
  },
  image: {
    img: { my: [4, 5] },
    figcaption: { mt: 0, mb: [4, 5] },
  },
}
