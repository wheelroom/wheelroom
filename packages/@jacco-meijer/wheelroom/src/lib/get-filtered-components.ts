import { Component, Components } from '../types/components.js'

export const getFilteredComponents = (arv: any) => {
  let components = {} as Components
  if ('filter' in arv) {
    console.log(`Applying filter (componentName == ${arv.filter})`)
    Object.entries(arv.components as Components).forEach(
      ([name, component]: [string, Component]) => {
        if (name === arv.filter) {
          components[name] = component
        }
      }
    )
  } else {
    components = arv.components
  }
  if ('filter' in arv && Object.keys(components).length === 0) {
    console.log(
      `Warning, filter (componentName == ${arv.filter}) does not match any component`
    )
  }

  return components
}
