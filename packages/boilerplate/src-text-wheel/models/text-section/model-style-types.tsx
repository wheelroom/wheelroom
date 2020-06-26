import { TextModelNcssTree } from '../text/model-style-types'
import { NcssObjectProps } from '../../../src-core'

export interface TextSectionModelNcssTree {
  container: NcssObjectProps
  text: TextModelNcssTree
  wrapper: NcssObjectProps
}
