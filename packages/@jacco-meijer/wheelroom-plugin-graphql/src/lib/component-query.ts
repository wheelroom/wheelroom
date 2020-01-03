import { graphqlQueryBuilder as qb } from '@jacco-meijer/graphql-query-builder'
import { getCases, WheelroomComponent } from '@jacco-meijer/wheelroom'

interface ComponentQuery {
  argName: string
  argValue: string
  component: WheelroomComponent
  componentName: string
}

export const componentQuery = (context: ComponentQuery) => {
  let prefix = ''
  if (context.argName === 'prefix') {
    prefix = context.argValue
  }
  const cnCase = getCases(context.componentName)
  console.log(prefix, cnCase.kebabCase)

  const queryString = qb({
    fields: {
      firstName: {},
      lastName: {},
    },
  })

  return queryString
}
