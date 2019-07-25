// @ts-ignore: ignore export = trouble
import facepaint from 'facepaint'
import { config } from './config'

const recursiveParse = (theme: any, props: any) => {
  const parsedProps: any = {}
  for (const propName of Object.keys(props)) {
    let name = propName

    /** Replace aliases */
    if (propName in config.propertyAliases) {
      config.propertyAliases[propName].forEach((alias: any) => {
        name = alias
      })
    }

    /** Ignore properties */
    if (config.ignoreProperties.includes(name)) {
      continue
    }

    /** If this is an object, start a new parse */
    if (typeof props[propName] === 'object') {
      parsedProps[name] = recursiveParse(theme, props[propName])
    }

    /**
     * Make sure everything is an array, to make processing further down the
     * line easier
     */
    let values = props[propName]
    if (!Array.isArray(values)) {
      values = [values]
    }

    /** From this point forward we process 'values' and store it in
     * 'parsedProps[name]'
     */

    /** Apply string maps */
    Object.entries(config.stringMaps).forEach(
      ([stringMapName, stringMapProperties]: [string, any]) => {
        if (stringMapProperties.includes(name)) {
          const newArray = [] as any
          values.forEach((propFromArray: any) => {
            let newValue = propFromArray
            if (typeof propFromArray === 'string') {
              newValue = theme[stringMapName][propFromArray] || propFromArray
            }
            newArray.push(newValue)
          })
          parsedProps[name] = newArray
        }
      }
    )
    /** Apply scales */
    Object.entries(config.scales).forEach(
      ([scaleName, scaleProperties]: [string, any]) => {
        if (scaleProperties.includes(name)) {
          const newArray = [] as any
          values.forEach((propFromArray: any) => {
            let newValue = propFromArray
            if (Number.isInteger(propFromArray)) {
              newValue = theme[scaleName][propFromArray]
            }
            newArray.push(newValue)
          })
          parsedProps[name] = newArray
        }
      }
    )
    /** Apply Units */
    Object.entries(config.units).forEach(
      ([unit, unitProperties]: [string, any]) => {
        if (unitProperties.includes(name)) {
          const newArray = [] as any
          values.forEach((propFromArray: any) => {
            let newValue = propFromArray
            if (typeof propFromArray === 'number') {
              if (unit === 'percent') {
                newValue *= 100
                newValue += '%'
              } else {
                newValue += unit
              }
            }
            newArray.push(newValue)
          })
          parsedProps[name] = newArray
        }
      }
    )
    /** Apply facepaint media queries */
    const mediaQuery = facepaint(
      theme.breakpoints.map(
        (breakPoint: any) => `@media (min-width: ${breakPoint})`
      )
    )
    if (config.responsiveProperties.includes(name)) {
      const responsiveProp = {} as any
      responsiveProp[name] = values
      const mediaQueries = mediaQuery(responsiveProp)[0]
      Object.entries(mediaQueries).forEach(([query, property]) => {
        // Merge in media query together with existing one
        if (query.startsWith('@media ')) {
          if (!parsedProps[query]) {
            parsedProps[query] = {}
          }
          Object.assign(parsedProps[query], property)
        } else {
          parsedProps[query] = property
        }
      })
    }

    /**
     * All properties that are still an array:
     *
     * - original prop is not an array. These should pass, they propably were
     *   converted by ensureArrays earlier
     * - original prop is an array. These were not handled properly as a
     *   responsive property, issue a warning here.
     */
    if (name in parsedProps && Array.isArray(parsedProps[name])) {
      if (Array.isArray(props[propName])) {
        console.log(
          `Warning: found unhandled responsive property '${propName}', using first
value only. Consider adding this property to the responsiveProperties config array`
        )
      }
      parsedProps[name] = parsedProps[name][0]
    }

    /** Check for unhandled props */
    if (!(name in parsedProps)) {
      console.log(
        `Warning: found unhandled property '${propName}'. Check styled-system/config.ts`
      )
    }
  }
}

export const parseStyles = (theme: any, props: any) => {
  return recursiveParse(theme, props)
}
