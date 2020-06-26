import {
  ImageElementStyle,
  NcssNode,
  VideoElementStyle,
} from '../../../../src-core'
import { TextModelNcssTree } from '../../../../src-text-wheel'
import { TopicModelNcssTree } from '../../../../src-topic-wheel'

export interface BlogSectionBlogVariationNcssTree extends NcssNode {
  header: NcssNode
  categories: NcssNode
  date: NcssNode
  heading: NcssNode
  abstract: NcssNode
  media: NcssNode
  image: ImageElementStyle
  video: VideoElementStyle
  text: TextModelNcssTree
  authors: NcssNode
  author: TopicModelNcssTree
}
