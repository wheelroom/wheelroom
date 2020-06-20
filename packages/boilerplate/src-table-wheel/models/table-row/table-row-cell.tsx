/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../../src-core'
import { TopicProps, Topic } from '../../../src-topic-wheel'
import { TopicOptions } from '../../../src-topic-wheel/lib/get-topic-options'
import { Td } from '../../../src-core/elements/self/self'
import { TableRowCellWheelStyle } from './table-row-cell-preset'

export interface TableRowCellWheel extends Wheel {
  style: TableRowCellWheelStyle
}

export interface TableRowCellProps {
  /** Styling wheel */
  wheel: TableRowCellWheel
  /** Topic props */
  topic: TopicProps
  /** Percentage */
  dataCellWidth: number
  /** Topic options */
  topicOptions: TopicOptions
}

export const TableRowCell = (props: TableRowCellProps) => {
  if (!props.topic) {
    return null
  }

  const dataCellStyle = props.wheel.style

  if (!(dataCellStyle.ncss.w || dataCellStyle.ncss.width)) {
    dataCellStyle.ncss.w = props.dataCellWidth
  }

  return (
    <Td wheel={{ ...props.wheel, style: dataCellStyle }}>
      <Topic
        topic={props.topic}
        topicOptions={props.topicOptions}
        useHeadingElement="p"
        wheel={{ ...props.wheel, style: props.wheel.style.topic }}
      />
    </Td>
  )
}
