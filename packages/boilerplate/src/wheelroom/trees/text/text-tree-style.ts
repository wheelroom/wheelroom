import { defaultParagraphStyle } from '../../../element-styles/paragraph'
import { defaultALinkStyle } from '../../../element-styles/a-link'
import { defaultVideoStyle } from '../../../element-styles/video'
import { NcssProps } from '../../elements/types'
import { ImageTreeStyle } from '../../elements/image'
import { VideoTreeStyle } from '../../elements/video'

export interface TextTreeStyle {
  wrapper?: NcssProps
  marksBold?: NcssProps
  marksCode?: {
    pre?: NcssProps
    code?: NcssProps
  }
  blocksQuote?: NcssProps
  blocksUlList?: NcssProps
  blocksOlList?: NcssProps
  blocksLiList?: NcssProps
  inlinesHyperlink?: NcssProps
  entryHyperlink?: NcssProps
  blocksHeading1?: NcssProps
  blocksHeading2?: NcssProps
  blocksHeading3?: NcssProps
  blocksHeading4?: NcssProps
  blocksHeading5?: NcssProps
  blocksHeading6?: NcssProps
  blocksHr?: NcssProps
  image?: ImageTreeStyle
  video?: VideoTreeStyle
}

export const textTreeStyle: TextTreeStyle = {
  wrapper: {
    mx: 'auto',
    maxWidth: '640px',
    flexDirection: 'column',
    textAlign: 'left',
  },
  marksBold: {
    fontWeight: 7,
  },
  marksCode: {
    pre: {
      fontSize: 3,
      bg: 'skyblue',
      py: 2,
      px: 3,
      wordBreak: 'break-all',
      wordWrap: 'break-word',
    },
    code: {},
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
