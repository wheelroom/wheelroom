import { Component } from '../../types/components'
import { getFilteredComponents } from './get-filtered-components'

export const handler = async (argv: any) => {
  const components = getFilteredComponents(argv)

  Object.entries(components).forEach(
    ([componentName, component]: [string, Component]) => {
      console.log(`============================
  Component: ${componentName}
  title:     ${component.fields.title.helpText}
  section:   ${component.graphQL.pageSection}
`)
    }
  )
}
