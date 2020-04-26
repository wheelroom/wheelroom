/**
 *
 * Loop through child nodes and parse text nodes.
 *
 * New lines become table rows.
 *
 * Pipe characters define table cells.
 *
 */

import React from 'react'
import { ParserProps } from './types'
import { Table, Tr, Td } from '../wheels/element/self'
import { Wheel } from '../wheels/types'

const replaceTable = (children: React.ReactNode, wheel: Wheel) => {
  let rows: any[] = []
  React.Children.forEach(children, (child) => {
    if (child && typeof child === 'string') {
      // Split into rows
      rows = child
        .split('\n')
        .filter((row) => row.length > 0)
        .reduce((result: any[], currentRow, index) => {
          result.push(
            <Tr key={index} wheel={wheel}>
              {currentRow
                .split('|')
                .filter((cell) => cell.length > 0)
                .map((cell, index) => (
                  <Td key={index} wheel={wheel}>
                    {cell}
                  </Td>
                ))}
            </Tr>
          )
          return result
        }, [])
    } else if (child) {
      // This is something else, most likely a <br /> element
      rows.push(child)
    }
  })
  return rows
}

export const validTable = (children: React.ReactNode) => {
  const childArray = React.Children.toArray(children)
  return (
    childArray &&
    Array.isArray(childArray) &&
    childArray.length > 0 &&
    typeof childArray[0] === 'string' &&
    childArray[0][0] === '|'
  )
}

export const ParseTable = (props: ParserProps): JSX.Element | null => {
  return (
    <Table wheel={props.wheel}>
      <tbody>{replaceTable(props.children, props.wheel)}</tbody>
    </Table>
  )
}
