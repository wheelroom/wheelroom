import React from 'react'

export interface ParseStarsToBoldProps {
  children: any
}

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

export const ParseStarsToBold = (props: ParseStarsToBoldProps) => {
  return replaceStars(props.children)
}
