/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../types'
import { TopicProps } from '../../../../models/topic'
import { ActionProps } from '../../../../models/action'
import { TopicRowWheelStyle } from './presets/topic-row-preset'
import { Dd, Dl, Dt, Th, Tr } from '../../element/self'
import { TopicRowCell } from './topic-row-cell'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { Action } from '../action/action'
import { Any } from '../../element/any'
import { TopicRowProps } from '../../../../models/topic-row'
import { TopicIcon } from '../topic/topic-icon'

export interface TopicRowWheel extends Wheel {
  style: TopicRowWheelStyle
}

export interface TopicRowWheelProps {
  /** Styling wheel */
  wheel: TopicRowWheel
  /** The topic rows to render */
  topicRow?: TopicRowProps
  /** Options that change topic display behaviour */
  pageSectionInfo: PageSectionInfo
}

export const TopicRow = (props: TopicRowWheelProps) => {
  const topicRow = props.topicRow
  if (!topicRow) {
    return null
  }
  const pageSectionInfo = props.pageSectionInfo

  // Based on topicCount calculate width of first and following cols:
  // 0 = 1
  // 1 = 2/3  1/3
  // 2 = 2/4  1/4  1/4
  // 3 = 2/5  1/5  1/5  1/5
  // 4 = 2/6  1/6  1/6  1/6  1/6
  // 5 = 2/7  1/7  1/7  1/7  1/7  1/7

  const topicCount = topicRow.topics.length
  const rowHeaderCellStyle = props.wheel.style.th
  const headerCellWidth = topicCount ? 2 / (topicCount + 2) : 1
  const dataCellWidth = topicCount ? 1 / (topicCount + 2) : 0

  if (!(rowHeaderCellStyle.ncss.w || rowHeaderCellStyle.ncss.width)) {
    rowHeaderCellStyle.ncss.w = headerCellWidth
  }
  if (topicRow.variation === 'header' || topicRow.variation === 'footer') {
    props.wheel.style.ncss.bg = 'skyblue'
  }

  return (
    <Tr wheel={{ ...props.wheel, style: props.wheel.style }}>
      <Th wheel={{ ...props.wheel, style: rowHeaderCellStyle }}>
        {topicRow.icon && (
          <TopicIcon
            icon={topicRow.icon}
            wheel={{ ...props.wheel, style: props.wheel.style.icon }}
          />
        )}
        <Dl wheel={{ ...props.wheel, style: props.wheel.style.dl }}>
          {topicRow.heading && (
            <Dt wheel={{ ...props.wheel, style: props.wheel.style.dt }}>
              {topicRow.heading}
            </Dt>
          )}
          {topicRow.abstract && (
            <Dd wheel={{ ...props.wheel, style: props.wheel.style.dd }}>
              {topicRow.abstract?.abstract}
            </Dd>
          )}
        </Dl>
        {topicRow.actions && (
          <Any
            is="div"
            wheel={{ ...props.wheel, style: props.wheel.style.actions }}
          >
            {topicRow.actions.map((action: ActionProps, index: number) => (
              <Action
                key={index}
                url={action.url}
                page={action.page}
                icon={action.icon}
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.actions.action,
                }}
                {...action}
              />
            ))}
          </Any>
        )}
      </Th>
      {topicRow.topics.map((topic: TopicProps, index: number) => {
        return (
          <TopicRowCell
            key={index}
            topic={topic}
            dataCellWidth={dataCellWidth}
            wheel={{ ...props.wheel, style: props.wheel.style.cell }}
            pageSectionInfo={pageSectionInfo}
            {...topic}
          />
        )
      })}
    </Tr>
  )
}
