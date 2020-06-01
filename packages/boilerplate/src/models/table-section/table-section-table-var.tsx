/**
 * Component variation
 *
 * Component type: tableSection
 * Variation: Table
 *
 */

import React from 'react'
import { Container, Wrapper } from '../../wheelroom/wheels/element/grid'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { getSectionStyle, getWheel } from '../../themes/themes'
import { pageSectionPriceTablePreset } from '../../wheelroom/wheels/section/price-table/page-section-price-table-preset'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { Table } from '../../wheelroom/wheels/model/table/table'
import { TableSectionProps } from './table-section'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'

export const TableSectionTableVar = (props: TableSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    pageSectionPriceTablePreset,
    getSectionStyle('priceTable').base,
  ])

  if (!pageSectionInfo.hasTopicTable) {
    return null
  }
  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds}
      pageSectionProps={props}
    >
      <Wrapper wheel={{ ...wheel, style: wheel.style.wrapper }}>
        <Container wheel={{ ...wheel, style: wheel.style.container }}>
          <Table
            wheel={{ ...wheel, style: wheel.style.topicTable }}
            tables={props.tables}
          />
        </Container>
      </Wrapper>
    </ScrollSpy>
  )
}
