import { ContentfulEdge, QueryResult, QueryResults } from '../types/contentful'
import { Query } from '../types/options'

interface RunQueries {
  queries: Query[]
  graphql(query: string): Promise<any>
}

export const runQueries = async (context: RunQueries) => {
  const queryResults: QueryResults = {
    global: {} as QueryResult,
    page: {} as QueryResult,
    subPage: {} as QueryResult,
  }
  await Promise.all(
    context.queries.map(async (query: any) => {
      if (['global', 'subPage', 'page'].includes(query.type)) {
        console.log(
          `Running query ${query.componentName} for type ${query.type}`
        )
        const result = await context.graphql(query.query)
        if (!result.data) {
          console.log(`No data received, the result may have errors:`, result)
          throw new Error(
            `Could not find any ${query.componentName} of type ${query.type} at Contentful, please check the model query
            `
          )
        }
        const itemCount = result.data[query.componentName].edges.length
        console.log(
          `Received ${itemCount} ${query.componentName}/${query.type} edge(s)`
        )
        queryResults[query.type][query.componentName] = result.data[
          query.componentName
        ].edges as ContentfulEdge[]
      }
    })
  )
  return queryResults
}
