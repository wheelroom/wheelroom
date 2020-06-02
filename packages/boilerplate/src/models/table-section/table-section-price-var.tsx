/**
 * Component variation
 *
 * Component type: tableSection
 * Variation: Price
 *
 */

import React from 'react'
import { Container, Wrapper } from '../../wheelroom/wheels/element/grid'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getSectionStyle, getWheel } from '../../themes/themes'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { Table } from '../../wheelroom/wheels/model/table/table'
import { tableSectionPreset } from '../../wheelroom/wheels/section/presets/table-section-preset'
import { TableSectionProps } from './table-section'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'

export const TableSectionPriceVar = (props: TableSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([tableSectionPreset, getSectionStyle('table').base])

  if (!props.tables) {
    return null
  }

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds}
      sectionProps={props}
    >
      <Wrapper wheel={{ ...wheel, style: wheel.style.wrapper }}>
        <Container wheel={{ ...wheel, style: wheel.style.container }}>
          <Table
            tables={props.tables}
            topicsOptions={props.topicOptions || {}}
            wheel={{ ...wheel, style: wheel.style.table }}
          />
        </Container>
      </Wrapper>
    </ScrollSpy>
  )
}
