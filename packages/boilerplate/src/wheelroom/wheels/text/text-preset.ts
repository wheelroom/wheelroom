import { ImagePreset } from '../elements/image'
import { VideoPreset } from '../elements/video'
import { GridPreset } from '../elements/grid-preset'
import { StrongPreset } from '../elements/strong-preset'
import { CodePreset } from '../elements/code-preset'
import { PrePreset } from '../elements/pre-preset'
import { ParagraphPreset } from '../elements/paragraph-preset'
import { HrPreset } from '../elements/hr-preset'
import { HeadingPreset } from '../elements/heading-preset'
import { BlockquotePreset } from '../elements/blockquote-preset'
import { ListPreset } from '../elements/list-preset'
import { ALinkPreset } from '../elements/a-link-preset'
import { imageFigcaptionPreset, imageImgPreset } from '../elements/image-preset'

export interface TextPreset {
  wrapper: GridPreset
  strong: StrongPreset
  code: CodePreset
  pre: PrePreset
  hr: HrPreset
  p: ParagraphPreset
  blockquote: BlockquotePreset
  ul: ListPreset
  ol: ListPreset
  li: ListPreset
  inlinesHyperlink: ALinkPreset
  entryHyperlink: ALinkPreset
  h1: HeadingPreset
  h2: HeadingPreset
  h3: HeadingPreset
  h4: HeadingPreset
  h5: HeadingPreset
  h6: HeadingPreset
  image: ImagePreset
  video: VideoPreset
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
        ...imageImgPreset,
      },
    },
    picture: {
      ncss: {},
    },
    figcaption: {
      ncss: {
        ...imageFigcaptionPreset,
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
