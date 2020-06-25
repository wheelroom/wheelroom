/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  Action,
  ActionModelProps,
  Any,
  Dd,
  Dl,
  Dt,
  Icon,
  Th,
  Tr,
  Wheel,
} from '../../../src-core'
import { TopicOptions, TopicModelProps } from '../../../src-topic-wheel'
import { getNcssSwitch } from '../../../src-core/lib/ncss'
import { TableRowProps } from './model-types'
import { TableRowModelStyle } from './model-style-types'
import { TableRowCell } from './table-row-cell'

export interface TableRowWheel extends Wheel {
  style: TableRowModelStyle
}

export interface TableRowWheelProps {
  /** Styling wheel */
  wheel: TableRowWheel
  /** The topic rows to render */
  tableRow?: TableRowProps
  /** Topic options */
  topicOptions: TopicOptions
}

export const TableRow = (props: TableRowWheelProps) => {
  const tableRow = props.tableRow
  if (!tableRow) {
    return null
  }

  // Based on tableCount calculate width of first and following cols:
  // 0 = 1
  // 1 = 2/3  1/3
  // 2 = 2/4  1/4  1/4
  // 3 = 2/5  1/5  1/5  1/5
  // 4 = 2/6  1/6  1/6  1/6  1/6
  // 5 = 2/7  1/7  1/7  1/7  1/7  1/7

  const topicCount = (tableRow.topics && tableRow.topics.length) || 0
  const rowHeaderCellStyle = props.wheel.style.th
  const headerCellWidth = topicCount ? 2 / (topicCount + 2) : 1
  const dataCellWidth = topicCount ? 1 / (topicCount + 2) : 0

  if (!(rowHeaderCellStyle.ncss.w || rowHeaderCellStyle.ncss.width)) {
    rowHeaderCellStyle.ncss.w = headerCellWidth
  }

  let tableRowStyle
  switch (tableRow.variation) {
    case 'header':
      tableRowStyle = getNcssSwitch(props.wheel.style, 'trHeader')
      break
    case 'footer':
      tableRowStyle = getNcssSwitch(props.wheel.style, 'trFooter')
      break
    default:
      tableRowStyle = getNcssSwitch(props.wheel.style, 'trBody')
      break
  }

  return (
    <Tr wheel={{ ...props.wheel, style: tableRowStyle }}>
      <Th wheel={{ ...props.wheel, style: rowHeaderCellStyle }}>
        {tableRow.icon && (
          <Icon
            icon={tableRow.icon}
            wheel={{ ...props.wheel, style: props.wheel.style.icon }}
          />
        )}
        <Dl wheel={{ ...props.wheel, style: props.wheel.style.dl }}>
          {tableRow.heading && (
            <Dt wheel={{ ...props.wheel, style: props.wheel.style.dt }}>
              {tableRow.heading}
            </Dt>
          )}
          {tableRow.abstract && (
            <Dd wheel={{ ...props.wheel, style: props.wheel.style.dd }}>
              {tableRow.abstract?.abstract}
            </Dd>
          )}
        </Dl>
        {tableRow.actions && (
          <Any
            is="div"
            role="group"
            wheel={{ ...props.wheel, style: props.wheel.style.actionGroup }}
          >
            {tableRow.actions.map((action: ActionModelProps, index: number) => (
              <Action
                key={index}
                url={action.url}
                page={action.page}
                icon={action.icon}
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.action,
                }}
                {...action}
              />
            ))}
          </Any>
        )}
      </Th>
      {(tableRow.topics || []).map((topic: TopicModelProps, index: number) => {
        return (
          <TableRowCell
            dataCellWidth={dataCellWidth}
            key={index}
            topic={topic}
            topicOptions={props.topicOptions}
            wheel={props.wheel}
          />
        )
      })}
    </Tr>
  )
}
