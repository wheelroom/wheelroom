import facepaint from 'facepaint'
import { ResponsiveProp } from '../types/props'
import { StyledSystemTheme } from '../types/styled-system-theme'

/**
 * Take the props object and add @media keys to it, returns new object
 * responsiveProps
 */
interface GetResponsiveProps {
  theme: StyledSystemTheme
  propName: string
  propValue: ResponsiveProp
}
export const getResponsiveProp = ({
  theme,
  propName,
  propValue,
}: GetResponsiveProps) => {
  const breakPointList = theme.breakpoints as []
  const mediaQuery = facepaint(
    breakPointList.map((breakPoint) => `@media (min-width: ${breakPoint})`)
  )
  return mediaQuery({ [propName]: propValue })[0]
}

export const mergeInMediaQuery = ({
  result,
  propWithMediaQueries,
}: {
  result: any
  propWithMediaQueries: any
}) => {
  if (!propWithMediaQueries) {
    return
  }
  Object.entries(propWithMediaQueries).forEach(([query, property]) => {
    if (query.startsWith('@media ')) {
      if (!result[query]) {
        result[query] = {}
      }
      Object.assign(result[query], property)
    } else {
      result[query] = property
    }
  })
}
