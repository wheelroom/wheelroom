/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment } from 'react'
import { Dd, Dl, Dt, Table, Th, Tr } from '../../element/self'
import { Wheel } from '../../types'
import { TopicRow } from '../topic-row/topic-row'
import { ActionProps } from '../../../../models/action'
import { TopicTableWheelStyle } from './presets/topic-table-preset'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { Action } from '../action/action'
import { Any } from '../../element/any'
import { TopicTableProps } from '../../../../models/topic-table'
import { TopicIcon } from '../topic/topic-icon'
import { TopicRowProps } from '../../../../models/topic-row/topic-row'

export interface TopicTableWheel extends Wheel {
  style: TopicTableWheelStyle
}

export interface TopicTableWheelProps {
  /** Styling wheel */
  wheel: TopicTableWheel
  /** The topic to render */
  topicTables?: TopicTableProps[]
  /** Options that change topic display behaviour */
  pageSectionInfo: PageSectionInfo
}

export const TopicTable = (props: TopicTableWheelProps) => {
  const topicTables = props.topicTables
  if (!topicTables) {
    return null
  }
  const pageSectionInfo = props.pageSectionInfo

  return (
    <Any wheel={{ ...props.wheel, style: props.wheel.style }}>
      <Table wheel={{ ...props.wheel, style: props.wheel.style.table }}>
        <tbody>
          {topicTables.map((topicTable: TopicTableProps, index: number) => {
            const rows = topicTable.rows || []
            let columnCount = 0
            rows.forEach((row: TopicRowProps) => {
              if (row.topics && row.topics.length > columnCount) {
                columnCount = row.topics.length
              }
            })

            return (
              <Fragment key={index}>
                <Tr wheel={{ ...props.wheel, style: props.wheel.style.tr }}>
                  <Th
                    wheel={{ ...props.wheel, style: props.wheel.style.th }}
                    colspan={columnCount + 1}
                  >
                    {topicTable.icon && (
                      <TopicIcon
                        icon={topicTable.icon}
                        wheel={{
                          ...props.wheel,
                          style: props.wheel.style.icon,
                        }}
                      />
                    )}
                    <Dl wheel={{ ...props.wheel, style: props.wheel.style.dl }}>
                      <Dt
                        wheel={{ ...props.wheel, style: props.wheel.style.dt }}
                      >
                        {topicTable.heading}
                      </Dt>
                      <Dd
                        wheel={{ ...props.wheel, style: props.wheel.style.dd }}
                      >
                        {topicTable.abstract?.abstract}
                      </Dd>
                    </Dl>
                    {topicTable.actions && (
                      <Any
                        is="div"
                        wheel={{
                          ...props.wheel,
                          style: props.wheel.style.actions,
                        }}
                      >
                        {topicTable.actions.map(
                          (action: ActionProps, index: number) => (
                            <Action
                              key={index}
                              url={action.url}
                              page={action.page}
                              icon={action.icon}
                              wheel={{
                                ...props.wheel,
                                style: props.wheel.style.actions.action,
                              }}
                              {...action}
                            />
                          )
                        )}
                      </Any>
                    )}
                  </Th>
                </Tr>
                {topicTable.rows.map(
                  (topicRow: TopicRowProps, index: number) => {
                    return (
                      <TopicRow
                        key={index}
                        wheel={{ ...props.wheel, style: props.wheel.style.row }}
                        pageSectionInfo={pageSectionInfo}
                        topicRow={topicRow}
                      />
                    )
                  }
                )}
              </Fragment>
            )
          })}
        </tbody>
      </Table>
    </Any>
  )
}
