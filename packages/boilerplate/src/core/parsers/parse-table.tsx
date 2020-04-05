import React from 'react'
import { NcssProps } from '../elements/types'
import { Any } from '../elements/any'

const replaceTable = (children: React.ReactNode) => {
  const result: any = []
  let row: any = []
  React.Children.forEach(children, (child: any) => {
    if (!child) {
      return
    }
    if (typeof child === 'string') {
      // Split pipes into cells
      const cells = child.split('|')
      const tableCells = cells
        .filter((cell) => typeof cell === 'string' && cell.length > 0)
        .map((cell, index) => <td key={index}>{cell}</td>)
      // Push row with cells
      row.push(tableCells)
    } else {
      if (child.type === 'br') {
        result.push(<tr>{row}</tr>)
        row = []
      }
    }
  })
  if (row.length > 0) {
    // Push final row
    result.push(<tr>{row}</tr>)
  }
  return result
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

export interface ParseTableProps {
  styleTree?: NcssProps
  children: any
}

export const ParseTable = (props: ParseTableProps) => {
  const styleTree = props.styleTree || {}
  const children = React.Children.toArray(props.children)
  // Check if we have a table by comparing the first character
  if (
    !children ||
    !Array.isArray(children) ||
    children.length === 0 ||
    typeof children[0] !== 'string' ||
    children[0][0] !== '|'
  ) {
    return props.children
  }

  return (
    <Any is="table" ncss={styleTree}>
      <tbody>{replaceTable(props.children)}</tbody>
    </Any>
  )
}
