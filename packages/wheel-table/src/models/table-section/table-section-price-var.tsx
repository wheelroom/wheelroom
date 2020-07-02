/**
 * Component variation
 *
 * Component type: tableSection
 * Variation: Price
 *
 */

import React from 'react'
import { getSectionWheel } from '@wheelroom/core'
import { getTopicOptions } from "@wheelroom/wheel-topic"
import { Table } from './table'
import { TableSectionModel } from './model'
import { TableSectionWrapper } from './table-section-wrapper'

export const TableSectionPriceVar = (props: TableSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.activeThemeId,
    wheelId: 'tableSection',
    sectionWheels: props.sectionWheels,
    variation: 'price',
  })
  if (!sectionWheel || !props.tableRows) {
    return null
  }
  const { wheel } = sectionWheel
  return (
    <TableSectionWrapper containerStyle="container" wheel={wheel}>
      <Table
        tableRows={props.tableRows}
        topicOptions={getTopicOptions(props.topicOptions || [])}
        wheel={{ ...wheel, style: wheel.style.table }}
      />
    </TableSectionWrapper>
  )
}
