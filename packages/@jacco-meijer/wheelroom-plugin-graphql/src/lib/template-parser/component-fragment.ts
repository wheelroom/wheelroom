import {
  Fields as QbFields,
  graphqlQueryBuilder as qb,
} from '@jacco-meijer/graphql-query-builder'
import {
  getCases,
  WheelroomComponent,
  WheelroomField,
} from '@jacco-meijer/wheelroom'

interface ComponentFragment {
  argName: string
  argValue: string
  component: WheelroomComponent
  componentName: string
}

export const componentFragment = (context: ComponentFragment) => {
  let prefix = ''
  if (context.argName === 'prefix') {
    prefix = context.argValue
  }
  const cnCase = getCases(context.componentName)

  // TODO: Add sub fields per field type like e.g. image
  const fields: QbFields = {}
  Object.entries(context.component.fields).forEach(
    ([fieldName, field]: [string, WheelroomField]) => {
      fields[fieldName] = {}
    }
  )

  const queryString = qb({
    fields,
    fragment: {
      name: cnCase.pascalCase,
      on: prefix + cnCase.pascalCase,
    },
  })

  return queryString
}
