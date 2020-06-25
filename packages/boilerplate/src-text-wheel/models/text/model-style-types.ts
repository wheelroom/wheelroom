import {
  NcssObjectProps,
  BlockquoteElementStyle,
  CodeElementStyle,
  EmbedModelStyle,
  NcssObjectProps,
  HrElementStyle,
  ImageElementStyle,
  ListElementStyle,
  NcssObjectProps,
  PreElementStyle,
  StrongElementStyle,
  VideoElementStyle,
  NcssObjectProps,
} from '../../../src-core'

export interface TextModelStyle {
  wrapper: NcssObjectProps
  strong: StrongElementStyle
  code: CodeElementStyle
  pre: PreElementStyle
  hr: HrElementStyle
  p: NcssObjectProps
  blockquote: BlockquoteElementStyle
  ul: ListElementStyle
  ol: ListElementStyle
  li: ListElementStyle
  inlinesHyperlink: NcssObjectProps
  entryHyperlink: NcssObjectProps
  h1: NcssObjectProps
  h2: NcssObjectProps
  h3: NcssObjectProps
  h4: NcssObjectProps
  h5: NcssObjectProps
  h6: NcssObjectProps
  embed: EmbedModelStyle
  image: ImageElementStyle
  video: VideoElementStyle
}
