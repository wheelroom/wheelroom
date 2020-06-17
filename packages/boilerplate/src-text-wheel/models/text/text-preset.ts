import { EmbedStyle } from '../embed/embed'
import { ImageElementStyle } from '../../../src-core/elements/image'
import { VideoElementStyle } from '../../../src-core/elements/video'
import { GridElementStyle } from '../../../src-core/elements/resets/grid-reset'
import { StrongElementStyle } from '../../../src-core/elements/resets/self-strong-reset'
import { CodeElementStyle } from '../../../src-core/elements/resets/self-code-reset'
import { PreElementStyle } from '../../../src-core/elements/resets/self-pre-reset'
import { ParagraphElementStyle } from '../../../src-core/elements/resets/paragraph-reset'
import { HrElementStyle } from '../../../src-core/elements/resets/self-hr-reset'
import { HeadingElementStyle } from '../../../src-core/elements/resets/heading-reset'
import { BlockquoteElementStyle } from '../../../src-core/elements/resets/self-blockquote-reset'
import { ListElementStyle } from '../../../src-core/elements/resets/self-list-reset'
import { ALinkElementStyle } from '../../../src-core/elements/resets/a-link-reset'

export interface TextWheelStyle {
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
  embed: EmbedStyle
  image: ImageElementStyle
  video: VideoElementStyle
}

export const textPreset: TextWheelStyle = {
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
    ncss: {},
  },
  inlinesHyperlink: {
    ncss: {},
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
  embed: {
    ncss: {},
  },
  image: {
    img: {
      ncss: {},
    },
    picture: {
      ncss: {},
    },
    figcaption: {
      ncss: {},
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
    ncss: {},
  },
}
