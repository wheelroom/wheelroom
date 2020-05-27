/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../types'
import { TopicProps } from '../../../../models/topic'
import { Td } from '../../element/self'
import { TopicRowCellWheelStyle } from './presets/topic-row-cell-preset'
import { Topic } from '../topic/topic'
import { PageSectionInfo } from '../../../lib/get-page-section-info'

export interface TopicRowCellWheel extends Wheel {
  style: TopicRowCellWheelStyle
}

export interface TopicRowCellProps {
  /** Styling wheel */
  wheel: TopicRowCellWheel
  /** Options that change topic display behaviour */
  pageSectionInfo: PageSectionInfo
  /** Topic props */
  topic: TopicProps
  /** Percentage */
  dataCellWidth: number
}

export const TopicRowCell = (props: TopicRowCellProps) => {
  if (!props.topic) {
    return null
  }
  const pageSectionInfo = props.pageSectionInfo

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
        pageSectionInfo={pageSectionInfo}
      />
    </Td>
  )
}
