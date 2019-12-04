import { ResponsiveProp, StaticProp } from '../types/props'
import { StyledSystemConfig } from '../types/styled-system-config'
import {
  StyledSystemTheme,
  ThemeList,
  ThemeObject,
} from '../types/styled-system-theme'
import { getResponsiveProp } from './get-responsive-prop'

/**
 * Take a styled system css prop and parse it according to config/default-config.ts. It
 * returns an object which may contain media queries
 */
interface ParseProp {
  config: StyledSystemConfig
  theme: StyledSystemTheme
  name: string
  value: StaticProp | ResponsiveProp
}

export const parseProp = ({ config, theme, name, value }: ParseProp) => {
  let parsedProp: ResponsiveProp
  let result: { [propName: string]: StaticProp }

  /** Ignore properties */
  if (config.ignoreProperties.includes(name)) {
    return
  }

  /**
   * Make sure everything is an array, to make processing further down the
   * line easier
   */
  if (Array.isArray(value)) {
    parsedProp = value as ResponsiveProp
  } else {
    parsedProp = [value] as ResponsiveProp
  }

  /** Apply string maps */
  Object.entries(config.stringMaps).forEach(
    ([stringMapName, stringMapProperties]: [string, any]) => {
      if (stringMapProperties.includes(name)) {
        const newArray = [] as any
        parsedProp.forEach((item: any) => {
          let newValue = item
          if (typeof item === 'string') {
            const stringMap = theme[stringMapName] as ThemeObject
            newValue = stringMap[item] || item
          }
          newArray.push(newValue)
        })
        parsedProp = newArray
      }
    }
  )
  /** Apply scales and allow for negative scales */
  Object.entries(config.scales).forEach(
    ([scaleName, scaleProperties]: [string, any]) => {
      if (scaleProperties.includes(name)) {
        const newArray = [] as any
        parsedProp.forEach((item: any) => {
          let newValue = item
          if (Number.isInteger(item)) {
            const scaleList = theme[scaleName] as ThemeList
            if (item < 0) {
              newValue = -scaleList[-item]
            } else {
              newValue = scaleList[item]
            }
          }
          newArray.push(newValue)
        })
        parsedProp = newArray
      }
    }
  )
  /** Apply Units */
  Object.entries(config.units).forEach(
    ([unit, unitProperties]: [string, any]) => {
      if (unitProperties.includes(name)) {
        const newArray = [] as any
        parsedProp.forEach((item: any) => {
          let newValue = item
          if (typeof item === 'number') {
            if (unit === 'percent') {
              newValue *= 100
              newValue += '%'
            } else {
              newValue += unit
            }
          }
          newArray.push(newValue)
        })
        parsedProp = newArray
      }
    }
  )

  /** Apply facepaint media queries */
  if (config.responsiveProperties.includes(name)) {
    result = getResponsiveProp({ theme, propName: name, propValue: parsedProp })
  } else {
    if (parsedProp.length > 1 && process.env.NODE_ENV !== 'test') {
      console.log(
        `WARNING: found unhandled responsive property '${name}'.
Using first value only. Consider adding this property to the
responsiveProperties config array`
      )
    }
    result = { [name]: parsedProp[0] }
  }
  return result
}
