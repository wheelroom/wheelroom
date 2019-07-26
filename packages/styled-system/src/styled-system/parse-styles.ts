import { config } from './config/config'
import { mergeInMediaQuery } from './lib/get-responsive-prop'
import { parseProp } from './lib/parse-prop'
import { ResponsiveProp, StaticProp } from './types/props'
import { Theme } from './types/theme'

interface RecursiveParse {
  theme: Theme
  props: any
  result: any
}
const recursiveParse = ({ theme, props, result }: RecursiveParse) => {
  console.log('recursiveParse', theme, props, result)
  console.log('theme', theme)
  console.log('props', props)
  console.log('result', result)
  for (const name of Object.keys(props)) {
    /** If this is an object, start a new parse */
    if (
      typeof props[name] === 'object' &&
      props[name] !== null &&
      !Array.isArray(props[name])
    ) {
      result[name] = {}
      recursiveParse({ theme, props: props[name], result: result[name] })
      continue
    }

    /** If this is an alias, parse for each alias */
    if (name in config.propertyAliases) {
      config.propertyAliases[name].forEach((fullPropName: any) => {
        const propWithMediaQueries = parseProp({
          name: fullPropName,
          theme,
          value: props[name] as StaticProp | ResponsiveProp,
        })
        mergeInMediaQuery({ result, propWithMediaQueries })
      })
    } else {
      const propWithMediaQueries = parseProp({
        name,
        theme,
        value: props[name] as StaticProp | ResponsiveProp,
      })
      mergeInMediaQuery({ result, propWithMediaQueries })
    }
  }
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
