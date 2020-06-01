/** @jsx jsx */
import { Action } from '../action/action'
import { ActionProps } from '../../../../models/action/action'
import { Any } from '../../element/any'
import { Dd, Dl, Dt, Th, Tr } from '../../element/self'
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { TableProps } from '../../../../models/table/table'
import { TableRow } from '../table-row/table-row'
import { TableRowProps } from '../../../../models/table-row/table-row'
import { TableWheelStyle } from './presets/table-preset'
import { TopicIcon } from '../topic/topic-icon'
import { Wheel } from '../../types'

export interface TableWheel extends Wheel {
  style: TableWheelStyle
}

export interface TableWheelProps {
  /** Styling wheel */
  wheel: TableWheel
  /** The topic to render */
  tables?: TableProps[]
}

export const Table = (props: TableWheelProps) => {
  const tables = props.tables
  if (!tables) {
    return null
  }

  return (
    <Any wheel={{ ...props.wheel, style: props.wheel.style }}>
      <Any
        is="table"
        wheel={{ ...props.wheel, style: props.wheel.style.table }}
      >
        <tbody>
          {tables.map((table: TableProps, index: number) => {
            const tableRows = table.tableRows || []
            let columnCount = 0
            tableRows.forEach((tableRow: TableRowProps) => {
              if (tableRow.topics && tableRow.topics.length > columnCount) {
                columnCount = tableRow.topics.length
              }
            })
            return (
              <Fragment key={index}>
                {table.heading && (
                  <Tr wheel={{ ...props.wheel, style: props.wheel.style.tr }}>
                    <Th
                      wheel={{ ...props.wheel, style: props.wheel.style.th }}
                      colspan={columnCount + 1}
                    >
                      {table.icon && (
                        <TopicIcon
                          icon={table.icon}
                          wheel={{
                            ...props.wheel,
                            style: props.wheel.style.icon,
                          }}
                        />
                      )}
                      <Dl
                        wheel={{
                          ...props.wheel,
                          style: props.wheel.style.dl,
                        }}
                      >
                        {table.heading && (
                          <Dt
                            wheel={{
                              ...props.wheel,
                              style: props.wheel.style.dt,
                            }}
                          >
                            {table.heading}
                          </Dt>
                        )}
                        {table.abstract && (
                          <Dd
                            wheel={{
                              ...props.wheel,
                              style: props.wheel.style.dd,
                            }}
                          >
                            {table.abstract?.abstract}
                          </Dd>
                        )}
                      </Dl>
                      {table.actions && (
                        <Any
                          is="div"
                          wheel={{
                            ...props.wheel,
                            style: props.wheel.style.actions,
                          }}
                        >
                          {table.actions.map(
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
                )}
                {table.tableRows?.map(
                  (tableRow: TableRowProps, index: number) => {
                    return (
                      <TableRow
                        key={index}
                        wheel={{ ...props.wheel, style: props.wheel.style.row }}
                        tableRow={tableRow}
                      />
                    )
                  }
                )}
              </Fragment>
            )
          })}
        </tbody>
      </Any>
    </Any>
  )
}
