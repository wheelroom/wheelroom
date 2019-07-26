import { config } from './config/config'
import { makeResponsive } from './lib/make-responsive'
import { parseProp } from './lib/parse-prop'
import { ResponsiveProp, StaticProp } from './types/props'
import { Theme } from './types/theme'

interface RecursiveParse {
  theme: Theme
  props: any
  result: any
}
const recursiveParse = ({ theme, props, result }: RecursiveParse) => {
  for (const [name, value] of Object.entries(props)) {
    /** If this is an object, start a new parse */
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result[name] = {}
      recursiveParse({ theme, props: value, result: result[name] })
      continue
    }

    /** If this is an alias, parse for each alias */
    if (name in config.propertyAliases) {
      config.propertyAliases[name].forEach((fullPropName: any) => {
        const parsedProp = parseProp({
          name: fullPropName,
          theme,
          value: value as StaticProp | ResponsiveProp,
        })
        if (parsedProp) {
          result[fullPropName] = parsedProp
        }
      })
    } else {
      const parsedProp = parseProp({
        name,
        theme,
        value: value as StaticProp | ResponsiveProp,
      })
      if (parsedProp) {
        result[name] = parsedProp
      }
    }
  }
  makeResponsive({ theme, result })
}
interface ParseStyles {
  theme: Theme
  props: any
}
export const parseStyles = ({ theme, props }: ParseStyles) => {
  const result = {}
  recursiveParse({ theme, props, result })
  return result
}
