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
}

export const TopicRowCell = (props: TopicRowCellProps) => {
  if (!props.topic) {
    return null
  }
  const pageSectionInfo = props.pageSectionInfo
  return (
    <Td wheel={{ ...props.wheel, style: props.wheel.style }}>
      <Topic
        topic={props.topic}
        wheel={{ ...props.wheel, style: props.wheel.style.topic }}
        useHeadingElement="p"
        pageSectionInfo={pageSectionInfo}
      />
    </Td>
  )
}
