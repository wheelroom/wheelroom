/**
 * Component
 *
 * Component type: table
 *
 */

import React from 'react'
import { ActionProps } from '../action/action'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { TableRowProps } from '../table-row/table-row'
import { TableSingleVar } from './table-single-var'

const componentList = {
  ['single']: TableSingleVar,
}

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

export const Table = (props: TableProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
