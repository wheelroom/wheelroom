import {
  ImageElementNcssTree,
  NcssNode,
  VideoElementNcssTree,
} from '../../../../src-core'
import { TopicNcssTree } from '../../../../src-topic-wheel'
import { NcssTree } from '../../../../src-text-wheel'

export interface BlogSectionBlogVariationNcssTree extends NcssNode {
  header: NcssNode
  categories: NcssNode
  date: NcssNode
  heading: NcssNode
  abstract: NcssNode
  media: NcssNode
  image: ImageElementNcssTree
  video: VideoElementNcssTree
  richText: NcssTree
  authors: NcssNode
  author: TopicNcssTree
}
