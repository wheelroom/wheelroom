import {
  ImageElementNcssTree,
  NcssNode,
  VideoElementNcssTree,
} from '../../../../src-core'
import { TopicModelNcssTree } from '../../../../src-topic-wheel'
import { RichTextNcssTree } from '../../../../src-text-wheel'

export interface BlogSectionBlogVariationNcssTree extends NcssNode {
  header: NcssNode
  categories: NcssNode
  date: NcssNode
  heading: NcssNode
  abstract: NcssNode
  media: NcssNode
  image: ImageElementNcssTree
  video: VideoElementNcssTree
  richText: RichTextNcssTree
  authors: NcssNode
  author: TopicModelNcssTree
}
