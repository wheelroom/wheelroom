import { TopicNcssTree } from '../..'
import { NcssNode } from '../../../src-core'

export interface TopicSectionNcssTree {
  container: NcssNode
  topic: TopicNcssTree
  wrapper: NcssNode
}
