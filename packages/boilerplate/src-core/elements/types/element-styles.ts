import { ALinkElementStyle } from '../element/a-link'
import { AnyElementStyle } from '../any'
import {
  BlockquoteElementStyle,
  CodeElementStyle,
  DescriptionListElementStyle,
  HrElementStyle,
  ListElementStyle,
  PreElementStyle,
  StrongElementStyle,
  TableElementStyle,
  TimeElementStyle,
} from '../self-styles'
import { GridElementStyle } from '../grid'
import { ButtonElementStyle } from '../button'
import { EmbedStyle } from '../..'
import { IconElementStyle } from '../icon'
import { GLinkElementStyle } from '../g-link'
import { HeadingElementStyle } from '../heading'
import { ImageElementStyle } from '../image'
import { ParagraphElementStyle } from '../paragraph'
import { VideoElementStyle } from '../video'

export interface ElementStyles {
  a: ALinkElementStyle
  any: AnyElementStyle
  blockquote: BlockquoteElementStyle
  box: GridElementStyle
  button: ButtonElementStyle
  code: CodeElementStyle
  container: GridElementStyle
  dd: DescriptionListElementStyle
  dl: DescriptionListElementStyle
  dt: DescriptionListElementStyle
  embed: EmbedStyle
  featherIcon: IconElementStyle
  flex: GridElementStyle
  fluid: GridElementStyle
  gLink: GLinkElementStyle
  h1: HeadingElementStyle
  h2: HeadingElementStyle
  h3: HeadingElementStyle
  h4: HeadingElementStyle
  h5: HeadingElementStyle
  h6: HeadingElementStyle
  hr: HrElementStyle
  image: {
    img: ImageElementStyle
    picture: ImageElementStyle
    figcaption: ImageElementStyle
  }
  kbd: CodeElementStyle
  li: ListElementStyle
  mediaBreakpoint: {
    img: ImageElementStyle
    picture: ImageElementStyle
  }
  ol: ListElementStyle
  p: ParagraphElementStyle
  pre: PreElementStyle
  samp: CodeElementStyle
  small: ParagraphElementStyle
  strong: StrongElementStyle
  sub: ParagraphElementStyle
  sup: ParagraphElementStyle
  table: TableElementStyle
  td: TableElementStyle
  th: TableElementStyle
  tr: TableElementStyle
  time: TimeElementStyle
  textIcon: IconElementStyle
  ul: ListElementStyle
  video: {
    description: VideoElementStyle
    video: VideoElementStyle
  }
  wrapper: GridElementStyle
}
