import { defaultParagraphStyle } from '../../../themes/yosemite/elements-styles/paragraph'
import { defaultALinkStyle } from '../../../themes/yosemite/elements-styles/a-link'
import { defaultVideoStyle } from '../../../themes/yosemite/elements-styles/video'
import { NcssProps } from '../../elements/types'
import { ImageTreeStyle } from '../../elements/image'
import { VideoTreeStyle } from '../../elements/video'

export interface TextPresetStyle {
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

export const textTreeStyle: TextPresetStyle = {
  blocksHeading1: {
    fontSize: [8, 9, 10, 11],
  },
  blocksHeading2: {
    fontSize: [7, 8, 9, 10],
    mt: 3,
  },
  blocksHeading3: {
    fontSize: [5, 6, 7, 8],
    mt: 3,
  },
  blocksHeading4: {
    fontSize: [3, 4, 5, 6],
    mt: 3,
  },
  blocksHeading5: {
    fontSize: [3, 4, 5, 6],
    mt: 3,
  },
  blocksHeading6: {
    fontSize: [3, 4, 5, 6],
    mt: 3,
  },
  blocksHr: {
    borderColor: 'text',
    borderTop: '1px solid transparent',
    my: 3,
    overflow: 'hidden',
    w: 1,
  },
  blocksLiList: defaultParagraphStyle,
  blocksOlList: defaultParagraphStyle,
  blocksQuote: {
    ':before': {
      color: 'metal',
      content: '"”"',
      fontFamily: 'text',
      fontSize: 8,
    },
    textAlign: 'center',
  },
  blocksUlList: defaultParagraphStyle,
  entryHyperlink: { ...defaultALinkStyle, wordBreak: 'break-all' },
  image: {
    figcaption: {
      ncss: {
        mb: [4, 5],
        mt: 0,
      },
    },
    img: {
      ncss: {
        my: [4, 5],
      },
    },
  },
  inlinesHyperlink: { ...defaultALinkStyle, wordBreak: 'break-all' },
  marksBold: {
    fontWeight: 7,
  },
  marksCode: {
    code: {},
    pre: {
      bg: 'skyblue',
      fontSize: 3,
      px: 3,
      py: 2,
      wordBreak: 'break-all',
      wordWrap: 'break-word',
    },
  },
  video: {
    video: {
      ncss: {
        ...defaultVideoStyle,
        my: [4, 5],
      },
    },
  },
  wrapper: {
    ncss: {
      flexDirection: 'column',
      maxWidth: '640px',
      mx: 'auto',
      textAlign: 'left',
    },
  },
}
