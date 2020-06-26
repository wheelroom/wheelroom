import {
  ImageElementNcssTree,
  NcssNode,
  VideoElementNcssTree,
} from '../../../../src-core'

export interface BlogSectionListVariationNcssTree extends NcssNode {
  item: NcssNode
  link: NcssNode
  media: NcssNode
  image: ImageElementNcssTree
  video: VideoElementNcssTree
  content: NcssNode
  date: NcssNode
  categories: NcssNode
  text: NcssNode
  heading: NcssNode
  abstract: NcssNode
}
