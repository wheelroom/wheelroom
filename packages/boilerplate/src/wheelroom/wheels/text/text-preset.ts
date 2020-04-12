import { paragraphPreset } from '../elements/paragraph-preset'
import { aLinkPreset } from '../elements/a-link-preset'
import { videoDescriptionPreset, videoPreset } from '../elements/video-preset'
import { NcssProps } from '../elements/types'
import { ImageTreeStyle } from '../elements/image'
import { VideoTreeStyle } from '../elements/video'
import { imageFigcaptionPreset, imageImgPreset } from '../elements/image-preset'

export interface TextPreset {
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

export const textTreeStyle: TextPreset = {
  blocksHeading1: {
    pt: 3,
  },
  blocksHeading2: {
    pt: 3,
  },
  blocksHeading3: {
    pt: 3,
  },
  blocksHeading4: {
    pt: 3,
  },
  blocksHeading5: {
    pt: 3,
  },
  blocksHeading6: {
    pt: 3,
  },
  blocksHr: {
    borderColor: 'silver',
    borderTop: '1px solid transparent',
    my: 3,
    overflow: 'hidden',
    w: 1,
  },
  blocksUlList: paragraphPreset,
  blocksOlList: paragraphPreset,
  blocksLiList: { ...paragraphPreset, p: { mb: 0 } },
  blocksQuote: {
    ':before': {
      color: 'silver',
      content: '"”"',
      fontFamily: 'systemFont',
      fontSize: 8,
    },
    textAlign: 'center',
  },
  entryHyperlink: { ...aLinkPreset, wordBreak: 'break-all' },
  inlinesHyperlink: { ...aLinkPreset, wordBreak: 'break-all' },
  marksBold: {
    fontWeight: 7,
  },
  marksCode: {
    code: {},
    pre: {
      bg: 'rgba(35, 122, 252, .1)',
      fontSize: 3,
      px: 3,
      py: 2,
      wordBreak: 'break-all',
      wordWrap: 'break-word',
    },
  },
  image: {
    img: {
      ncss: {
        ...imageImgPreset,
        my: [4, 5],
      },
    },
    figcaption: {
      ncss: {
        ...imageFigcaptionPreset,
        mb: [4, 5],
      },
    },
  },
  video: {
    video: {
      ncss: {
        ...videoPreset,
        my: [4, 5],
      },
    },
    description: {
      ncss: {
        ...videoDescriptionPreset,
        mb: [4, 5],
      },
    },
  },
  wrapper: {
    ncss: {
      label: 'text',
      maxWidth: '640px',
      mx: 'auto',
      p: 3,
    },
  },
}
