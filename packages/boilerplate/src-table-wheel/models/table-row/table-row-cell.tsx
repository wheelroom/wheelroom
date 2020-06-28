/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Td } from '../../../src-core/elements/self/self'
import { TopicOptions, TopicModelProps, Topic } from '../../../src-topic-wheel'

import { Wheel } from '../../../src-core'
import { TableRowModelNcssTree } from './model-ncss-tree'

export interface TableRowCellWheel extends Wheel {
  style: TableRowModelNcssTree
}

export interface TableRowCellProps {
  /** Styling wheel */
  wheel: TableRowCellWheel
  /** Topic props */
  topic: TopicModelProps
  /** Percentage */
  dataCellWidth: number
  /** Topic options */
  topicOptions: TopicOptions
}

export const TableRowCell = (props: TableRowCellProps) => {
  if (!props.topic) {
    return null
  }

  const dataCellStyle = props.wheel.style.cell

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
