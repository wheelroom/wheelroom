/** @jsx jsx */
import { jsx } from '@emotion/core'
import { NcssProps, Wheel } from '../../types'
import { TopicRow, TopicRowProps } from '../topic-row/topic-row'
import { ActionProps } from '../../../../models/action'

export interface TopicTableWheelStyle extends Wheel {
  ncss: NcssProps
}

export interface TopicTableProps {
  /** Styling wheel */
  wheel: Wheel
  /** Get amount of topics */
  topicCount: number
  /** Topic Table props */
  heading?: string
  abstract?: {
    abstract: string
  }
  icon?: string | JSX.Element
  actions?: ActionProps[]
  rows?: TopicRowProps[]
}

export const TopicTable = (props: TopicTableProps) => {
  if (!props.rows) {
    return null
  }

  return (
    <table>
      <tbody>
        <tr>
          <th colSpan={props.topicCount}>
            <dl>
              <dt>{props.heading}</dt>
              <dd>{props.abstract?.abstract}</dd>
            </dl>
          </th>
        </tr>
        {props.rows.map((row: TopicRowProps, index: number) => {
          return <TopicRow key={index} wheel={props.wheel} {...row} />
        })}
      </tbody>
    </table>
  )
}
