/**
 *
 * Loop through child nodes and parse text nodes. Replaces newline \n characters
 * with <br /> elements
 *
 */

import React from 'react'
import { ParserProps } from './types'
import { Any } from '../wheels/element/any'

const replaceNewlines = (children: React.ReactNode) => {
  const result: any = []
  React.Children.forEach(children, (child: any) => {
    if (child && typeof child === 'string') {
      result.push(
        child.split('\n').reduce((children: any, textSegment, index) => {
          return [...children, index > 0 && <br key={index} />, textSegment]
        }, [])
      )
    } else if (child) {
      // This is something else, most likely a <br /> element
      result.push(child)
    }
  })

  return result
}

export const ParseNewLines = (props: ParserProps): JSX.Element => {
  return (
    <Any is={props.is} polyPreset={true} wheel={props.wheel}>
      {replaceNewlines(props.children)}
    </Any>
  )
}
