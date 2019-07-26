import facepaint from 'facepaint'
import { ResponsiveProp } from '../types/props'
import { Theme } from '../types/theme'

/**
 * Take the props object and add @media keys to it, returns new object
 * responsiveProps
 */
interface GetResponsiveProps {
  theme: Theme
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
    breakPointList.map(breakPoint => `@media (min-width: ${breakPoint})`)
  )
  return mediaQuery({ [propName]: propValue })[0]
}

export const mergeInMediaQuery = ({
  props,
  mediaQueries,
}: {
  props: any
  mediaQueries: any
}) => {
  Object.entries(mediaQueries).forEach(([query, property]) => {
    if (query.startsWith('@media ')) {
      if (!props[query]) {
        props[query] = {}
      }
      Object.assign(props[query], property)
    } else {
      props[query] = property
    }
  })
}
