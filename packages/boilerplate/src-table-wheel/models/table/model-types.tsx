import { ActionModelProps } from '../../../src-core'
import { TableRowModelProps } from '../table-row/model-types'

export interface TableModelProps {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  icon?: string
  actions?: ActionModelProps[]
  tableRows?: TableRowModelProps[]
}
