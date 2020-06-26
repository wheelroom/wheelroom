import { ImageElementStyle } from '../element/image'
import { VideoElementStyle } from '../element/video'
import { NcssNode } from '../../lib/ncss'

export interface ElementStyles {
  a: NcssNode
  any: NcssNode
  blockquote: NcssNode
  box: NcssNode
  button: NcssNode
  code: NcssNode
  container: NcssNode
  dd: NcssNode
  dl: NcssNode
  dt: NcssNode
  embed: NcssNode
  featherIcon: NcssNode
  flex: NcssNode
  fluid: NcssNode
  gLink: NcssNode
  h1: NcssNode
  h2: NcssNode
  h3: NcssNode
  h4: NcssNode
  h5: NcssNode
  h6: NcssNode
  hr: NcssNode
  image: ImageElementStyle
  kbd: NcssNode
  li: NcssNode
  mediaBreakpoint: ImageElementStyle
  ol: NcssNode
  p: NcssNode
  pre: NcssNode
  samp: NcssNode
  small: NcssNode
  strong: NcssNode
  sub: NcssNode
  sup: NcssNode
  table: NcssNode
  td: NcssNode
  th: NcssNode
  tr: NcssNode
  time: NcssNode
  textIcon: NcssNode
  ul: NcssNode
  video: VideoElementStyle
  wrapper: NcssNode
}
