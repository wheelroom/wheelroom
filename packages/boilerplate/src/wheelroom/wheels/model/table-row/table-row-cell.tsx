/** @jsx jsx */
import { jsx } from '@emotion/core'
import { TableRowCellWheelStyle } from './presets/table-row-cell-preset'
import { Td } from '../../element/self'
import { Topic } from '../topic/topic'
import { TopicProps } from '../../../../models/topic/topic'
import { Wheel } from '../../types'

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
        wheel={{ ...props.wheel, style: props.wheel.style.topic }}
        useHeadingElement="p"
      />
    </Td>
  )
}
