/**
 * Component
 *
 * Component type: tableSection
 *
 */

import React from 'react'
import { getVariation } from '../../../src-core'
import { TableSectionPriceVar } from './table-section-price-var'
import { TableSectionModel } from './model-props'
import { TableSectionTableVar } from './table-section-table-var'

const componentList = {
  ['price']: TableSectionPriceVar,
  ['table']: TableSectionTableVar,
}

export const TableSection = (props: TableSectionModel) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
