import {
  ImageElementStyle,
  VideoElementStyle,
  NcssObjectProps,
} from '../../../src-core'

export interface TextModelStyle {
  wrapper: NcssObjectProps
  strong: NcssObjectProps
  code: NcssObjectProps
  pre: NcssObjectProps
  hr: NcssObjectProps
  p: NcssObjectProps
  blockquote: NcssObjectProps
  ul: NcssObjectProps
  ol: NcssObjectProps
  li: NcssObjectProps
  inlinesHyperlink: NcssObjectProps
  entryHyperlink: NcssObjectProps
  h1: NcssObjectProps
  h2: NcssObjectProps
  h3: NcssObjectProps
  h4: NcssObjectProps
  h5: NcssObjectProps
  h6: NcssObjectProps
  embed: NcssObjectProps
  image: ImageElementStyle
  video: VideoElementStyle
}
