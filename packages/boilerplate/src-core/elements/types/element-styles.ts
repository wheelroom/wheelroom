import { ALinkElementStyle } from '../element/a-link'
import { AnyElementStyle } from '../element/any'
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
} from '../self/self-styles'
import { ButtonElementStyle } from '../element/button'
import { GLinkElementStyle } from '../element/g-link'
import { HeadingElementStyle } from '../element/heading'
import { IconElementStyle } from '../element/icon'
import { ImageElementStyle } from '../element/image'
import { ParagraphElementStyle } from '../element/paragraph'
import { VideoElementStyle } from '../element/video'
import { NcssObjectProps } from '../../lib/ncss'
import { EmbedModelStyle } from '../../models/embed/model-style-types'

export interface ElementStyles {
  a: ALinkElementStyle
  any: AnyElementStyle
  blockquote: BlockquoteElementStyle
  box: NcssObjectProps
  button: ButtonElementStyle
  code: CodeElementStyle
  container: NcssObjectProps
  dd: DescriptionListElementStyle
  dl: DescriptionListElementStyle
  dt: DescriptionListElementStyle
  embed: EmbedModelStyle
  featherIcon: IconElementStyle
  flex: NcssObjectProps
  fluid: NcssObjectProps
  gLink: GLinkElementStyle
  h1: HeadingElementStyle
  h2: HeadingElementStyle
  h3: HeadingElementStyle
  h4: HeadingElementStyle
  h5: HeadingElementStyle
  h6: HeadingElementStyle
  hr: HrElementStyle
  image: ImageElementStyle
  kbd: CodeElementStyle
  li: ListElementStyle
  mediaBreakpoint: ImageElementStyle
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
  video: VideoElementStyle
  wrapper: NcssObjectProps
}
