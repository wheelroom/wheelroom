import { ImageReset } from '../image-reset'
import { AnyReset } from '../any-reset'
import { SelfPreReset } from '../self-pre-reset'
import { ALinkReset } from '../a-link-reset'
import { GridReset } from '../grid-reset'
import { ButtonReset } from '../button-reset'
import { IconReset } from '../icon-reset'
import { GLinkReset } from '../g-link-reset'
import { HeadingReset } from '../heading-reset'
import { SelfListRreset } from '../self-list-reset'
import { ParagraphReset } from '../paragraph-reset'
import { VideoReset } from '../video-reset'
import { SelfHrRreset } from '../self-hr-reset'
import { SelfStrongReset } from '../self-strong-reset'
import { SelfCodeRreset } from '../self-code-reset'
import { SelfBlockquoteReset } from '../self-blockquote-reset'
import { SelfTableReset } from '../self-table-reset'

export interface ElementResets {
  any: AnyReset
  table: SelfTableReset
  ol: SelfListRreset
  ul: SelfListRreset
  li: SelfListRreset
  small: ParagraphReset
  sub: ParagraphReset
  sup: ParagraphReset
  pre: SelfPreReset
  code: SelfCodeRreset
  kbd: SelfCodeRreset
  samp: SelfCodeRreset
  hr: SelfHrRreset
  strong: SelfStrongReset
  blockquote: SelfBlockquoteReset
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
