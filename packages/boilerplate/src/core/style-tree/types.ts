import { NcssProps } from '../elements/types'

export interface StyleTree {
  [objectName: string]: NcssProps | StyleTree
}

export interface StyleTreeBase {
  [objectName: string]: NcssProps
}
