import {
  Fields as QbFields,
  graphqlQueryBuilder as qb,
} from '@jacco-meijer/graphql-query-builder'
import {
  getCases,
  WheelroomComponent,
  WheelroomField,
} from '@jacco-meijer/wheelroom'
import { wheelroomToGraphql } from './wheelroom-to-graphql'

interface ComponentFragment {
  params: {
    [name: string]: string
  }
  component: WheelroomComponent
  componentName: string
}

export const componentFragment = (context: ComponentFragment) => {
  const prefix = context.params.prefix || ''
  const indentLevel = context.params.indent
    ? parseInt(context.params.indent, 10)
    : 0
  const cnCase = getCases(context.componentName)

  const fields: QbFields = {}
  Object.entries(context.component.fields).forEach(
    ([fieldName, field]: [string, WheelroomField]) => {
      fields[fieldName] = wheelroomToGraphql(fieldName, field)
    }
  )
  const queryString = qb({
    fields,
    fragment: {
      name: cnCase.pascalCase,
      on: prefix + cnCase.pascalCase,
    },
    indentLevel: Math.floor(indentLevel / 2),
  })

  return queryString
}
