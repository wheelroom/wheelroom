/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel, Box, Table as TableElement } from '../../../src-core'
import { TopicOptions } from '../../../src-topic-wheel'
import { TableRow } from '../table-row/table-row'
import { TableRowModelProps } from '../table-row/model-props'
import { TableRowModelNcssTree } from '../table-row/model-ncss-tree'

export interface TableWheel extends Wheel {
  style: TableRowModelNcssTree
}

export interface TableProps {
  /** Styling wheel */
  wheel: TableWheel
  /** The topic to render */
  tableRows?: TableRowModelProps[]
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
  return (
    <Box wheel={{ ...props.wheel, style: props.wheel.style }}>
      <TableElement
        wheel={{ ...props.wheel, style: props.wheel.style.tableElement }}
      >
        <tbody>
          {tableRows?.map((tableRow: TableRowModelProps, index: number) => {
            return (
              <TableRow
                key={index}
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
