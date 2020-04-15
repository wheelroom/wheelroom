import { NcssProps } from '../types'
import { ImagePreset } from '../elements/image'
import { VideoPreset } from '../elements/video'
import { imageFigcaptionPreset, imageImgPreset } from '../elements/image-preset'
import { GridPreset } from '../elements/grid-preset'

export interface TextPreset {
  wrapper: GridPreset
  marksBold: { ncss: NcssProps }
  marksCode: {
    pre: { ncss: NcssProps }
    code: { ncss: NcssProps }
  }
  blocksQuote: { ncss: NcssProps }
  blocksUlList: { ncss: NcssProps }
  blocksOlList: { ncss: NcssProps }
  blocksLiList: { ncss: NcssProps }
  inlinesHyperlink: { ncss: NcssProps }
  entryHyperlink: { ncss: NcssProps }
  blocksHeading1: { ncss: NcssProps }
  blocksHeading2: { ncss: NcssProps }
  blocksHeading3: { ncss: NcssProps }
  blocksHeading4: { ncss: NcssProps }
  blocksHeading5: { ncss: NcssProps }
  blocksHeading6: { ncss: NcssProps }
  blocksHr: { ncss: NcssProps }
  image: ImagePreset
  video: VideoPreset
}

export const textPreset: TextPreset = {
  blocksHeading1: {
    ncss: {
      pt: 3,
    },
  },
  blocksHeading2: {
    ncss: {
      pt: 3,
    },
  },
  blocksHeading3: {
    ncss: {
      pt: 3,
    },
  },
  blocksHeading4: {
    ncss: {
      pt: 3,
    },
  },
  blocksHeading5: {
    ncss: {
      pt: 3,
    },
  },
  blocksHeading6: {
    ncss: {
      pt: 3,
    },
  },
  blocksHr: {
    ncss: {
      borderColor: 'silver',
      borderTop: '1px solid transparent',
      my: 3,
      overflow: 'hidden',
      w: 1,
    },
  },
  blocksUlList: { ncss: {} },
  blocksOlList: { ncss: {} },
  blocksLiList: { ncss: { p: { mb: 0 } } },
  blocksQuote: {
    ncss: {
      ':before': {
        color: 'silver',
        content: '"”"',
        fontFamily: 'text',
        fontSize: 8,
      },
      textAlign: 'center',
    },
  },
  entryHyperlink: { ncss: { wordBreak: 'break-all' } },
  inlinesHyperlink: { ncss: { wordBreak: 'break-all' } },
  marksBold: {
    ncss: {
      fontWeight: 7,
    },
  },
  marksCode: {
    code: { ncss: {} },
    pre: {
      ncss: {
        bg: 'rgba(35, 122, 252, .1)',
        fontSize: 3,
        px: 3,
        py: 2,
        wordBreak: 'break-all',
        wordWrap: 'break-word',
      },
    },
  },
  image: {
    img: {
      ncss: {
        ...imageImgPreset,
        my: [4, 5],
      },
    },
    picture: { ncss: {} },
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
        my: [4, 5],
      },
    },
    description: {
      ncss: {
        mb: [4, 5],
      },
    },
  },
  wrapper: {
    ncss: {
      label: 'wrapper-text',
      maxWidth: '640px',
      mx: 'auto',
      py: 0,
    },
  },
}
