import {
  NcssNode,
  EmbedNcssTree,
  ImageElementNcssTree,
  VideoElementNcssTree,
} from '../../../../src-core'

export interface NcssTree extends NcssNode {
  strong: NcssNode
  code: NcssNode
  pre: NcssNode
  hr: NcssNode
  p: NcssNode
  blockquote: NcssNode
  ul: NcssNode
  ol: NcssNode
  li: NcssNode
  inlinesHyperlink: NcssNode
  entryHyperlink: NcssNode
  h1: NcssNode
  h2: NcssNode
  h3: NcssNode
  h4: NcssNode
  h5: NcssNode
  h6: NcssNode
  embed: EmbedNcssTree
  image: ImageElementNcssTree
  video: VideoElementNcssTree
}
