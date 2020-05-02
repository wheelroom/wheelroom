/**
 *
 * Loop through child nodes and parse text nodes. When a '*' is found, a <b> is
 * inserted with a closing </b> for the second star.
 *
 * If a second start cannot be found, the text is added withouth the <b />
 * wrapper.
 *
 */

import React from 'react'
import { ParserProps } from './types'
import { Any } from '../wheels/element/any'

const replaceStars = (children: React.ReactNode) => {
  const result: any = []
  React.Children.forEach(children, (child) => {
    if (child && typeof child === 'string') {
      const findStar = child.split(/\*(.*)/)
      const hasStar = findStar.length > 1
      if (!hasStar) {
        result.push(findStar[0])
        return
      }
      const findSecondStar = findStar[1].split(/\*(.*)/)
      const hasSecondStar = findSecondStar.length > 1
      if (!hasSecondStar) {
        result.push(...findStar)
        return
      }
      result.push(findStar[0], <b key={findStar[0]}>{findSecondStar[0]}</b>)
      const remaining = replaceStars(findSecondStar[1])
      result.push(...remaining)
    } else if (child) {
      // This is something else, most likely a <br /> element
      result.push(child)
    }
  })
  return result
}

export const hasStar = (children: React.ReactNode) => {
  const childArray = React.Children.toArray(children)
  return (
    childArray &&
    Array.isArray(childArray) &&
    childArray.length > 0 &&
    typeof childArray[0] === 'string' &&
    childArray[0].indexOf('*') >= 0
  )
}

export const ParseStarsToBold = (props: ParserProps): JSX.Element => {
  return (
    <Any is={props.is} polyPreset={true} wheel={props.wheel}>
      {replaceStars(props.children)}
    </Any>
  )
}
