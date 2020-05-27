/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../types'
import { TopicProps } from '../../../../models/topic'
import { ActionProps } from '../../../../models/action'
import { TopicRowWheelStyle } from './presets/topic-row-preset'
import { Dd, Dl, Dt, Th, Tr } from '../../element/self'
import { TopicRowCell } from './topic-row-cell'
import { PageSectionInfo } from '../../../lib/get-page-section-info'

export interface TopicRowWheel extends Wheel {
  style: TopicRowWheelStyle
}

export interface TopicRowProps {
  /** Styling wheel */
  wheel: TopicRowWheel
  /** Options that change topic display behaviour */
  pageSectionInfo: PageSectionInfo
  /** Topic Row props */
  heading: string
  abstract: {
    abstract: string
  }
  icon: string | JSX.Element
  actions: ActionProps[]
  topics: TopicProps[]
}

export const TopicRow = (props: TopicRowProps) => {
  if (!props.topics) {
    return null
  }
  const pageSectionInfo = props.pageSectionInfo
  return (
    <Tr wheel={{ ...props.wheel, style: props.wheel.style }}>
      <Th wheel={{ ...props.wheel, style: props.wheel.style.th }}>
        <Dl wheel={{ ...props.wheel, style: props.wheel.style.dl }}>
          <Dt wheel={{ ...props.wheel, style: props.wheel.style.dt }}>
            {props.heading}
          </Dt>
          <Dd wheel={{ ...props.wheel, style: props.wheel.style.dd }}>
            {props.abstract?.abstract}
          </Dd>
        </Dl>
      </Th>
      {props.topics.map((topic: TopicProps, index: number) => {
        return (
          <TopicRowCell
            key={index}
            topic={topic}
            wheel={{ ...props.wheel, style: props.wheel.style.cell }}
            pageSectionInfo={pageSectionInfo}
            {...topic}
          />
        )
      })}
    </Tr>
  )
}
