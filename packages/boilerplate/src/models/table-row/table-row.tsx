/**
 * Component
 *
 * Component type: tableRow
 *
 */

import React from 'react'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { TableRowHeaderVar } from './table-row-header-var'
import { TableRowBodyVar } from './table-row-body-var'
import { TableRowFooterVar } from './table-row-footer-var'

const componentList = {
  ['header']: TableRowHeaderVar,
  ['body']: TableRowBodyVar,
  ['footer']: TableRowFooterVar,
}

export interface TableRowProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  heading?: string
  abstract?: {
    abstract: string
  }
  icon?: string
  actions?: any
  topics?: any
}

export const TableRow = (props: TableRowProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
