import { ActionProps } from '../action/model-types'
import { TableRowProps } from '../table-row/table-row'

export interface TableProps {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  icon?: string
  actions?: ActionProps[]
  tableRows?: TableRowProps[]
}
