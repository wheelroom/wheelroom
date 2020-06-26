import { TopicModelNcssTree } from '../..'
import { NcssNode } from '../../../src-core'

export interface TopicSectionModelNcssTree {
  container: NcssNode
  topic: TopicModelNcssTree
  wrapper: NcssNode
}
