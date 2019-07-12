/** Used to get components from external modules  */
export interface ComponentsMapItem {
  /** Graphql fragment for this model, used to generate files */
  fragment?: any
  /** Model object to be applied */
  model: any
  /** Variations in which the model can be viewed */
  variations?: any
  /** Contentful graphql query that retrieves entries for this model, imported from queryPath */
  query?: any
}

/** Used to get components from external modules  */
export interface ComponentsMap {
  [componentType: string]: ComponentsMapItem
}
