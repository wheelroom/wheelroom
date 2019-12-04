import { mergeInMediaQuery } from './lib/get-responsive-prop'
import { parseProp } from './lib/parse-prop'
import { Config } from './types/config'
import { ResponsiveProp, StaticProp } from './types/props'
import { Theme } from './types/theme'

/** Nested css props are supported by supplying them in a ncss object */
const nestedPropName = 'ncss'

interface RecursiveParse {
  config: Config
  theme: Theme
  props: any
  result: any
  nestedChild?: boolean
}
const recursiveParse = ({
  config,
  theme,
  props,
  result,
  nestedChild = false,
}: RecursiveParse) => {
  for (const name of Object.keys(props)) {
    /**
     * If this is an object named nestedPropName, or a child from that, start a
     * new parse
     */
    if (
      typeof props[name] === 'object' &&
      props[name] !== null &&
      !Array.isArray(props[name])
    ) {
      const nestedRoot = name === nestedPropName
      if (nestedRoot || nestedChild) {
        if (nestedChild) {
          result[name] = {}
        }
        recursiveParse({
          config,
          nestedChild: true,
          props: props[name],
          result: nestedRoot ? result : result[name],
          theme,
        })
      }
      /** Either way, called recursivly or not, skip futher processing */
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
  config: Config
  theme: Theme
  props: any
}
export const parseStyles = ({ config, theme, props }: ParseStyles) => {
  const result = {}
  recursiveParse({ config, theme, props, result })
  return result
}
