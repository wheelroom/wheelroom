import { ImageElementStyle } from '../elements/image'
import { VideoElementStyle } from '../elements/video'
import { GridElementStyle } from '../elements/resets/grid-reset'
import { StrongElementStyle } from '../elements/resets/self-strong-reset'
import { CodeElementStyle } from '../elements/resets/self-code-reset'
import { PreElementStyle } from '../elements/resets/self-pre-reset'
import { ParagraphElementStyle } from '../elements/resets/paragraph-reset'
import { HrElementStyle } from '../elements/resets/self-hr-reset'
import { HeadingElementStyle } from '../elements/resets/heading-reset'
import { BlockquoteElementStyle } from '../elements/resets/self-blockquote-reset'
import { ListElementStyle } from '../elements/resets/self-list-reset'
import { ALinkElementStyle } from '../elements/resets/a-link-reset'
import {
  imageFigcaptionReset,
  imageImgReset,
} from '../elements/resets/image-reset'

export interface TextPreset {
  wrapper: GridElementStyle
  strong: StrongElementStyle
  code: CodeElementStyle
  pre: PreElementStyle
  hr: HrElementStyle
  p: ParagraphElementStyle
  blockquote: BlockquoteElementStyle
  ul: ListElementStyle
  ol: ListElementStyle
  li: ListElementStyle
  inlinesHyperlink: ALinkElementStyle
  entryHyperlink: ALinkElementStyle
  h1: HeadingElementStyle
  h2: HeadingElementStyle
  h3: HeadingElementStyle
  h4: HeadingElementStyle
  h5: HeadingElementStyle
  h6: HeadingElementStyle
  image: ImageElementStyle
  video: VideoElementStyle
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
