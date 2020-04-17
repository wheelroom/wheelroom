import { ImageReset } from '../elements/image'
import { VideoReset } from '../elements/video'
import { GridReset } from '../elements/grid-reset'
import { StrongReset } from '../elements/strong-reset'
import { CodeRreset } from '../elements/code-reset'
import { PreReset } from '../elements/pre-reset'
import { ParagraphReset } from '../elements/paragraph-reset'
import { HrReset } from '../elements/hr-reset'
import { HeadingReset } from '../elements/heading-reset'
import { BlockquoteReset } from '../elements/blockquote-reset'
import { ListReset } from '../elements/list-reset'
import { ALinkReset } from '../elements/a-link-reset'
import { imageFigcaptionReset, imageImgReset } from '../elements/image-reset'

export interface TextPreset {
  wrapper: GridReset
  strong: StrongReset
  code: CodeRreset
  pre: PreReset
  hr: HrReset
  p: ParagraphReset
  blockquote: BlockquoteReset
  ul: ListReset
  ol: ListReset
  li: ListReset
  inlinesHyperlink: ALinkReset
  entryHyperlink: ALinkReset
  h1: HeadingReset
  h2: HeadingReset
  h3: HeadingReset
  h4: HeadingReset
  h5: HeadingReset
  h6: HeadingReset
  image: ImageReset
  video: VideoReset
}

export const textPreset: TextPreset = {
  h1: {
    ncss: {},
  },
  h2: {
    ncss: {},
  },
  h3: {
    ncss: {},
  },
  h4: {
    ncss: {},
  },
  h5: {
    ncss: {},
  },
  h6: {
    ncss: {},
  },
  ul: {
    ncss: {},
  },
  ol: {
    ncss: {},
  },
  li: {
    ncss: {},
  },
  entryHyperlink: {
    ncss: {
      wordBreak: 'break-all',
      hyphens: 'auto',
    },
  },
  inlinesHyperlink: {
    ncss: {
      wordBreak: 'break-all',
      hyphens: 'auto',
    },
  },
  hr: {
    ncss: {},
  },
  blockquote: {
    ncss: {},
  },
  p: {
    ncss: {},
  },
  strong: {
    ncss: {},
  },
  code: {
    ncss: {},
  },
  pre: {
    ncss: {},
  },
  image: {
    img: {
      ncss: {
        ...imageImgReset,
      },
    },
    picture: {
      ncss: {},
    },
    figcaption: {
      ncss: {
        ...imageFigcaptionReset,
      },
    },
  },
  video: {
    video: {
      ncss: {},
    },
    description: {
      ncss: {},
    },
  },
  wrapper: {
    ncss: {
      label: 'wrapper-text',
      maxWidth: '640px',
      mx: 'auto',
      py: 0,
      px: 3,
    },
  },
}
