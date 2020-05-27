/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { getSectionStyle, getWheel } from '../../themes/themes'
import { PageSectionProps } from '.'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'
import { TopicTable } from '../../wheelroom/wheels/model/topic-table/topic-table'
import { TopicTableProps } from '../topic-table'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { Container, Wrapper } from '../../wheelroom/wheels/element/grid'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { pageSectionPriceTablePreset } from '../../wheelroom/wheels/section/unicorn/presets/page-section-price-table-preset'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'

export const PageSectionPriceTableVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    pageSectionPriceTablePreset,
    getSectionStyle('priceTable').base,
  ])

  if (!pageSectionInfo.hasTopicTable) {
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
          {props.topicTables.map((table: TopicTableProps, index: number) => {
            return (
              <TopicTable
                key={index}
                topicCount={table.rows[0].topics.length + 1}
                wheel={{ ...wheel, style: wheel.style.table }}
                pageSectionInfo={pageSectionInfo}
                rows={table.rows}
                {...table}
              />
            )
          })}
        </Container>
      </Wrapper>
    </ScrollSpy>
  )
}
