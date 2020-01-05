import {
  Field as QbField,
  graphqlQueryBuilder as qb,
} from '@jacco-meijer/graphql-query-builder'
import { getCases, WheelroomComponent } from '@jacco-meijer/wheelroom'
import { getWheelroomQuery } from './get-wheelroom-query'

interface ComponentQuery {
  params: {
    [name: string]: string
  }
  component: WheelroomComponent
  componentName: string
}

export const componentQuery = (context: ComponentQuery) => {
  const prefix = context.params.prefix || ''
  const indentLevel = context.params.indent
    ? parseInt(context.params.indent, 10)
    : 0
  const cnCase = getCases(context.componentName)

  const fields = getWheelroomQuery(context.component)

  const mainField = {
    alias: cnCase.camelCase,
    fields,
  } as QbField

  if ('graphQL' in context.component && 'limit' in context.component.graphQL) {
    mainField.arguments = { limit: context.component.graphQL.limit!.toString() }
  }

  const queryString = qb({
    fields: {
      [prefix + cnCase.pascalCase]: mainField,
    },
    indentLevel: Math.floor(indentLevel / 2),
  })

  return queryString
}
