/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Td } from '../../../src-core/elements/self'
import { TopicOptions, TopicModel, Topic } from '../../../src-topic-wheel'

import { Wheel } from '../../../src-core'
import { TableRowNcssTree } from './ncss-tree'

export interface TableRowCellWheel extends Wheel {
  style: TableRowNcssTree
}

export interface TableRowCellProps {
  /** Styling wheel */
  wheel: TableRowCellWheel
  /** Topic props */
  topic: TopicModel
  /** Percentage */
  dataCellWidth: number
  /** Topic options */
  topicOptions: TopicOptions
}

export const TableRowCell = (props: TableRowCellProps) => {
  if (!props.topic) {
    return null
  }

  const dataCellStyle = props.wheel.style.td

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