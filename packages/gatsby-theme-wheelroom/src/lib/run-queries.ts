import { QueryResults } from '../types/contentful'
import { Query } from '../types/options'

interface RunQueries {
  queries: Query[]
  graphql(query: string): Promise<any>
}

export const runQueries = async (context: RunQueries) => {
  console.log(`Running queries`)
  const queryResults: QueryResults = {
    global: {},
    page: {},
    subPage: {},
  }
  await Promise.all(
    context.queries.map(async (query: any) => {
      if (['global', 'subPage', 'page'].includes(query.type)) {
        console.log(
          `Running query ${query.componentName} for type ${query.type}`
        )
        const result = await context.graphql(query.query)
        if (!result.data) {
          throw new Error(
            `Could not find any ${query.componentName} of type ${query.type} at Contentful, please check the model query
            `
          )
        }
        queryResults[query.type] = result.data[query.componentName].edges
      }
    })
  )
  return queryResults
}
