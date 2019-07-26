import { config } from '../config/config'
import { ResponsiveProp, StaticProp } from '../types/props'
import { Theme, ThemeList, ThemeObject } from '../types/theme'

/** Take a styled system css prop and parse it according to config/config.ts. It
 * returns a ResponsiveProp or undefined if the prop should be ignored
 */
interface ParseProp {
  theme: Theme
  name: string
  value: StaticProp | ResponsiveProp
}

export const parseProp = ({ theme, name, value }: ParseProp) => {
  let parsedProp: ResponsiveProp

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
  /** Apply scales */
  Object.entries(config.scales).forEach(
    ([scaleName, scaleProperties]: [string, any]) => {
      if (scaleProperties.includes(name)) {
        const newArray = [] as any
        parsedProp.forEach((item: any) => {
          let newValue = item
          if (Number.isInteger(item)) {
            const scaleList = theme[scaleName] as ThemeList
            newValue = scaleList[item]
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
  return parsedProp
}
