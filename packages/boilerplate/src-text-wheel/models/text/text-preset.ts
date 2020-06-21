import {
  ALinkElementStyle,
  BlockquoteElementStyle,
  CodeElementStyle,
  EmbedStyle,
  GridElementStyle,
  HeadingElementStyle,
  HrElementStyle,
  ImageElementStyle,
  ListElementStyle,
  ParagraphElementStyle,
  PreElementStyle,
  StrongElementStyle,
  VideoElementStyle,
} from '../../../src-core'

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