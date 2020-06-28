/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel, Box, Table as TableElement } from '@wheelroom/core'
import { TopicOptions } from '@wheelroom/wheel-topic'
import { TableRow } from '../table-row/table-row'
import { TableRowModel } from '../table-row/model'
import { TableRowNcssTree } from '../table-row/ncss-tree'

export interface TableWheel extends Wheel {
  style: TableRowNcssTree
}

export interface TableProps {
  /** Styling wheel */
  wheel: TableWheel
  /** The topic to render */
  tableRows?: TableRowModel[]
  /** Topic options */
  topicOptions: TopicOptions
  /** Accept max number of topics, ignore all others */
  maxTopics?: number
}

export const Table = (props: TableProps) => {
  const tableRows = props.tableRows
  if (!tableRows) {
    return null
  }
  let maxRowTopics = 0
  tableRows.map((tableRow: TableRowModel) => {
    if (
      tableRow.topics &&
      Array.isArray(tableRow.topics) &&
      tableRow.topics.length > maxRowTopics
    ) {
      maxRowTopics = tableRow.topics.length
    }
  })

  return (
    <Box wheel={{ ...props.wheel, style: props.wheel.style }}>
      <TableElement
        wheel={{ ...props.wheel, style: props.wheel.style.tableElement }}
      >
        <tbody>
          {tableRows.map((tableRow: TableRowModel, index: number) => {
            return (
              <TableRow
                key={index}
                maxRowTopics={maxRowTopics}
                tableRow={tableRow}
                topicOptions={props.topicOptions}
                wheel={props.wheel}
              />
            )
          })}
        </tbody>
      </TableElement>
    </Box>
  )
}
