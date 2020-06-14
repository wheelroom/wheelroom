/**
 * Component variation
 *
 * Component type: tableSection
 * Variation: Table
 *
 */

import React from 'react'
import { deepMerge } from '../../lib/deep-merge'
import { getSectionStyle, getWheel } from '../../../themes/themes'
import { ScrollSpy } from '../../lib/scroll-spy'
import { ThemeId } from '../../../admin-resources/theme-info'
import { Wheel } from '../../types/wheel'
import { TableSection } from './table-section-wheel'
import { TableSectionProps } from './model-types'
import { tableSectionWheelStyle } from './table-section-wheel-style'

export const TableSectionTableVar = (props: TableSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    tableSectionWheelStyle,
    getSectionStyle('tableSection').table,
  ])

  if (!props.tables) {
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
