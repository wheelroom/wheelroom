import { ImageElementStyle } from '../../element/image'
import { VideoElementStyle } from '../../element/video'
import { GridElementStyle } from '../../element/resets/grid-reset'
import { StrongElementStyle } from '../../element/resets/self-strong-reset'
import { CodeElementStyle } from '../../element/resets/self-code-reset'
import { PreElementStyle } from '../../element/resets/self-pre-reset'
import { ParagraphElementStyle } from '../../element/resets/paragraph-reset'
import { HrElementStyle } from '../../element/resets/self-hr-reset'
import { HeadingElementStyle } from '../../element/resets/heading-reset'
import { BlockquoteElementStyle } from '../../element/resets/self-blockquote-reset'
import { ListElementStyle } from '../../element/resets/self-list-reset'
import { ALinkElementStyle } from '../../element/resets/a-link-reset'

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
    ncss: {
      wordBreak: 'break-word',
      hyphens: 'auto',
    },
  },
  inlinesHyperlink: {
    ncss: {
      wordBreak: 'break-word',
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
    ncss: {
      label: 'wrapper-text',
      maxWidth: '712px', // Golden read width ratio
      mx: 'auto',
      py: 0,
      px: 3,
    },
  },
}
