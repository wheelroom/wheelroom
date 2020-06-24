import {
  ALinkElementStyle,
  BlockquoteElementStyle,
  CodeElementStyle,
  EmbedModelStyle,
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

export interface TextModelStyle {
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
  embed: EmbedModelStyle
  image: ImageElementStyle
  video: VideoElementStyle
}
