/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Td, Wheel } from '@wheelroom/core'
import { Topic, TopicModel, TopicOptions } from '@wheelroom/wheel-topic'
import { TableRowNcssTree } from './ncss-tree'
import { TableRowData } from './data'

export interface TableRowCellWheel extends Wheel {
  style: TableRowNcssTree
}

export interface TableRowCellProps {
  /** Styling wheel */
  wheel: TableRowCellWheel
  /** Data wheel */
  data: TableRowData
  /** Topic props */
  topic: TopicModel
  /** Percentage */
  dataCellWidth: number
  /** Topic options */
  topicOptions: TopicOptions
}

export const TableRowCell = (props: TableRowCellProps) => {
  if (!props.topic && !props.data) {
    return null
  }

  const dataCellStyle = props.wheel.style.td

  if (!(dataCellStyle.ncss.w || dataCellStyle.ncss.width)) {
    dataCellStyle.ncss.w = props.dataCellWidth
  }

  return (
    <Td wheel={{ ...props.wheel, style: dataCellStyle }}>
      <Topic
        data={props.data.topic}
        topic={props.topic}
        topicOptions={props.topicOptions}
        useHeadingElement="p"
        wheel={{ ...props.wheel, style: props.wheel.style.topic }}
      />
    </Td>
  )
}
