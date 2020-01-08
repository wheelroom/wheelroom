import {
  Fields as QbFields,
  graphqlQueryBuilder as qb,
} from '@jacco-meijer/graphql-query-builder'
import {
  FieldType,
  getCases,
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import { wheelroomToGraphql } from './wheelroom-to-graphql'

interface ComponentFragment {
  params: {
    [name: string]: string
  }
  component: WheelroomComponent
  componentName: string
  components: WheelroomComponents
}

export const componentFragment = (context: ComponentFragment) => {
  const prefix = context.params.prefix || ''
  const indentLevel = context.params.indent
    ? parseInt(context.params.indent, 10)
    : 0
  const cnCase = getCases(context.componentName)

  const fields: QbFields = {}
  Object.entries(context.component.fields).forEach(
    ([fieldName, field]: [string, FieldType]) => {
      const addField = wheelroomToGraphql({
        components: context.components,
        field,
        fieldName,
      })
      fields[fieldName] = addField
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
