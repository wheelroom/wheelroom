/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React, { Fragment } from 'react'
import { getWheel } from '../../themes/themes'
import { PageSectionProps } from '.'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'
import { TopicTable } from '../../wheelroom/wheels/model/topic-table/topic-table'
import { TopicTableProps } from '../topic-table'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'

export const PageSectionPriceTableVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = { ncss: {} }

  //console.log('Page Section Props:', props)
  console.log(pageSectionInfo)

  return (
    <Fragment>
      {props.topicTables.map((table: TopicTableProps, index: number) => {
        //console.log('topic table props:', table)
        return (
          <TopicTable
            key={index}
            topicCount={table.rows[0].topics.length + 1}
            rows={table.rows}
            wheel={wheel}
            {...table}
          />
        )
      })}
    </Fragment>
  )
}
