import React from 'react'
import { Paragraph } from '../elements/paragraph'
import { ParserProps } from './types'

const replaceStars = (children: React.ReactNode) => {
  const result: any = []
  React.Children.forEach(children, (child) => {
    if (typeof child === 'string') {
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
    } else {
      // This is something else, most likely a <br /> element
      result.push(child)
    }
  })
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

export const ParseStarsToBold = (props: ParserProps): JSX.Element => {
  return (
    <Paragraph is="p" ncss={props.ncss}>
      {replaceStars(props.children)}
    </Paragraph>
  )
}
