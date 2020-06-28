import { TopicNcssTree } from '../..'
import { NcssNode } from '@wheelroom/core'

export interface TopicSectionNcssTree {
  container: NcssNode
  topic: TopicNcssTree
  wrapper: NcssNode
}
