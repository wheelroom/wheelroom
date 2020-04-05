/**
 *
 * Loop through all child nodes and parse all text nodes. When a '*' is found, a
 * <b> is inserted with a closing </b> at the second star.
 *
 * If a second start cannot be found, the text is added withouth the <b />
 * wrapper.
 *
 */

import React from 'react'
import { Any } from '../elements/any'
import { ParserProps } from './types'

const replaceTable = (children: React.ReactNode) => {
  let rows: any[] = []
  React.Children.forEach(children, (child) => {
    if (child && typeof child === 'string') {
      // Split into rows
      rows = child
        .split('\n')
        .filter((row) => row.length > 0)
        .reduce((result: any[], currentRow, index) => {
          result.push(
            <tr key={index}>
              {currentRow
                .split('|')
                .filter((cell) => cell.length > 0)
                .map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
            </tr>
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
    <Any is="table" ncss={props.ncss}>
      <tbody>{replaceTable(props.children)}</tbody>
    </Any>
  )
}
