/**
 * Component
 *
 * Component type: tableSection
 *
 */

import React from 'react'
import { getVariation } from '../../../src-core'
import { TableSectionPriceVar } from './table-section-price-var'
import { TableSectionModelProps } from './model-types'
import { TableSectionTableVar } from './table-section-table-var'

const componentList = {
  ['price']: TableSectionPriceVar,
  ['table']: TableSectionTableVar,
}

export const TableSection = (props: TableSectionModelProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
