import {
  Field as QbField,
  graphqlQueryBuilder as qb,
} from '@wheelroom/graphql-query-builder'
import { getCases, WheelroomComponent } from '@wheelroom/wheelroom'
import { getWheelroomQuery } from './get-wheelroom-query'

interface ComponentQuery {
  params: {
    [name: string]: string
  }
  component: WheelroomComponent
  componentName: string
}

export const queryCreator = (context: ComponentQuery) => {
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

  if (
    'settings' in context.component &&
    'queryLimit' in context.component.settings
  ) {
    mainField.arguments = {
      queryLimit: context.component.settings.queryLimit!.toString(),
    }
  }

  const queryString = qb({
    fields: {
      [prefix + cnCase.pascalCase]: mainField,
    },
    indentLevel: Math.floor(indentLevel / 2),
  })

  return queryString
}
