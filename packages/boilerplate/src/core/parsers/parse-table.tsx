import React from 'react'
import { Any } from '../elements/any'
import { ParseNewLines } from './parse-new-lines'
import { ParserProps } from './types'

const replaceTable = (children: React.ReactNode) => {
  let rows: any[] = []
  React.Children.forEach(children, (child) => {
    if (typeof child === 'string') {
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
    } else {
      // This is something else, most likely a <br /> element
      rows.push(child)
    }
  })
  return rows
}

/**
 *
 * Loop through all child nodes and parse all text nodes. When a '*' is found, a
 * <b> is inserted with a closing </b> at the second star.
 *
 * If a second start cannot be found, the text is added withouth the <b />
 * wrapper.
 *
 */

export const ParseTable = (props: ParserProps): JSX.Element => {
  const children = React.Children.toArray(props.children)
  // Check if we have a table by comparing the first character
  if (
    !children ||
    !Array.isArray(children) ||
    children.length === 0 ||
    typeof children[0] !== 'string' ||
    children[0][0] !== '|'
  ) {
    return (
      // Return the default parser if a table cannot be parsed
      <ParseNewLines is="p" ncss={props.ncss}>
        {props.children}
      </ParseNewLines>
    )
  }
  return (
    <Any is="table" ncss={props.ncss}>
      <tbody>{replaceTable(props.children)}</tbody>
    </Any>
  )
}
