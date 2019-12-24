import { getFilteredComponents } from '../../lib/get-filtered-components.js'
import { Component } from '../../types/components.js'

export const handler = async (argv: any) => {
  const components = getFilteredComponents(argv)

  Object.entries(components).forEach(
    ([componentName, component]: [string, Component]) => {
      console.log(`============================
  Component: ${componentName}
  Fields:    ${component.fields}
  GraphQL:   ${component.graphQL}
`)
    }
  )
}
