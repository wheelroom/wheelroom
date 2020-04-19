import { ImageElementStyle } from '../resets/image-reset'
import { AnyElementStyle } from '../resets/any-reset'
import { PreElementStyle } from '../resets/self-pre-reset'
import { ALinkElementStyle } from '../resets/a-link-reset'
import { GridElementStyle } from '../resets/grid-reset'
import { ButtonElementStyle } from '../resets/button-reset'
import { IconElementStyle } from '../resets/icon-reset'
import { GLinkElementStyle } from '../resets/g-link-reset'
import { HeadingElementStyle } from '../resets/heading-reset'
import { ListElementStyle } from '../resets/self-list-reset'
import { ParagraphElementStyle } from '../resets/paragraph-reset'
import { VideoElementStyle } from '../resets/video-reset'
import { HrElementStyle } from '../resets/self-hr-reset'
import { StrongElementStyle } from '../resets/self-strong-reset'
import { CodeElementStyle } from '../resets/self-code-reset'
import { BlockquoteElementStyle } from '../resets/self-blockquote-reset'
import { TableElementStyle } from '../resets/self-table-reset'

export interface ElementStyles {
  any: AnyElementStyle
  table: TableElementStyle
  ol: ListElementStyle
  ul: ListElementStyle
  li: ListElementStyle
  small: ParagraphElementStyle
  sub: ParagraphElementStyle
  sup: ParagraphElementStyle
  pre: PreElementStyle
  code: CodeElementStyle
  kbd: CodeElementStyle
  samp: CodeElementStyle
  hr: HrElementStyle
  strong: StrongElementStyle
  blockquote: BlockquoteElementStyle
  a: ALinkElementStyle
  box: GridElementStyle
  button: ButtonElementStyle
  wrapper: GridElementStyle
  container: GridElementStyle
  containerMaxWidth: GridElementStyle
  flex: GridElementStyle
  gLink: GLinkElementStyle
  h1: HeadingElementStyle
  h2: HeadingElementStyle
  h3: HeadingElementStyle
  h4: HeadingElementStyle
  h5: HeadingElementStyle
  h6: HeadingElementStyle
  p: ParagraphElementStyle
  featherIcon: IconElementStyle
  textIcon: IconElementStyle
  image: {
    img: ImageElementStyle
    picture: ImageElementStyle
    figcaption: ImageElementStyle
  }
  video: {
    description: VideoElementStyle
    video: VideoElementStyle
  }
}
