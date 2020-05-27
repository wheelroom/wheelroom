/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../types'
import { TopicProps } from '../../../../models/topic'
import { ActionProps } from '../../../../models/action'
import { TopicRowWheelStyle } from './presets/topic-row-preset'
import { Dd, Dl, Dt, Th, Tr } from '../../element/self'
import { TopicRowCell } from './topic-row-cell'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { FeatherIcon } from '../../element/icon'
import { Action } from '../action/action'
import { Any } from '../../element/any'

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
  icon: string
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
        {props.icon && (
          <FeatherIcon
            icon={props.icon}
            wheel={{ ...props.wheel, style: props.wheel.style.icon }}
          />
        )}
        <Dl wheel={{ ...props.wheel, style: props.wheel.style.dl }}>
          <Dt wheel={{ ...props.wheel, style: props.wheel.style.dt }}>
            {props.heading}
          </Dt>
          <Dd wheel={{ ...props.wheel, style: props.wheel.style.dd }}>
            {props.abstract?.abstract}
          </Dd>
        </Dl>
        {props.actions && (
          <Any
            is="div"
            wheel={{ ...props.wheel, style: props.wheel.style.actions }}
          >
            {props.actions.map((action: ActionProps, index: number) => (
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
