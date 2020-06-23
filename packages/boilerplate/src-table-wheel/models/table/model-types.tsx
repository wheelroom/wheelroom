import { ActionModelProps } from '../../../src-core'
import { TableRowProps } from '../table-row/model-types'

export interface TableProps {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  icon?: string
  actions?: ActionModelProps[]
  tableRows?: TableRowProps[]
}
