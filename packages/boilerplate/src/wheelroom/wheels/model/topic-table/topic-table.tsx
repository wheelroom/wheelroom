/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Dd, Dl, Dt, Table, Th, Tr } from '../../element/self'
import { Wheel } from '../../types'
import { TopicRow, TopicRowProps } from '../topic-row/topic-row'
import { ActionProps } from '../../../../models/action'
import { TopicTableWheelStyle } from './presets/topic-table-preset'
import { PageSectionInfo } from '../../../lib/get-page-section-info'

export interface TopicTableWheel extends Wheel {
  style: TopicTableWheelStyle
}

export interface TopicTableProps {
  /** Styling wheel */
  wheel: TopicTableWheel
  /** Options that change topic display behaviour */
  pageSectionInfo: PageSectionInfo
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
  const pageSectionInfo = props.pageSectionInfo
  return (
    <Table wheel={{ ...props.wheel, style: props.wheel.style }}>
      <tbody>
        <Tr wheel={{ ...props.wheel, style: props.wheel.style.tr }}>
          <Th
            wheel={{ ...props.wheel, style: props.wheel.style.th }}
            colspan={props.topicCount}
          >
            <Dl wheel={{ ...props.wheel, style: props.wheel.style.dl }}>
              <Dt wheel={{ ...props.wheel, style: props.wheel.style.dt }}>
                {props.heading}
              </Dt>
              <Dd wheel={{ ...props.wheel, style: props.wheel.style.dd }}>
                {props.abstract?.abstract}
              </Dd>
            </Dl>
          </Th>
        </Tr>
        {props.rows.map((row: TopicRowProps, index: number) => {
          return (
            <TopicRow
              key={index}
              wheel={{ ...props.wheel, style: props.wheel.style.row }}
              pageSectionInfo={pageSectionInfo}
              {...row}
            />
          )
        })}
      </tbody>
    </Table>
  )
}
