import {
  ImageElementNcssTree,
  NcssNode,
  VideoElementNcssTree,
} from '@wheelroom/core'
import { TopicNcssTree } from '@wheelroom/wheel-topic'
import { RichTextNcssTree } from '@wheelroom/wheel-text'

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
  author: TopicNcssTree
}
