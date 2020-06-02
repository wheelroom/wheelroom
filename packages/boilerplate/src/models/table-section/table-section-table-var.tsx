/**
 * Component variation
 *
 * Component type: tableSection
 * Variation: Table
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getSectionStyle, getWheel } from '../../themes/themes'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { tableSectionPreset } from '../../wheelroom/wheels/section/table/presets/table-section-preset'
import { TableSectionProps } from './table-section'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'
import { TableSection } from '../../wheelroom/wheels/section/table/table-section'

export const TableSectionTableVar = (props: TableSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([tableSectionPreset, getSectionStyle('table').base])

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
