/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  Action,
  ActionModel,
  Any,
  Dd,
  Dl,
  Dt,
  Icon,
  Th,
  Tr,
  Wheel,
  getNcssSwitch,
} from '@wheelroom/core'
import { TopicOptions, TopicModel } from '@wheelroom/wheel-topic'
import { TableRowModel } from './model'
import { TableRowNcssTree } from './ncss-tree'
import { TableRowCell } from './table-row-cell'

export interface TableRowWheel extends Wheel {
  style: TableRowNcssTree
}

export interface TableRowProps {
  /** Styling wheel */
  wheel: TableRowWheel
  /** The maximum number of topics found on any row */
  maxRowTopics: number
  /** The topic rows to render */
  tableRow?: TableRowModel
  /** Topic options */
  topicOptions: TopicOptions
}

export const TableRow = (props: TableRowProps) => {
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

  const rowHeaderCellStyle = props.wheel.style.th
  const headerCellWidth = props.maxRowTopics ? 2 / (props.maxRowTopics + 2) : 1
  const dataCellWidth = props.maxRowTopics ? 1 / (props.maxRowTopics + 2) : 0

  if (!(rowHeaderCellStyle.ncss.w || rowHeaderCellStyle.ncss.width)) {
    rowHeaderCellStyle.ncss.w = headerCellWidth
  }

  const switchVariable = tableRow.variation
    ? tableRow.variation + 'Variation'
    : 'bodyVariation'

  let colSpan = {}

  if (tableRow.heading) {
    colSpan = { colspan: props.maxRowTopics + 1 }
  }

  return (
    <Tr
      wheel={{
        ...props.wheel,
        style: getNcssSwitch(props.wheel.style, switchVariable),
      }}
    >
      <Th {...colSpan} wheel={{ ...props.wheel, style: rowHeaderCellStyle }}>
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
            {tableRow.actions.map((action: ActionModel, index: number) => (
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
      {(tableRow.topics || []).map((topic: TopicModel, index: number) => {
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
