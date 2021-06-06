import { NcssNode } from '@wheelroom/core'
import { TopicNcssTree } from '../..'

export interface TopicSectionNcssTree {
  container: NcssNode
  topic: TopicNcssTree
  wrapper: NcssNode
}
