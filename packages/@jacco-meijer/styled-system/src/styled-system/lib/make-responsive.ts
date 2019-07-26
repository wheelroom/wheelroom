import facepaint from 'facepaint'
import { config } from '../config/config'

/** Take the props object and add @media keys to it */
export const makeResponsive = (theme: any, props: any) => {
  /** Apply facepaint media queries */
  const mediaQuery = facepaint(
    theme.breakpoints.map(
      (breakPoint: any) => `@media (min-width: ${breakPoint})`
    )
  )
  for (const [name, value] of Object.entries(props)) {
    /** Skip recursive objects */
    if (typeof value === 'object' && !Array.isArray(value)) {
      continue
    }

    if (config.responsiveProperties.includes(name)) {
      const mediaQueries = mediaQuery({ [name]: value })[0]
      Object.entries(mediaQueries).forEach(([query, property]) => {
        // Merge in media query together with existing one
        if (query.startsWith('@media ')) {
          if (!props[query]) {
            props[query] = {}
          }
          Object.assign(props[query], property)
        } else {
          props[query] = property
        }
      })
    } else {
      if (props[name].length > 1) {
        console.log(
          `Warning: found unhandled responsive property '${name}'.
  Using first value only. Consider adding this property to the
  responsiveProperties config array`
        )
      }
      props[name] = props[name][0]
    }
  }
}
