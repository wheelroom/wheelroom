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
  for (const name of Object.keys(result)) {
    /** Skip recursive objects */
    if (
      typeof result[name] === 'object' &&
      result[name] !== null &&
      !Array.isArray(result[name])
    ) {
      continue
    }

    /** Apply facepaint media queries */
    const breakPointList = theme.breakpoints as []
    const mediaQuery = facepaint(
      breakPointList.map(breakPoint => `@media (min-width: ${breakPoint})`)
    )

    if (config.responsiveProperties.includes(name)) {
      const mediaQueries = mediaQuery({ [name]: result[name] })[0]
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
