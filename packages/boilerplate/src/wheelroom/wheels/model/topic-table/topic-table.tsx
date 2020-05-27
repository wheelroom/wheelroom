/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Dd, Dl, Dt, Table, Th, Tr } from '../../element/self'
import { Wheel } from '../../types'
import { TopicRow, TopicRowProps } from '../topic-row/topic-row'
import { ActionProps } from '../../../../models/action'
import { TopicTableWheelStyle } from './presets/topic-table-preset'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { FeatherIcon } from '../../element/icon'
import { Action } from '../action/action'
import { Any } from '../../element/any'

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
  icon?: string
  actions?: ActionProps[]
  rows?: TopicRowProps[]
}

export const TopicTable = (props: TopicTableProps) => {
  if (!props.rows) {
    return null
  }
  const pageSectionInfo = props.pageSectionInfo
  return (
    <Any wheel={{ ...props.wheel, style: props.wheel.style }}>
      <Table wheel={{ ...props.wheel, style: props.wheel.style.table }}>
        <tbody>
          <Tr wheel={{ ...props.wheel, style: props.wheel.style.tr }}>
            <Th
              wheel={{ ...props.wheel, style: props.wheel.style.th }}
              colspan={props.topicCount}
            >
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
    </Any>
  )
}
