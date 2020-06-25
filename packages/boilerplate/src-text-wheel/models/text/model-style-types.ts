import {
  NcssObjectProps,
  BlockquoteElementStyle,
  CodeElementStyle,
  EmbedModelStyle,
  HeadingElementStyle,
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
  h1: HeadingElementStyle
  h2: HeadingElementStyle
  h3: HeadingElementStyle
  h4: HeadingElementStyle
  h5: HeadingElementStyle
  h6: HeadingElementStyle
  embed: EmbedModelStyle
  image: ImageElementStyle
  video: VideoElementStyle
}
