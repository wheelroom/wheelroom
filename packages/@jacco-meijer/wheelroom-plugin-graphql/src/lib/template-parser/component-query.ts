import { graphqlQueryBuilder as qb } from '@jacco-meijer/graphql-query-builder'
import { getCases, WheelroomComponent } from '@jacco-meijer/wheelroom'

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
  console.log(prefix, cnCase.kebabCase)

  const queryString = qb({
    fields: {
      [prefix + 'Globals']: {
        alias: 'globals',
        arguments: {
          limit: '10',
        },
        fields: {
          edges: {},
          lastName: {},
        },
      },
    },
    indentLevel: Math.floor(indentLevel / 2),
  })

  return queryString
}
