import { ImageReset } from '../resets/image-reset'
import { AnyReset } from '../resets/any-reset'
import { SelfPreReset } from '../resets/self-pre-reset'
import { ALinkReset } from '../resets/a-link-reset'
import { GridReset } from '../resets/grid-reset'
import { ButtonReset } from '../resets/button-reset'
import { IconReset } from '../resets/icon-reset'
import { GLinkReset } from '../resets/g-link-reset'
import { HeadingReset } from '../resets/heading-reset'
import { SelfListReset } from '../resets/self-list-reset'
import { ParagraphReset } from '../resets/paragraph-reset'
import { VideoReset } from '../resets/video-reset'
import { SelfHrReset } from '../resets/self-hr-reset'
import { SelfStrongReset } from '../resets/self-strong-reset'
import { SelfCodeReset } from '../resets/self-code-reset'
import { SelfBlockquoteReset } from '../resets/self-blockquote-reset'
import { SelfTableReset } from '../resets/self-table-reset'

export interface ElementResets {
  any: AnyReset
  table: SelfTableReset
  ol: SelfListReset
  ul: SelfListReset
  li: SelfListReset
  small: ParagraphReset
  sub: ParagraphReset
  sup: ParagraphReset
  pre: SelfPreReset
  code: SelfCodeReset
  kbd: SelfCodeReset
  samp: SelfCodeReset
  hr: SelfHrReset
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
