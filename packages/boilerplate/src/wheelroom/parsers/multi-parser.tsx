/**
 *
 * Combine multiple parsers
 *
 */

import React from 'react'
import { ParserProps } from './types'
import { validTable, ParseTable } from './parse-table'
import { ParseNewLines } from './parse-new-lines'

export const MultiParser = (props: ParserProps): JSX.Element => {
  if (validTable(props.children)) {
    return (
      <ParseTable
        is={props.is}
        wheel={{ ...props.wheel, style: props.wheel.style }}
      >
        {props.children}
      </ParseTable>
    )
  }
  return (
    <ParseNewLines
      is={props.is}
      wheel={{ ...props.wheel, style: props.wheel.style }}
    >
      {props.children}
    </ParseNewLines>
  )
}
