import { ImageReset } from '../elements/image'
import { VideoReset } from '../elements/video'
import { GridReset } from '../elements/resets/grid-reset'
import { SelfStrongReset } from '../elements/resets/self-strong-reset'
import { SelfCodeReset } from '../elements/resets/self-code-reset'
import { SelfPreReset } from '../elements/resets/self-pre-reset'
import { ParagraphReset } from '../elements/resets/paragraph-reset'
import { SelfHrReset } from '../elements/resets/self-hr-reset'
import { HeadingReset } from '../elements/resets/heading-reset'
import { SelfBlockquoteReset } from '../elements/resets/self-blockquote-reset'
import { SelfListReset } from '../elements/resets/self-list-reset'
import { ALinkReset } from '../elements/resets/a-link-reset'
import {
  imageFigcaptionReset,
  imageImgReset,
} from '../elements/resets/image-reset'

export interface TextPreset {
  wrapper: GridReset
  strong: SelfStrongReset
  code: SelfCodeReset
  pre: SelfPreReset
  hr: SelfHrReset
  p: ParagraphReset
  blockquote: SelfBlockquoteReset
  ul: SelfListReset
  ol: SelfListReset
  li: SelfListReset
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
