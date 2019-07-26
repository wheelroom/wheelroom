import facepaint from 'facepaint'
import { config } from '../config/config'
import { Theme } from '../types/theme'

/**
 * Take the props object and add @media keys to it, returns new object
 * responsiveProps
 */
interface MakeResponsive {
  theme: Theme
  result: any
}
export const makeResponsive = ({ theme, result }: MakeResponsive) => {
  /** Apply facepaint media queries */
  const breakPointList = theme.breakpoints as []
  const mediaQuery = facepaint(
    breakPointList.map(breakPoint => `@media (min-width: ${breakPoint})`)
  )
  for (const [name, value] of Object.entries(result)) {
    /** Skip recursive objects */
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      continue
    }

    if (config.responsiveProperties.includes(name)) {
      const mediaQueries = mediaQuery({ [name]: value })[0]
      Object.entries(mediaQueries).forEach(([query, property]) => {
        // Merge in media query together with existing one
        if (query.startsWith('@media ')) {
          if (!result[query]) {
            result[query] = {}
          }
          Object.assign(result[query], property)
        } else {
          result[query] = property
        }
      })
    } else {
      if (result[name].length > 1 && process.env.NODE_ENV !== 'test') {
        console.log(
          `Warning: found unhandled responsive property '${name}'.
  Using first value only. Consider adding this property to the
  responsiveProperties config array`
        )
      }
      result[name] = result[name][0]
    }
  }
}
