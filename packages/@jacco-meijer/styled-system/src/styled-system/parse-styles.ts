import { config } from './config/config'
import { makeResponsive } from './lib/make-responsive'
import { parseProp } from './lib/parse-prop'

const recursiveParse = (theme: any, props: any, parsedProps: any) => {
  for (const [name, value] of Object.entries(props)) {
    /** If this is an object, start a new parse */
    if (
      typeof props[name] === 'object' &&
      props[name] !== null &&
      !Array.isArray(props[name])
    ) {
      parsedProps[name] = {}
      recursiveParse(theme, props[name], parsedProps[name])
      continue
    }

    /** If this is an alias, parse for each alias */
    if (name in config.propertyAliases) {
      config.propertyAliases[name].forEach((alias: any) => {
        const parsedProp = parseProp(theme, alias, value as any)
        if (parsedProp) {
          parsedProps[alias] = parsedProp
        }
      })
    } else {
      const parsedProp = parseProp(theme, name, value as any)
      if (parsedProp) {
        parsedProps[name] = parsedProp
      }
    }
  }
  makeResponsive(theme, parsedProps)
}

export const parseStyles = (theme: any, props: any) => {
  const result = {}
  recursiveParse(theme, props, result)
  return result
}
