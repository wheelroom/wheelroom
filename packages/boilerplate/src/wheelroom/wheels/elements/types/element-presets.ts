import { ImageReset } from '../image-reset'
import { AnyReset } from '../any-reset'
import { PreReset } from '../pre-reset'
import { ALinkReset } from '../a-link-reset'
import { GridReset } from '../grid-reset'
import { ButtonReset } from '../button-reset'
import { IconReset } from '../icon-reset'
import { GLinkReset } from '../g-link-reset'
import { HeadingReset } from '../heading-reset'
import { ListReset } from '../list-reset'
import { ParagraphReset } from '../paragraph-reset'
import { VideoReset } from '../video-reset'
import { HrReset } from '../hr-reset'
import { StrongReset } from '../strong-reset'
import { CodeRreset } from '../code-reset'
import { BlockquoteReset } from '../blockquote-reset'
import { TableReset } from '../table-reset'

export interface ElementPresets {
  any: AnyReset
  table: TableReset
  ol: ListReset
  ul: ListReset
  li: ListReset
  small: ParagraphReset
  sub: ParagraphReset
  sup: ParagraphReset
  pre: PreReset
  code: CodeRreset
  kbd: CodeRreset
  samp: CodeRreset
  hr: HrReset
  strong: StrongReset
  blockquote: BlockquoteReset
  a: ALinkReset
  box: GridReset
  button: ButtonReset
  wrapper: GridReset
  container: GridReset
  containerMaxWidth: GridReset
  flex: GridReset
  gLink: GLinkReset
  h1: HeadingReset
  h2: HeadingReset
  h3: HeadingReset
  h4: HeadingReset
  h5: HeadingReset
  h6: HeadingReset
  p: ParagraphReset
  featherIcon: IconReset
  textIcon: IconReset
  image: {
    img: ImageReset
    picture: ImageReset
    figcaption: ImageReset
  }
  video: {
    description: VideoReset
    video: VideoReset
  }
}
