import React from 'react'
import { Paragraph } from '../elements/paragraph'
import { ParserProps, ParserFunction } from './types'

const replaceNewlines = (children: React.ReactNode) => {
  const result: any = []
  React.Children.forEach(children, (child: any) => {
    if (!child) {
      return
    }
    if (typeof child !== 'string') {
      return
    }
    result.push(
      child.split('\n').reduce((children: any, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    )
  })

  return result
}

/**
 *
 * Replaces newline \n characters with <br /> elements
 *
 */

export const ParseNewLines = (props: ParserProps): JSX.Element => {
  return (
    <Paragraph is={props.is} ncss={props.ncss}>
      {replaceNewlines(props.children)}
    </Paragraph>
  )
}
