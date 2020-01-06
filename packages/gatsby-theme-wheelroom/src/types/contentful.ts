export interface ContentfulNode {
  id: string
  [key: string]: string
}

export interface ContentfulEdge {
  node: ContentfulNode
  node_locale: string
}

export interface QueryResult {
  [componentName: string]: ContentfulEdge[]
}

export interface QueryResults {
  global: QueryResult
  page: QueryResult
  subPage: QueryResult
  [queryType: string]: QueryResult
}
