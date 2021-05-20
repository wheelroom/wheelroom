import { camelToDash } from './camel-to-dash'

// Convert object with css to css vars
export const cssObjToVars = ({ obj, cssVars, prefix }: any) => {
  cssVars = cssVars || {}
  prefix = prefix || ''
  Object.entries(obj).map(([name, value]) => {
    if (typeof value === 'object') {
      cssObjToVars({
        obj: value,
        cssVars,
        prefix: `${prefix}${prefix && '-'}${camelToDash(name)}`,
      })
    } else {
      cssVars[`--${prefix}${prefix && '-'}${camelToDash(name)}`] = value
    }
  })
  return cssVars
}
