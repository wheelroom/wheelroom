import { getFilteredComponents } from '../../config/get-filtered-components'
import { Component } from '../../types/components'

export const handler = async (argv: any) => {
  const components = getFilteredComponents(argv)

  Object.entries(components).forEach(
    ([componentName, component]: [string, Component]) => {
      console.log(`============================
  Component name: ${componentName}
  Source module:  ${component.sourceModule}
  Options:        ${component.options}
`)
    }
  )
}
