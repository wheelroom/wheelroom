/**
 * Component
 *
 * Component type: table
 *
 */

import { ActionProps } from '../action/action'
import { TableRowProps } from '../table-row/table-row'

export interface TopicTableProps {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  icon?: string | JSX.Element
  actions?: ActionProps[]
  tableRows?: TableRowProps[]
}
