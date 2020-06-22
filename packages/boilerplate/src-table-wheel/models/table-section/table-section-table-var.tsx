/**
 * Component variation
 *
 * Component type: tableSection
 * Variation: Table
 *
 */

import React from 'react'
import { getWheel } from '../../../src-core'
import { Table } from '../table/table'
import { TableSectionProps } from './model-types'
import { TableSectionWrapper } from './table-section-wrapper'

export const TableSectionTableVar = (props: TableSectionProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'tableSection',
    sectionWheels: props.sectionWheels,
    variation: 'table',
  })

  if (!wheel || !props.tables) {
    return null
  }

  return (
    <TableSectionWrapper containerStyle="container" wheel={wheel}>
      <Table
        tables={props.tables}
        topicOptions={props.topicOptions || {}}
        wheel={{ ...wheel, style: wheel.style.section }}
      />
    </TableSectionWrapper>
  )
}
