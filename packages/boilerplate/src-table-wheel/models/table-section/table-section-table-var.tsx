/**
 * Component variation
 *
 * Component type: tableSection
 * Variation: Table
 *
 */

import React from 'react'
import { getWheel, ScrollSpy } from '../../../src-core'
import { TableSection } from './table-section-wheel'
import { TableSectionProps } from './model-types'

export const TableSectionTableVar = (props: TableSectionProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'table',
    sectionWheels: props.sectionWheels,
    variation: 'table',
  })

  if (!wheel || !props.tables) {
    return null
  }

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <TableSection
        containerStyle="container"
        tables={props.tables}
        topicOptions={props.topicOptions || {}}
        wheel={wheel}
      />
    </ScrollSpy>
  )
}
