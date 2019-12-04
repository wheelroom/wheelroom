import { mergeInMediaQuery } from './lib/get-responsive-prop'
import { parseProp } from './lib/parse-prop'
import { ResponsiveProp, StaticProp } from './types/props'
import { StyledSystemConfig } from './types/styled-system-config'
import { StyledSystemTheme } from './types/styled-system-theme'

interface RecursiveParse {
  config: StyledSystemConfig
  theme: StyledSystemTheme
  props: any
  result: any
}
const recursiveParse = ({ config, theme, props, result }: RecursiveParse) => {
  for (const name of Object.keys(props)) {
    if (
      typeof props[name] === 'object' &&
      props[name] !== null &&
      !Array.isArray(props[name])
    ) {
      /** If this is an object start a new parse */
      result[name] = {}
      recursiveParse({
        config,
        props: props[name],
        result: result[name],
        theme,
      })
      continue
    }

    /** If this is an alias, parse for each alias */
    if (name in config.propertyAliases) {
      config.propertyAliases[name].forEach((fullPropName: any) => {
        const propWithMediaQueries = parseProp({
          config,
          name: fullPropName,
          theme,
          value: props[name] as StaticProp | ResponsiveProp,
        })
        mergeInMediaQuery({ result, propWithMediaQueries })
      })
    } else {
      const propWithMediaQueries = parseProp({
        config,
        name,
        theme,
        value: props[name] as StaticProp | ResponsiveProp,
      })
      mergeInMediaQuery({ result, propWithMediaQueries })
    }
  }
}
interface ParseStyles {
  config: StyledSystemConfig
  theme: StyledSystemTheme
  props: any
}
export const parseStyles = ({ config, theme, props }: ParseStyles) => {
  const result = {}
  recursiveParse({ config, theme, props, result })
  return result
}
