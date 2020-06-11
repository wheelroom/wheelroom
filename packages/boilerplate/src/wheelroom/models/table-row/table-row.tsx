/**
 * Component
 *
 * Component type: tableRow
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { TableRowBodyVar } from './table-row-body-var'
import { TableRowFooterVar } from './table-row-footer-var'
import { TableRowHeaderVar } from './table-row-header-var'
import { TableRowProps } from './model-types'

const componentList = {
  ['header']: TableRowHeaderVar,
  ['body']: TableRowBodyVar,
  ['footer']: TableRowFooterVar,
}

export const TableRow = (props: TableRowProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
