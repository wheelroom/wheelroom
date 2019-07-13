import { Component, Components } from '../../types/components'

export const handler = async (argv: any) => {
  console.log('filter', argv.filter)

  const components = argv.components as Components

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
