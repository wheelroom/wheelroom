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
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { tableSectionPreset } from '../../wheelroom/wheels/section/price-table/page-section-price-table-preset'
import { PageSectionProps } from '../page-section/page-section'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { Table } from '../table/table'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'

export const TableSectionTableVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([tableSectionPreset, getSectionStyle('table').base])

  if (!pageSectionInfo.hasTable) {
    return <NotImplemented pageSection={props} wheel={wheel} />
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
            wheel={{ ...wheel, style: wheel.style.table }}
            pageSectionInfo={pageSectionInfo}
            tables={props.tables}
          />
        </Container>
      </Wrapper>
    </ScrollSpy>
  )
}
