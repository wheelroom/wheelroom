import {
  ImageElementStyle,
  NcssNode,
  VideoElementStyle,
} from '../../../../src-core'

export interface BlogSectionListVariationNcssTree extends NcssNode {
  item: NcssNode
  link: NcssNode
  media: NcssNode
  image: ImageElementStyle
  video: VideoElementStyle
  content: NcssNode
  date: NcssNode
  categories: NcssNode
  text: NcssNode
  heading: NcssNode
  abstract: NcssNode
}
