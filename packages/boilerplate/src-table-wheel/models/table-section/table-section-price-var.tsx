/**
 * Component variation
 *
 * Component type: tableSection
 * Variation: Table
 *
 */

import React from 'react'
import { getWheel } from '../../../src-core'
import { TableSection } from './table-section-wheel'
import { TableSectionProps } from './model-types'

export const TableSectionPriceVar = (props: TableSectionProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'tableSection',
    sectionWheels: props.sectionWheels,
    variation: 'price',
  })

  if (!wheel || !props.tables) {
    return null
  }

  return (
    <TableSection
      containerStyle="container"
      tables={props.tables}
      topicOptions={props.topicOptions || {}}
      wheel={wheel}
    />
  )
}
