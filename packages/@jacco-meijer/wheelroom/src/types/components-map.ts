import { Model } from './model'

export interface ComponentConfig {
  /** Graphql fragment for this model, used to generate files */
  fragment?: any
  /** Model object to be applied */
  model: Model
  /** Contentful graphql query that retrieves entries for this model, imported from queryPath */
  query?: any
}

export interface ComponentsMap {
  [componentType: string]: ComponentConfig
}
