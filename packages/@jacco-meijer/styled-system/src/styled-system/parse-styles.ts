// @ts-ignore: ignore export = trouble
import facepaint from 'facepaint'
import { config } from './config'

const removeIgnoredProperties = (cssProps: any) => {
  Object.keys(cssProps).forEach(propName => {
    if (config.ignoreProperties.includes(propName)) {
      delete cssProps[propName]
    }
  })
}

const replaceAliases = (cssProps: any) => {
  Object.keys(cssProps).forEach(propName => {
    if (propName in config.propertyAliases) {
      config.propertyAliases[propName].forEach((alias: any) => {
        cssProps[alias] = cssProps[propName]
      })
      delete cssProps[propName]
    }
  })
}

/**
 * Make sure everything is an array, to make processing further down the line
 * easier
 */
const ensureArrays = (cssProps: any) => {
  Object.keys(cssProps).forEach(propName => {
    if (!Array.isArray(cssProps[propName])) {
      cssProps[propName] = [cssProps[propName]]
    }
  })
}

const applyStringMaps = (cssProps: any, theme: any) => {
  Object.keys(cssProps).forEach(propName => {
    Object.entries(config.stringMaps).forEach(
      ([stringMapName, stringMapProperties]: [string, any]) => {
        if (stringMapProperties.includes(propName)) {
          const newArray = [] as any
          cssProps[propName].forEach((propFromArray: any) => {
            let newValue = propFromArray
            if (typeof propFromArray === 'string') {
              newValue = theme[stringMapName][propFromArray] || propFromArray
            }
            newArray.push(newValue)
          })
          cssProps[propName] = newArray
        }
      }
    )
  })
}

const applyScales = (cssProps: any, theme: any) => {
  Object.keys(cssProps).forEach(propName => {
    Object.entries(config.scales).forEach(
      ([scaleName, scaleProperties]: [string, any]) => {
        if (scaleProperties.includes(propName)) {
          const newArray = [] as any
          cssProps[propName].forEach((propFromArray: any) => {
            let newValue = propFromArray
            if (Number.isInteger(propFromArray)) {
              newValue = theme[scaleName][propFromArray]
            }
            newArray.push(newValue)
          })
          cssProps[propName] = newArray
        }
      }
    )
  })
}

const applyUnits = (cssProps: any) => {
  Object.keys(cssProps).forEach(propName => {
    Object.entries(config.units).forEach(
      ([unit, unitProperties]: [string, any]) => {
        if (unitProperties.includes(propName)) {
          const newArray = [] as any
          cssProps[propName].forEach((propFromArray: any) => {
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
          cssProps[propName] = newArray
        }
      }
    )
  })
}

const addMediaQueries = (cssProps: any, theme: any) => {
  const mediaQuery = facepaint(
    theme.breakpoints.map(
      (breakPoint: any) => `@media (min-width: ${breakPoint})`
    )
  )

  Object.keys(cssProps).forEach(propName => {
    if (config.responsiveProperties.includes(propName)) {
      const responsiveProp = {} as any
      responsiveProp[propName] = cssProps[propName]
      const mediaQueries = mediaQuery(responsiveProp)[0]
      Object.entries(mediaQueries).forEach(([query, property]) => {
        // Merge in media query together with existing one
        if (query.startsWith('@media ')) {
          if (!cssProps[query]) {
            cssProps[query] = {}
          }
          Object.assign(cssProps[query], property)
        } else {
          cssProps[query] = property
        }
      })
    }
  })
}

/**
 * All properties that are still an array:
 * - length is 1: should pass, they propably were converted by ensureArrays
 *   earlier
 * - length is >1: these were not handled properly as a responsive property, issue a
 *   warning here.
 */
const removeArrays = (cssProps: any) => {
  Object.keys(cssProps).forEach(propName => {
    if (Array.isArray(cssProps[propName])) {
      if (cssProps[propName].length > 1) {
        console.log(
          `Warning: found unhandled responsive property '${propName}', using first
value only. Consider adding this property to the responsiveProperties config array`
        )
      }
      cssProps[propName] = cssProps[propName][0]
    }
  })
}

export const parseStyles = (theme: any, props: any) => {
  const cssProps = Object.assign({}, props)
  removeIgnoredProperties(cssProps)
  replaceAliases(cssProps)
  ensureArrays(cssProps)
  applyStringMaps(cssProps, theme)
  applyScales(cssProps, theme)
  applyUnits(cssProps)
  addMediaQueries(cssProps, theme)
  removeArrays(cssProps)

  return cssProps
}
