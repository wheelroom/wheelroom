import { Component } from '@jacco-meijer/wheelroom'
import { Context } from '../types/context.js'

export const runQueries = async (context: Context) => {
  console.log(`Running queries`)
  await Promise.all(
    Object.entries(context.components).map(
      async ([componentName, wrComponent]: [string, Component]) => {
        const component = wrComponent.component
        if (
          ['global', 'subPage', 'page'].includes(component.model.wheelroomType)
        ) {
          console.log(
            `Running query ${componentName} for type ${component.model.wheelroomType}`
          )
          const result = await context.graphql(component.query)
          if (!result.data) {
            throw new Error(
              `Could not find any ${component.model.type} of type ${component.model.wheelroomType} at Contentful, please check the model query
            `
            )
          }
          context.queries[component.model.wheelroomType][component.model.type] =
            result.data[component.model.type].edges
        }
      }
    )
  )
}
