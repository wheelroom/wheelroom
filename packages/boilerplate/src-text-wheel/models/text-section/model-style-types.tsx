import { TextModelNcssTree } from '../text/model-style-types'
import { NcssNode } from '../../../src-core'

export interface TextSectionModelNcssTree {
  container: NcssNode
  text: TextModelNcssTree
  wrapper: NcssNode
}
