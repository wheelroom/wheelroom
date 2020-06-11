/**
 * Component
 *
 * Component type: tableSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { TableSectionPriceVar } from './table-section-price-var'
import { TableSectionProps } from './model-types'
import { TableSectionTableVar } from './table-section-table-var'

const componentList = {
  ['price']: TableSectionPriceVar,
  ['table']: TableSectionTableVar,
}

export const TableSection = (props: TableSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
